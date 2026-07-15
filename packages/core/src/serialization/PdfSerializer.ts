import { PdfDocument } from "../document/PdfDocument";
import { BinaryWriter } from "./BinaryWriter";
import { HeaderWriter } from "./writers/HeaderWriter";
import { CatalogWriter } from "./writers/CatalogWriter";
import { PagesWriter } from "./writers/PagesWriter";
import { PageWriter } from "./writers/PageWriter";

export class PdfSerializer {
  public serialize(document: PdfDocument): Uint8Array {
    void document;

    const writer = new BinaryWriter();

    new HeaderWriter(writer).write();
    new CatalogWriter(writer).write();
    new PagesWriter(writer).write();
    new PageWriter(writer).write();

    return writer.toUint8Array();
  }
}