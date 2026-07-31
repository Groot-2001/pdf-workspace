import { describe, expect, it } from "vitest";
import { DocumentContent } from "../src/document/DocumentContent";
import { Paragraph } from "../src/elements/Paragraph";

describe("DocumentContent", () => {
    it("should store paragraphs", () => {
        const content = new DocumentContent();

        content.addParagraph(new Paragraph());

        expect(content.getParagraphs()).toHaveLength(1);
    });
});