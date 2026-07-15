import { BinaryWriter } from "../BinaryWriter";

export class PageWriter {
  constructor(
    private readonly writer: BinaryWriter,
  ) {}

  public write(): void {
    this.writer.writeLine("3 0 obj");
    this.writer.writeLine("<<");
    this.writer.writeLine("/Type /Page");
    this.writer.writeLine("/Parent 2 0 R");
    this.writer.writeLine("/MediaBox [0 0 595 842]");
    this.writer.writeLine(">>");
    this.writer.writeLine("endobj");
  }
}