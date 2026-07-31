import { Paragraph } from "../elements/Paragraph";

export class DocumentContent {
    private readonly paragraphs: Paragraph[] = [];

    public addParagraph(paragraph: Paragraph): void {
        this.paragraphs.push(paragraph);
    }

    public getParagraphs(): readonly Paragraph[] {
        return this.paragraphs;
    }
}