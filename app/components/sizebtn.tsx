const SizeButton: React.FC<{
  size: string;
  index: number;
  isSelected: boolean;
  onClick: (index: number) => void;
}> = ({ size, index, isSelected, onClick }) => (
  <button
    key={index}
    onClick={() => onClick(index)}
    className={`px-4 py-2 rounded ${
      isSelected ? "bg-slate-700 text-white" : "bg-gray-200 text-gray-800"
    } hover:bg-slate-500`}
  >
    {size}
  </button>
);
export default SizeButton;