import { LayoutText } from "./LayoutText";

export class LayoutResult {
    private readonly items: LayoutText[] = [];

    public add(item: LayoutText): void {
        this.items.push(item);
    }

    public getItems(): readonly LayoutText[] {
        return this.items;
    }
}