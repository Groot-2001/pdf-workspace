import { describe, expect, it } from "vitest";

import { BinaryWriter } from "../src/serialization/BinaryWriter";
import { CatalogWriter } from "../src/serialization/writers/CatalogWriter";

describe("CatalogWriter", () => {
  it("writes the catalog object", () => {
    const writer = new BinaryWriter();

    new CatalogWriter(writer).write();

    const output = new TextDecoder().decode(writer.toUint8Array());

    expect(output).toBe(
      [
        "1 0 obj",
        "<<",
        "/Type /Catalog",
        "/Pages 2 0 R",
        ">>",
        "endobj",
        "",
      ].join("\n")
    );
  });
});