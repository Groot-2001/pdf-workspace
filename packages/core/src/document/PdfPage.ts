import { PdfContentStream } from "../content/PdfContentStream";

/**
 * Represents a single page inside a PDF document.
 */
 export class PdfPage {
  private readonly contentStream = new PdfContentStream();
}