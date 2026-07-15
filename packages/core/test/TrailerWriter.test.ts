import { describe, expect, it } from "vitest";

import { BinaryWriter } from "../src/serialization/BinaryWriter";
import { TrailerWriter } from "../src/serialization/writers/TrailerWriter";

describe("TrailerWriter", () => {
  it("writes a trailer", () => {
    const writer = new BinaryWriter();

    new TrailerWriter(writer, 123).write();

    const output = new TextDecoder().decode(
      writer.toUint8Array(),
    );

    expect(output).toBe(
      [
        "trailer",
        "<<",
        "/Size 4",
        "/Root 1 0 R",
        ">>",
        "startxref",
        "123",
        "%%EOF",
        "",
      ].join("\n"),
    );
  });

  it("writes the supplied xref offset", () => {
    const writer = new BinaryWriter();

    new TrailerWriter(writer, 999).write();

    const output = new TextDecoder().decode(
      writer.toUint8Array(),
    );

    expect(output).toContain("999");
  });
});