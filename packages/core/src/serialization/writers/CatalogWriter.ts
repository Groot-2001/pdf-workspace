import { BinaryWriter } from "../BinaryWriter";

export class CatalogWriter {
    constructor(
      private readonly writer: BinaryWriter
    ) {}
  
    public write(): void {
      this.writer.writeLine("1 0 obj");
      this.writer.writeLine("<<");
      this.writer.writeLine("/Type /Catalog");
      this.writer.writeLine("/Pages 2 0 R");
      this.writer.writeLine(">>");
      this.writer.writeLine("endobj");
    }
  }