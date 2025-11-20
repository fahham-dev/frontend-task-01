import { useId } from "react";
import { cn } from "@/lib/utils";
import type { DropDownProps } from "@/types/dropDown";

function DropDown({
  label,
  value,
  options,
  onChange,
  errorName,
  className,
  placeholder = "Select level",
}: DropDownProps) {
  const id = useId();

  return (
    <div className={cn("relative", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-slate-700  mb-1"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <select
          id={id}
          name="level"
          value={value}
          onChange={onChange}
          aria-label={label || placeholder}
          className={cn(
            "appearance-none w-full rounded-md border px-3 py-2 pr-10 bg-white  text-slate-900  placeholder-slate-400 border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 hover:border-slate-300 transition-colors cursor-pointer",
            className
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {errorName && <p className="mt-1 text-xs text-red-600">{errorName}</p>}
    </div>
  );
}

export default DropDown;
