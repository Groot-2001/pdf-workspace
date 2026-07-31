import { PdfPage } from "../document/PdfPage";

export class LayoutPage {
    public constructor(
        public readonly page: PdfPage,
    ) {}
}