/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.mjs");
const pdf_name = 'kodekscz';

(async () => {
  const doc = await pdfjsLib.getDocument(`public/books/${pdf_name}.pdf`).promise;

  const pages = [];

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();

    const text = content.items.map((it) => it.str).join(" ");

    pages.push({
      page: i,
      text: text.toLowerCase(),
    });
  }

  fs.writeFileSync(
    `public/books/indexed/${pdf_name}.json`,
    JSON.stringify(pages, null, 2)
  );

  console.log(`✅ INDEX CREATED = ${pdf_name}.json`);
})();