import React from "react";
import CustomButton from "./ui/CustomButton";
import DropDown from "./ui/DropDown";
import TextField from "./ui/TextField";
import { Search } from "lucide-react";

const HeaderWidget = ({
  onClick,
  value,
  options,
  onChange,
  searchValue,
  onSearch,
}: {
  onClick: () => void;
  value: string;
  options: (string | number)[];
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  searchValue?: string;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="w-full rounded-lg shadow-lg bg-white dark:bg-slate-800 p-1 flex flex-col md:flex-row md:items-center gap-3">
      <div className="flex items-center gap-4 w-full ">
        <div className=" flex justify-between w-full">
          <CustomButton
            onClick={onClick}
            label="Add New Student"
            className="bg-slate-200 hover:bg-slate-300"
          />
          <DropDown
            label={""}
            value={value}
            options={options}
            onChange={onChange}
            placeholder="All Levels"
          />
        </div>
      </div>

      <div className=" w-full">
        <div className="relative max-w-xl">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
            <Search />
          </span>
          <TextField
            label={""}
            value={searchValue ?? ""}
            onChange={(e) =>
              onSearch && onSearch(e as React.ChangeEvent<HTMLInputElement>)
            }
            placeholder="Search students by name or email"
            name="search"
            className="pl-10"
          />
        </div>
      </div>

      <div className="w-full md:w-auto flex justify-end"></div>
    </div>
  );
};

export default HeaderWidget;
