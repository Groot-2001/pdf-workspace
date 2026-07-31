import { describe, expect, it } from "vitest";
import {TextStyle} from "../src/style/TextStyle";
import {Text} from "../src/elements/Text"

describe("TextStyle", () => {
    it("should use the default text style", () => {
        const text = new Text("Hello");
    
        expect(text.style).toBe(TextStyle.DEFAULT);
    });
    it("should allow a custom text style", () => {
        const style = new TextStyle(24);
    
        const text = new Text("Hello", style);
    
        expect(text.style.fontSize).toBe(24);
    });
});