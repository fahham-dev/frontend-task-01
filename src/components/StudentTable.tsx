import type { Student } from "@/types/student";
import { columns } from "@/data/tableColumns";

const StudentTable = ({ students }: { students: Student[] }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg bg-white dark:bg-gray-900 p-4">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessorKey}
                scope="col"
                className=" px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {students.map((student, idx) => (
            <tr
              key={student.id}
              className={
                idx % 2 === 0
                  ? "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              }
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                {student.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                {student.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                {student.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                {student.level}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
