import React from "react";

type DropDownProps = {
  label: string;
  value: string;
  levels: (string | number)[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  errorName?: string;
};

function DropDown({ label, value, levels, onChange, errorName }: DropDownProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        {label}
      </label>
      <select
        name="level"
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-700 cursor-pointer"
      >
        <option value="">Select level</option>
        {levels.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
      {errorName && (
        <p className="mt-1 text-xs text-red-600">{errorName}</p>
      )}
    </div>
  );
}

export default DropDown;
