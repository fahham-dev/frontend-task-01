import type { Student } from "@/types/student";
import { columns } from "@/data/tableColumns";
import CustomButton from "./ui/CustomButton";

const StudentTable = ({
  students,
  onEdit,
  onDelete,
}: {
  students: Student[];
  onEdit?: (s: Student) => void;
  onDelete?: (s: Student) => void;
}) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-lg bg-white p-4">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead>
          <tr>
            {columns.map((column) => {
              const isCenter =
                column.accessorKey === "id" || column.accessorKey === "level";
              return (
                <th
                  key={column.accessorKey}
                  scope="col"
                  className={`px-6 py-3 ${
                    isCenter ? "text-center" : "text-left"
                  } text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600`}
                >
                  {column.header}
                </th>
              );
            })}
          </tr>
        </thead>
        {students.length > 0 ? (
          <tbody className="bg-white divide-y divide-gray-200 ">
            {students.map((student, idx) => (
              <tr
                key={student.id}
                className={
                  idx % 2 === 0
                    ? "bg-gray-50  hover:bg-gray-100  transition-colors"
                    : "bg-white  hover:bg-gray-100  transition-colors"
                }
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                  {student.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                  {student.level}
                </td>
                <td className=" flex flex-col md:flex-row gap-1 py-1">
                  <CustomButton
                    onClick={() => onEdit && onEdit(student)}
                    label="Edit"
                    className="bg-[#efff97da] hover:bg-[#e1f669]"
                  />
                  <CustomButton
                    onClick={() => onDelete && onDelete(student)}
                    label="Delete"
                    className="bg-[#ff9797da] hover:bg-[#fd8282]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={columns.length} className="px-6 py-12 text-center">
                <div className="inline-flex items-center gap-3 text-slate-600">
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      No students found
                    </p>
                    <p className="text-xs text-slate-500">
                      Try adjusting your search or filters.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default StudentTable;
