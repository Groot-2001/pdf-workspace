import { describe, expect, it } from "vitest";
import { Paragraph } from "../src/elements/Paragraph";
import { ParagraphBuilder } from "../src/builder/ParagraphBuilder";


describe("ParagraphBuilder", () => {
    it("should add text to a paragraph", () => {
        const paragraph = new Paragraph();

        const builder = new ParagraphBuilder(paragraph);

        builder.text("Hello");
        builder.text("World");

        expect(paragraph.getTexts()).toHaveLength(2);
    });
});