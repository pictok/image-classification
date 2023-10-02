export default function ImageResultCategory({
  categoryName,
  confidence,
}: {
  categoryName: string;
  confidence: number;
}) {
  return (
    <div className="flex flex-row justify-between space-x-6">
      <div className="flex flex-col">
        <p className="font-bold text-xl">{categoryName}</p>
      </div>
      <div className="flex flex-col self-center">
        <p>{confidence?.toFixed(2)}%</p>
      </div>
    </div>
  );
}
