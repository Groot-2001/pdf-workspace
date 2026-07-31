import { DocumentElement } from "../elements/DocumentElement";

export class PageComposer {
    private readonly elements: DocumentElement[] = [];

    public add(element: DocumentElement): void {
        this.elements.push(element);
    }
}