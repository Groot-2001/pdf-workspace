import type { PdfDocument } from "../document/PdfDocument";

export class PdfSerializer {
  public serialize(document: PdfDocument): Uint8Array {
    void document;

    return new TextEncoder().encode("%PDF-2.0\n");
  }
}