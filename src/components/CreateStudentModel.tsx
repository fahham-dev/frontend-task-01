import type { Student } from "@/types/student";
import React, { useEffect, useRef, useState } from "react";
import TextField from "./ui/TextField";
import DropDown from "./ui/DropDown";

const initialForm: Student = {
  id: undefined,
  name: "",
  email: "",
  level: "",
};

const CreateStudentModel = ({
  onClose,
  onAddStudent,
  initialData,
}: {
  onClose: () => void;
  onAddStudent: (student: Student) => void;
  initialData?: Student | null;
}) => {
  const [form, setForm] = useState<Student>(initialData ?? initialForm);
  const [errors, setErrors] = useState<Partial<typeof initialForm>>({});
  const [submitting, setSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const levels = [4, 5, 6, 7];

  useEffect(() => {
    const input = modalRef.current?.querySelector(
      "input,select"
    ) as HTMLElement | null;
    input?.focus();
  }, [initialData]);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm(initialForm);
    }
  }, [initialData]);

  const validate = () => {
    const fields: Partial<typeof initialForm> = {};
    if (!form.name.trim()) fields.name = "Student name is required";
    if (!form.email.trim()) fields.email = "Email is required";
    else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)
    )
      fields.email = "Enter a valid email";
    if (!form.level) fields.level = "Student level is required";
    return fields;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fields = validate();
    setErrors(fields);
    if (Object.keys(fields).length) return;
    setSubmitting(true);

    setTimeout(() => {
      const studentToAdd: Student = {
        ...(form as Student),
        level: Number(form.level),
      };
      onAddStudent(studentToAdd);
      setSubmitting(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 dark:bg-black/70"
        onClick={onClose}
        aria-hidden
      />

      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-xl mx-4 bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-6 md:p-8 ring-1 ring-black/5 dark:ring-white/5"
      >
          <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {initialData ? "Edit Student" : "Create Student"}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
              {initialData
                ? "Update the details and save changes."
                : "All field are required to create a new student."}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-2 cursor-pointer text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-slate-300"
          >
            <div className=" text-2xl">&times;</div>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
          <TextField
            label={"Name"}
            name={"name"}
            value={form.name}
            onChange={handleChange}
            errorName={errors && errors.name}
            placeholder="Student name"
          />

          <TextField
            label={"E-mail"}
            name={"email"}
            value={form.email}
            onChange={handleChange}
            errorName={errors && errors.email}
            placeholder="Student email address"
          />

          <DropDown
            label={"Level *"}
            value={String(form.level)}
            options={levels}
            onChange={handleChange}
            errorName={errors && errors.level?.toString()}
          />

          <div className="mt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-md bg-[#000000bd] text-white px-4 py-2 text-sm font-medium hover:bg-[#000000f7] disabled:opacity-60 cursor-pointer"
            >
              {submitting ? "Saving..." : initialData ? "Save" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudentModel;
