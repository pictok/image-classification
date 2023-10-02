import Link from "next/link";

export default function ImageError() {
  return (
    <div>
      <h2>Error</h2>
      <p>Could not download image</p>
      <Link href="/imagga">Go Back</Link>
    </div>
  );
}
