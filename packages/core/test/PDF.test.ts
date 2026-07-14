import { describe, expect, it } from "vitest";
import { PDF } from "../src";

describe("PDF", () => {
  it("creates an empty document", () => {
    const document = PDF.create();

    expect(document.pageCount()).toBe(0);
  });
});