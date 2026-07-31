import { Paragraph } from "../elements/Paragraph";
import { Text } from "../elements/Text";
import { DocumentContent } from "./DocumentContent";

/**
 * Represents a single page inside a PDF document.
 */
export class PdfPage {
    private readonly content = new DocumentContent();

    public text(value: string): this {
      const paragraph = new Paragraph();
  
      paragraph.addText(new Text(value));
  
      this.content.addParagraph(paragraph);
  
      return this;
  }

    /**
     * @internal
     */
    public getContent(): DocumentContent {
        return this.content;
    }
}