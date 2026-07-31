import { DocumentElement } from "../elements/DocumentElement";
import { LayoutResult } from "./LayoutResult";

export class LayoutEngine {
    public layout(
        elements: readonly DocumentElement[]
    ): LayoutResult {
        return new LayoutResult();
    }
}