export default function HuggingFaceResultLabel({
  score,
  label,
}: {
  score: number;
  label: string;
}) {
  return (
    <div className="flex flex-row justify-between space-x-6">
      <div className="flex flex-col">
        <p className="font-bold text-xl">{label}</p>
      </div>
      <div className="flex flex-col self-center">
        <p>{score?.toFixed(3)}</p>
      </div>
    </div>
  );
}
