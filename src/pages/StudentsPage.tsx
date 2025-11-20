import { useState, useEffect } from "react";
import StudentTable from "@/components/StudentTable";
import CreateStudentModel from "@/components/CreateStudentModel";
import CustomButton from "@/components/ui/CustomButton";
import { students as initialStudents } from "@/data/students";
import type { Student } from "@/types/student";
import {
  getStoredStudents,
  saveStudents,
  addStudentToStorage,
} from "@/services/storageService";

const StudentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState<Student[]>(() => {
    const stored = getStoredStudents();
    return stored && stored.length ? stored : initialStudents;
  });

  useEffect(() => {
    const stored = getStoredStudents();
    if (!stored || !stored.length) {
      saveStudents(initialStudents);
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addStudent = (student: Student) => {
    const added = addStudentToStorage(student);
    setStudents((prev) => [...prev, added]);
  };

  return (
    <div className="dark:bg-gray-700 min-h-screen flex flex-col items-center justify-center p-8">
      <CustomButton openModal={openModal} />
      {isModalOpen && (
        <CreateStudentModel onClose={closeModal} onAddStudent={addStudent} />
      )}

      <StudentTable students={students} />
    </div>
  );
};

export default StudentsPage;
