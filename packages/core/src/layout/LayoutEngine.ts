import { PdfDocument } from "../document/PdfDocument";
import { LayoutPage } from "./LayoutPage";
import { LayoutResult } from "./LayoutResult";

export class LayoutEngine {
    public layout(document: PdfDocument): LayoutResult {
        const pages = document
            .getPages()
            .map(page => new LayoutPage(page));

        return new LayoutResult(pages);
    }
}