import { describe, expect, it } from "vitest";
import { PdfDocument } from "../src/document/PdfDocument";
import { LayoutEngine } from "../src/layout/LayoutEngine";

describe("LayoutEngine", () => {
    it("should create one layout page for each document page", () => {
        const document = new PdfDocument();

        document.addPage().text("Hello");
        document.addPage().text("World");

        const result = new LayoutEngine().layout(document);

        expect(result.getPages()).toHaveLength(2);
    });

    it("should create an empty layout for an empty document", () => {
        const document = new PdfDocument();

        const result = new LayoutEngine().layout(document);

        expect(result.getPages()).toHaveLength(0);
    });
});