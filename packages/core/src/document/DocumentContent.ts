import { DocumentElement } from "../elements/DocumentElement";

export class DocumentContent {
    private readonly elements: DocumentElement[] = [];

    public add(element: DocumentElement): void {
        this.elements.push(element);
    }

    public getElements(): readonly DocumentElement[] {
        return this.elements;
    }
}