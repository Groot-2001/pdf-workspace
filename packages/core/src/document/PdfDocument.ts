import { PdfSerializer } from "../serialization/PdfSerializer";
import { PdfPage } from "./PdfPage";

export class PdfDocument {
    private readonly pages: PdfPage[] = [];

    public pageCount(): number {
        return this.pages.length;
    }

    public addPage(): PdfPage {
        const page = new PdfPage();

        this.pages.push(page);

        return page;
    }

    public getPages(): readonly PdfPage[] {
      return this.pages;
  }

    public toBytes(): Uint8Array {
        return new PdfSerializer().serialize(this);
    }
}