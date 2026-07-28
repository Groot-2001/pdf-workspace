import { describe, expect, it } from "vitest";

import { PDF } from "../src";

describe("PdfDocument.toBytes", () => {
  it("exports a PDF document", () => {
    const document = PDF.create();

    document.addPage();

    const bytes = document.toBytes();

    expect(bytes).toBeInstanceOf(Uint8Array);
    expect(bytes.length).toBeGreaterThan(0);

    const output = new TextDecoder().decode(bytes);

    expect(output).toContain("%PDF-2.0");
    expect(output).toContain("xref");
    expect(output).toContain("trailer");
    expect(output).toContain("%%EOF");
  });
});