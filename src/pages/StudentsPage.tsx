import { useState, useEffect } from "react";
import StudentTable from "@/components/StudentTable";
import CreateStudentModel from "@/components/CreateStudentModel";
import { students as initialStudents } from "@/data/students";
import type { Student } from "@/types/student";
import {
  getStoredStudents,
  saveStudents,
  addStudentToStorage,
} from "@/services/storageService";
import {
  updateStudentInStorage,
  deleteStudentById,
} from "@/services/storageService";
import HeaderWidget from "@/components/HeaderWidget";
import Pagination from "@/components/ui/Pagination";

const StudentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [students, setStudents] = useState<Student[]>(() => {
    const stored = getStoredStudents();
    return stored && stored.length ? stored : initialStudents;
  });
  const [filterLevel, setFilterLevel] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 5;

  useEffect(() => {
    const stored = getStoredStudents();
    if (!stored || !stored.length) {
      saveStudents(initialStudents);
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addStudent = (student: Student) => {
    // If student has id -> update existing, else create new
    if (student.id) {
      const updated = updateStudentInStorage(student);
      if (updated) {
        setStudents((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
      }
      return;
    }

    const added = addStudentToStorage(student);
    setStudents((prev) => [...prev, added]);
  };

  const onEdit = (student: Student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const onDelete = (student: Student) => {
    if (!student.id) return;
    const ok = deleteStudentById(student.id);
    if (ok) {
      setStudents((prev) => prev.filter((s) => s.id !== student.id));
      // adjust page if needed
      const filtered = students.filter((s) => s.id !== student.id);
      const total = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
      if (currentPage > total) setCurrentPage(total);
    }
  };

  const levelOptions = Array.from(
    new Set(students.map((s) => String(s.level)))
  ).sort((a, b) => Number(a) - Number(b));

  const displayedStudents = students
    .filter((s) => (filterLevel ? String(s.level) === filterLevel : true))
    .filter((s) => {
      if (!searchTerm) return true;
      const q = searchTerm.toLowerCase();
      return (
        s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q)
      );
    });

  const totalFiltered = displayedStudents.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / PAGE_SIZE));

  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const paginatedStudents = displayedStudents.slice(startIdx, endIdx);

  return (
    <div className="min-h-screen flex flex-col items-start justify-start p-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
        <HeaderWidget
          onClick={openModal}
          value={filterLevel}
          options={levelOptions}
          onChange={(
            e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
          ) => {
            setFilterLevel(e.target.value);
            setCurrentPage(1);
          }}
          searchValue={searchTerm}
          onSearch={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />

        {isModalOpen && (
          <CreateStudentModel
            onClose={() => {
              closeModal();
              setEditingStudent(null);
            }}
            onAddStudent={(s) => {
              addStudent(s);
              setEditingStudent(null);
            }}
            initialData={editingStudent ?? undefined}
          />
        )}

        <StudentTable
          students={paginatedStudents}
          onEdit={onEdit}
          onDelete={onDelete}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(p) => setCurrentPage(p)}
          totalStudents={students.length}
          startStudent={Math.min(totalFiltered, startIdx + 1)}
          endStudent={Math.min(totalFiltered, endIdx)}
        />
      </div>
    </div>
  );
};

export default StudentsPage;
