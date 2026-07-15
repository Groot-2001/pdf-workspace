import { describe, expect, it } from "vitest";

import { BinaryWriter } from "../src/serialization/BinaryWriter";
import { PagesWriter } from "../src/serialization/writers/PagesWriter";

describe("PagesWriter", () => {
  it("writes a pages object", () => {
    const writer = new BinaryWriter();

    new PagesWriter(writer).write();

    const output = new TextDecoder().decode(writer.toUint8Array());

    expect(output).toBe(
      [
        "2 0 obj",
        "<<",
        "/Type /Pages",
        "/Count 1",
        "/Kids [3 0 R]",
        ">>",
        "endobj",
        "",
      ].join("\n"),
    );
  });

  it("updates the writer position", () => {
    const writer = new BinaryWriter();

    new PagesWriter(writer).write();

    expect(writer.position).toBeGreaterThan(0);
  });
});