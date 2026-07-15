import { PdfDocument } from "../document/PdfDocument";

import { BinaryWriter } from "./BinaryWriter";
import { SerializationContext } from "./SerializationContext";

import { HeaderWriter } from "./writers/HeaderWriter";
import { CatalogWriter } from "./writers/CatalogWriter";
import { PagesWriter } from "./writers/PagesWriter";
import { PageWriter } from "./writers/PageWriter";
import { CrossReferenceWriter } from "./writers/CrossReferenceWriter";
import { TrailerWriter } from "./writers/TrailerWriter";

export class PdfSerializer {
  public serialize(document: PdfDocument): Uint8Array {
    void document;

    const writer = new BinaryWriter();
    const context = new SerializationContext();

    new HeaderWriter(writer).write();

    context.registerObject(1, writer.position);
    new CatalogWriter(writer).write();

    context.registerObject(2, writer.position);
    new PagesWriter(writer).write();

    context.registerObject(3, writer.position);
    new PageWriter(writer).write();

    new CrossReferenceWriter(
      writer,
      context.getOffsets(),
    ).write();

    const xrefOffset = writer.position;

    new TrailerWriter(
      writer,
      xrefOffset,
    ).write();

    return writer.toUint8Array();
  }
}