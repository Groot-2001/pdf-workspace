export class PageComposer {
    private readonly texts: string[] = [];

    public text(value: string): void {
        this.texts.push(value);
    }
}