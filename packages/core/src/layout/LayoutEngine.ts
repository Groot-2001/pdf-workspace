import { LayoutResult } from "./LayoutResult";

import { PdfDocument } from "../document/PdfDocument";

export class LayoutEngine {
    public layout(document: PdfDocument): LayoutResult {
        return new LayoutResult();
    }
}