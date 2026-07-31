import { describe, expect, it } from "vitest";
import { Paragraph } from "../src/elements/Paragraph";
import { Text } from "../src/elements/Text";

describe("Paragraph", () => {
    it("should store text elements", () => {
        const paragraph = new Paragraph();

        paragraph.addText(new Text("Hello"));

        expect(paragraph.getTexts()).toHaveLength(1);
    });
});