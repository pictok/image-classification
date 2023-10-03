import Image from "next/image";
import ImageResultCategory from "./ImageResultCategory";
import HuggingFaceResultLabel from "./HuggingFaceResultLabel";

type ImageResult = {
  score: string;
  label: string;
};

export default function HuggingFaceImageResults({
  fileName,
  results,
}: {
  fileName: string;
  results: ImageResult[];
}) {
  return (
    <div className="flex flex-col">
      <div className=" h-80 w-80 mx-auto mt-10">
        <div className="rounded-md h-full w-full overflow-hidden relative">
          <Image
            className="object-cover"
            src={`/images/${fileName}.jpg`}
            alt={fileName}
            priority={true}
            fill={true}
          />
        </div>
      </div>
      <div className="mx-auto mt-5">
        <h2 className="font-bold text-3xl text-center">Results</h2>
        <div className="w-full mt-5">
          {results.map((result) => (
            <HuggingFaceResultLabel
              key={result.label}
              score={parseFloat(result.score)}
              label={result.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
