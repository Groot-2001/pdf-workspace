import { DrawOperation } from "../graphics/DrawOperation";

/**
 * Represents a single page inside a PDF document.
 */
 export class PdfPage {
  private readonly operations: DrawOperation[] = [];
}