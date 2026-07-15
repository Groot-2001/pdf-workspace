import { describe, expect, it } from "vitest";

import { BinaryWriter } from "../src/serialization/BinaryWriter";
import { HeaderWriter } from "../src/serialization/writers/HeaderWriter";

describe("HeaderWriter", () => {
  it("writes the PDF header", () => {
    const writer = new BinaryWriter();

    const header = new HeaderWriter(writer);

    header.write();

    const output = new TextDecoder().decode(
      writer.toUint8Array()
    );

    expect(output).toBe("%PDF-2.0\n");
  });

  it("updates the writer position", () => {
    const writer = new BinaryWriter();

    const header = new HeaderWriter(writer);

    header.write();

    expect(writer.position).toBe(9);
  });
});