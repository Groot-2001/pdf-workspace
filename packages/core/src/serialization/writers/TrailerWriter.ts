import { BinaryWriter } from "../BinaryWriter";

export class TrailerWriter {
  constructor(
    private readonly writer: BinaryWriter,
    private readonly xrefOffset: number,
  ) {}

  public write(): void {
    this.writer.writeLine("trailer");
    this.writer.writeLine("<<");
    this.writer.writeLine("/Size 4");
    this.writer.writeLine("/Root 1 0 R");
    this.writer.writeLine(">>");
    this.writer.writeLine("startxref");
    this.writer.writeLine(this.xrefOffset.toString());
    this.writer.writeLine("%%EOF");
  }
}