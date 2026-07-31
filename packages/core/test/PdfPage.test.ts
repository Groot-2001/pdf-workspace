import { describe, expect, it } from "vitest";
import { PdfPage } from "../src/document/PdfPage";

describe("PdfPage", () => {
    it("should create a paragraph", () => {
        const page = new PdfPage();

        page.paragraph(p => {
            p.text("Hello");
            p.text("World");
        });

        expect(() => page.paragraph(() => {})).not.toThrow();
    });
});