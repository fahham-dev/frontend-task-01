const CustomButton = ({ openModal }: { openModal: () => void }) => {
  return (
    <button
      className="mb-4 bg-[#0000001c] dark:bg-[#0000002f] rounded-lg py-3 px-4 dark:border-[#ffffff] border-[#c7c7c7] border-2 cursor-pointer"
      onClick={openModal}
    >
      <p className="font-bold dark:text-[#dcdcdc] text-[#2b2b2b]">
        Add Student
      </p>
    </button>
  );
};

export default CustomButton;