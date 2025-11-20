import { cn } from "../../lib/utils";

const CustomButton = ({
  onClick,
  label,
  className,
}: {
  onClick: () => void;
  label: string;
  className: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-slate-700 cursor-pointer",
        className
      )}
    >
      {label}
    </button>
  );
};

export default CustomButton;
