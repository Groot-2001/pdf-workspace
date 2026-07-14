import { PdfDocument } from "../document/PdfDocument";

export class PDF {
  /**
   * Creates a new empty PDF document.
   */
  public static create(): PdfDocument {
    return new PdfDocument();
  }
}