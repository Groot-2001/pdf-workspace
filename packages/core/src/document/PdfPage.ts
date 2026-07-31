import { Text } from "../elements/Text";
import { DocumentContent } from "./DocumentContent";

/**
 * Represents a single page inside a PDF document.
 */
export class PdfPage {
    private readonly content = new DocumentContent();

    public text(value: string): this {
        this.content.add(new Text(value));

        return this;
    }

    /**
     * @internal
     */
    public getContent(): DocumentContent {
        return this.content;
    }
}