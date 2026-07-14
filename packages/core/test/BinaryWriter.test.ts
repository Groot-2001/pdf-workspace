import { describe, expect, it } from "vitest";

import { BinaryWriter } from "../src/serialization/BinaryWriter";

describe("BinaryWriter", () => {
  describe("write", () => {
    it("writes text to the output", () => {
      const writer = new BinaryWriter();

      writer.write("Hello");

      const bytes = writer.toUint8Array();
      const text = new TextDecoder().decode(bytes);

      expect(text).toBe("Hello");
    });

    it("supports multiple write operations", () => {
      const writer = new BinaryWriter();

      writer.write("Hello");
      writer.write(" ");
      writer.write("World");

      const bytes = writer.toUint8Array();
      const text = new TextDecoder().decode(bytes);

      expect(text).toBe("Hello World");
    });
  });

  describe("writeLine", () => {
    it("writes a line followed by a newline character", () => {
      const writer = new BinaryWriter();

      writer.writeLine("Hello");

      const bytes = writer.toUint8Array();
      const text = new TextDecoder().decode(bytes);

      expect(text).toBe("Hello\n");
    });

    it("supports multiple lines", () => {
      const writer = new BinaryWriter();

      writer.writeLine("Line 1");
      writer.writeLine("Line 2");
      writer.writeLine("Line 3");

      const bytes = writer.toUint8Array();
      const text = new TextDecoder().decode(bytes);

      expect(text).toBe(
        [
          "Line 1",
          "Line 2",
          "Line 3",
          "",
        ].join("\n")
      );
    });
  });

  describe("position", () => {
    it("starts at zero", () => {
      const writer = new BinaryWriter();

      expect(writer.position).toBe(0);
    });

    it("updates after writing text", () => {
      const writer = new BinaryWriter();

      writer.write("Hello");

      expect(writer.position).toBe(5);
    });

    it("updates after writing multiple chunks", () => {
      const writer = new BinaryWriter();

      writer.write("Hello");
      writer.write(" ");
      writer.write("World");

      expect(writer.position).toBe(11);
    });

    it("counts newline characters written by writeLine", () => {
      const writer = new BinaryWriter();

      writer.writeLine("Hello");

      expect(writer.position).toBe(6);
    });
  });

  describe("toUint8Array", () => {
    it("returns a Uint8Array", () => {
      const writer = new BinaryWriter();

      const bytes = writer.toUint8Array();

      expect(bytes).toBeInstanceOf(Uint8Array);
    });

    it("returns an empty array when nothing has been written", () => {
      const writer = new BinaryWriter();

      const bytes = writer.toUint8Array();

      expect(bytes.length).toBe(0);
    });

    it("returns all written bytes in order", () => {
      const writer = new BinaryWriter();

      writer.write("PDF");
      writer.writeLine("-2.0");

      const bytes = writer.toUint8Array();
      const text = new TextDecoder().decode(bytes);

      expect(text).toBe("PDF-2.0\n");
    });
  });
});