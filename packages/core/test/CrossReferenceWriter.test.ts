import { describe, expect, it } from "vitest";

import { BinaryWriter } from "../src/serialization/BinaryWriter";
import { CrossReferenceWriter } from "../src/serialization/writers/CrossReferenceWriter";

describe("CrossReferenceWriter", () => {
  it("writes the cross reference table", () => {
    const writer = new BinaryWriter();

    new CrossReferenceWriter(writer, [
      { objectNumber: 1, offset: 9 },
      { objectNumber: 2, offset: 58 },
      { objectNumber: 3, offset: 117 },
    ]).write();

    const output = new TextDecoder().decode(
      writer.toUint8Array(),
    );

    expect(output).toBe(
      [
        "xref",
        "0 4",
        "0000000000 65535 f",
        "0000000009 00000 n",
        "0000000058 00000 n",
        "0000000117 00000 n",
        "",
      ].join("\n"),
    );
  });
});