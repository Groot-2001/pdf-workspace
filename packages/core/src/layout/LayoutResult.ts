import { LayoutPage } from "./LayoutPage";

export class LayoutResult {
    public constructor(
        private readonly pages: readonly LayoutPage[],
    ) {}

    public getPages(): readonly LayoutPage[] {
        return this.pages;
    }
}