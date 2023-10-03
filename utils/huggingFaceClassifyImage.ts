import fs from "fs";
import path from "path";

export async function huggingFaceClassifyImage(filename: string) {
  const imagePath = path.join(
    process.cwd(),
    "public",
    "images",
    `${filename}.jpg`
  );
  const data = fs.readFileSync(imagePath);
  const response = await fetch(
    "https://api-inference.huggingface.co/models/google/vit-base-patch16-224",
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
      },
      method: "POST",
      body: data,
    }
  );
  const result = await response.json();
  return result;
}
