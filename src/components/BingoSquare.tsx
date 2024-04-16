function BingoSquare({
  value,
  clicked,
  onClick,
}: {
  id: number;
  value: any;
  clicked: any;
  onClick: any;
}) {
  return (
    <button
      className={`font-mono text-center overflow-clip text-xs rounded-lg hover:border-indigo-400 p-2 ${
        clicked ? "bg-indigo-200" : "bg-zinc-50"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default BingoSquare;
