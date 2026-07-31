import { PageComposer } from "../layout/PageComposer";

/**
 * Represents a single page inside a PDF document.
 */
 export class PdfPage {
  private readonly composer = new PageComposer();

  public text(value: string): this {
      this.composer.text(value);
      return this;
  }
}