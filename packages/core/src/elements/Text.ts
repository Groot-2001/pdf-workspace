import { TextStyle } from "../style/TextStyle";
import { DocumentElement } from "./DocumentElement";

export class Text implements DocumentElement {
    constructor(
        public readonly value: string,
        public readonly style: TextStyle = TextStyle.DEFAULT,
    ) {}
}