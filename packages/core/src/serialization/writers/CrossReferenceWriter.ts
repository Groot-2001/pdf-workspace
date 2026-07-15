import { BinaryWriter } from "../BinaryWriter";
import { PdfObjectOffset } from "../SerializationContext";

export class CrossReferenceWriter {
  constructor(
    private readonly writer: BinaryWriter,
    private readonly offsets: readonly PdfObjectOffset[],
  ) {}

  public write(): void {
    this.writer.writeLine("xref");
    this.writer.writeLine(`0 ${this.offsets.length + 1}`);

    // Free object
    this.writer.writeLine("0000000000 65535 f");

    for (const entry of this.offsets) {
      const offset = entry.offset
        .toString()
        .padStart(10, "0");

      this.writer.writeLine(`${offset} 00000 n`);
    }
  }
}