import SearchBar from "@/components/SearchBar";
import { classifyImage } from "../../../utils/classifyImage";
import ImageResults from "@/components/ImageResults";

export default async function Imagga({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const { query } = searchParams;

  if (!query)
    return (
      <div>
        <h1 className="text-center font-bold text-6xl mb-6">Imagga</h1>
        <SearchBar />
      </div>
    );

  const imgResults = await classifyImage(query);

  if (!imgResults || !imgResults.result) return <div>Loading...</div>;

  const {
    result: { categories },
    status,
  } = imgResults;

  if (status.type === "error") return <div>{status.text}</div>;

  return (
    <div>
      <h1 className="text-center font-bold text-6xl mb-6">Imagga</h1>
      <SearchBar />
      <ImageResults imageUrl={query} categories={categories} />
    </div>
  );
}
