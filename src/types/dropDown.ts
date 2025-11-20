export type DropDownProps = {
  label?: string;
  value: string;
  options: (string | number)[];
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  errorName?: string;
  className?: string;
  placeholder?: string;
};
