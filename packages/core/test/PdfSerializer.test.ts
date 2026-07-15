import { describe, expect, it } from "vitest";

import { PDF } from "../src/api/PDF";
import { PdfSerializer } from "../src/serialization/PdfSerializer";

describe("PdfSerializer", () => {
  it("serializes the document using all registered writers", () => {
    const document = PDF.create();

    document.addPage();

    const serializer = new PdfSerializer();

    const bytes = serializer.serialize(document);

    const output = new TextDecoder().decode(bytes);

    expect(output).toContain("%PDF-2.0");
    expect(output).toContain("/Type /Catalog");
    expect(output).toContain("/Type /Pages");
    expect(output).toContain("/Type /Page");
  });

  it("returns a Uint8Array", () => {
    const serializer = new PdfSerializer();

    const bytes = serializer.serialize(PDF.create());

    expect(bytes).toBeInstanceOf(Uint8Array);
  });
});