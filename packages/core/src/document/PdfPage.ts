import { ParagraphBuilder } from "../builder/ParagraphBuilder";
import { Paragraph } from "../elements/Paragraph";
import { DocumentContent } from "./DocumentContent";

/**
 * Represents a single page inside a PDF document.
 */
export class PdfPage {
  private readonly content = new DocumentContent();

  public text(value: string): this {
    return this.paragraph(p => {
      p.text(value);
    });
  }

  public paragraph(
    builder: (paragraph: ParagraphBuilder) => void,
  ): this {
    const paragraph = new Paragraph();

    builder(
      new ParagraphBuilder(paragraph)
    );

    if (!paragraph.isEmpty()) {
      this.content.addParagraph(paragraph);
    }

    return this;
  }
}