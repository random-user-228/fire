export function chunkText(text: string) {
  const chunks: string[] = [];

  const size = 1200;
  const overlap = 150;

  let i = 0;

  while (i < text.length) {
    chunks.push(text.slice(i, i + size));
    i += size - overlap;
  }

  return chunks;
}