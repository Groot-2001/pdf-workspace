import { BinaryWriter } from "../BinaryWriter";

export class PagesWriter {
  constructor(
    private readonly writer: BinaryWriter,
  ) {}

  public write(): void {
    this.writer.writeLine("2 0 obj");
    this.writer.writeLine("<<");
    this.writer.writeLine("/Type /Pages");
    this.writer.writeLine("/Count 1");
    this.writer.writeLine("/Kids [3 0 R]");
    this.writer.writeLine(">>");
    this.writer.writeLine("endobj");
  }
}