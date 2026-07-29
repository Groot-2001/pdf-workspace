export class PageMargin {
    constructor(
        public readonly top: number,
        public readonly right: number,
        public readonly bottom: number,
        public readonly left: number
    ) {}

    static all(value: number): PageMargin {
        return new PageMargin(value, value, value, value);
    }

    static symmetric(options: {
        horizontal: number;
        vertical: number;
    }): PageMargin {
        return new PageMargin(
            options.vertical,
            options.horizontal,
            options.vertical,
            options.horizontal
        );
    }
}