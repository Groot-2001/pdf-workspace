import { LayoutPage } from "./LayoutPage";

export class LayoutResult {
    private readonly pages: LayoutPage[] = [];

    public addPage(page: LayoutPage): void {
        this.pages.push(page);
    }

    public getPages(): readonly LayoutPage[] {
        return this.pages;
    }
}