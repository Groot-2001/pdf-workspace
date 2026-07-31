import { LayoutText } from "./LayoutText";

export class LayoutParagraph {
    private readonly texts: LayoutText[] = [];

    public addText(text: LayoutText): void {
        this.texts.push(text);
    }

    public getTexts(): readonly LayoutText[] {
        return this.texts;
    }
}