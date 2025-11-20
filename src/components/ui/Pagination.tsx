import type { PaginateProps } from "@/types/paginate";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalStudents,
  startStudent,
  endStudent,
}: PaginateProps) {
  if (totalPages <= 1) return null;

  const pages: (number | string)[] = [];
  const delta = 2;
  const left = Math.max(1, currentPage - delta);
  const right = Math.min(totalPages, currentPage + delta);

  for (let i = left; i <= right; i++) pages.push(i);
  if (left > 2) pages.unshift("...");
  if (left > 1) pages.unshift(1);
  if (right < totalPages - 1) pages.push("...");
  if (right < totalPages) pages.push(totalPages);

  return (
    <nav
      className="flex items-center justify-between mt-4"
      aria-label="Pagination"
    >
      <div className="text-sm text-slate-600">
        Showing{" "}
        <span className="font-medium text-slate-900">{startStudent}</span>
        {" - "}
        <span className="font-medium text-slate-900">{endStudent}</span>
        {" of "}
        <span className="text-slate-400"> {" total students "}</span>
        <span className="font-medium text-slate-900">{totalStudents}</span>
      </div>
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-l-md border bg-white text-sm ${
              currentPage === 1
                ? "text-slate-400 cursor-not-allowed"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Prev
          </button>
        </li>

        {pages.map((p, idx) => (
          <li key={`${p}-${idx}`}>
            {typeof p === "string" ? (
              <span className="px-3 py-1 border bg-white text-sm text-slate-500">
                {p}
              </span>
            ) : (
              <button
                onClick={() => onPageChange(p)}
                className={`px-3 py-1 border text-sm ${
                  p === currentPage
                    ? "bg-slate-700 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {p}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-r-md border bg-white text-sm ${
              currentPage === totalPages
                ? "text-slate-400 cursor-not-allowed"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
