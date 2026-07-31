import { DocumentElement } from "./DocumentElement";

export class Text implements DocumentElement {
    constructor(
        public readonly value: string
    ) {}
}