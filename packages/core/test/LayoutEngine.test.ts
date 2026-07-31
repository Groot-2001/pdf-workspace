import { describe, expect, it } from "vitest";
import { LayoutEngine } from "../src/layout/LayoutEngine";
import { PdfDocument } from "../src/document/PdfDocument";

describe("LayoutEngine", () => {
    it("should produce an empty layout result", () => {
        const document = new PdfDocument();

        const result = new LayoutEngine().layout(document);

        expect(result.getPages()).toHaveLength(0);
    });
});