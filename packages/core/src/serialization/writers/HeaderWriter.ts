import { BinaryWriter } from "../BinaryWriter";
export const PDF_VERSION = "2.0";

export const PDF_HEADER = `%PDF-${PDF_VERSION}`;

export class HeaderWriter {
  constructor(
    private readonly writer: BinaryWriter
  ) {}

  public write(): void {
    this.writer.writeLine(PDF_HEADER);
  }
}