import { describe, expect, it } from "vitest";
import { DocumentContent } from "../src/document/DocumentContent";
import { Text } from "../src/elements/Text";

describe("DocumentContent", () => {
    it("should add document elements", () => {
        const content = new DocumentContent();

        content.add(new Text("Hello"));

        expect(content.getElements()).toHaveLength(1);
    });
});