function TextField({
  label,
  value,
  onChange,
  errorName,
  name,
}: {
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  errorName?: string;
  name?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        {label} *
      </label>
      <input
        name={name ?? "name"}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-700`}
        placeholder="Fahham"
      />
      {errorName && <p className="mt-1 text-xs text-red-600">{errorName}</p>}
    </div>
  );
}

export default TextField;
