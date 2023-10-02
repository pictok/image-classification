import Image from "next/image";
import ImageResultCategory from "./ImageResultCategory";

type ImageCategory = {
  confidence: number;
  name: {
    en: string;
  };
};

export default function ImageResults({
  imageUrl,
  categories,
}: {
  imageUrl: string;
  categories: ImageCategory[];
}) {
  return (
    <div className="flex flex-col">
      <div className=" h-80 w-80 mx-auto mt-10">
        <div className="rounded-md h-full w-full overflow-hidden relative">
          <Image
            className="object-cover"
            src={imageUrl}
            alt={"alt"}
            priority={true}
            fill={true}
          />
        </div>
      </div>
      <div className="mx-auto mt-5">
        <h2 className="font-bold text-3xl text-center">Results</h2>
        <div className="w-full mt-5">
          {categories.map((category) => (
            <ImageResultCategory
              key={category.confidence}
              categoryName={category.name.en}
              confidence={category.confidence}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
