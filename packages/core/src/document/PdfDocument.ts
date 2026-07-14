import { PdfPage } from "./PdfPage";

export class PdfDocument {

    private readonly pages: PdfPage[] = [];

    public pageCount(): number{
        return this.pages.length;
    }

    public addPage(): PdfPage {
        const page = new PdfPage(this.pages.length);
    
        this.pages.push(page);
    
        return page;
      }
}