import { DocumentElement } from "./DocumentElement";
import { Text } from "./Text";

export class Paragraph implements DocumentElement {
    private readonly texts: Text[] = [];

    public addText(text: Text): void {
        this.texts.push(text);
    }

    public getTexts(): readonly Text[] {
        return this.texts;
    }
}