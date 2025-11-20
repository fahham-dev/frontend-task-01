import type { Student } from "@/types/student";

const STORAGE_KEY = "sim-students";

export function getStoredStudents(): Student[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Student[];
  } catch {
    return [];
  }
}

export function saveStudents(students: Student[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  } catch {
    console.log("Fail to add students list");
  }
}

export function addStudentToStorage(student: Student): Student {
  const current = getStoredStudents();
  const nextId =
    (current.length ? Math.max(...current.map((s) => s.id ?? 0)) : 0) + 1;
  const newStudent: Student = {
    ...student,
    id: nextId,
    level: Number(student.level),
  };
  current.push(newStudent);
  saveStudents(current);
  return newStudent;
}

export function clearStoredStudents() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    console.log("Faild to remove");
  }
}
