const mergePDFs = async (p1, p2) => {
  const PDFMerger = await import("pdf-merger-js");
  const merger = new PDFMerger.default();

  await merger.add(p1);
  await merger.add(p2);
  await merger.save("public/merged.pdf");
};

module.exports = { mergePDFs };
