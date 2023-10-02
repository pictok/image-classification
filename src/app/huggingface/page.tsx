import SearchBar from "@/components/SearchBar";
import { huggingFaceClassifyImage } from "../../../utils/huggingFaceClassifyImage";
import HuggingFaceImageResults from "@/components/HuggingFaceImageResults";

export default async function HuggingFace({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const { query } = searchParams;

  if (!query)
    return (
      <div>
        <h1 className="text-center font-bold text-6xl mb-6">Hugging Face</h1>
        <SearchBar />
      </div>
    );

  const imgResults = await huggingFaceClassifyImage(query);

  return (
    <div>
      <h1 className="text-center font-bold text-6xl mb-6">Hugging Face</h1>
      <SearchBar />
      <HuggingFaceImageResults fileName={query} results={imgResults} />
    </div>
  );
}
