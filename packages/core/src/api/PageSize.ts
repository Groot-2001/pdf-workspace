export class PageSize {
    constructor(
        public readonly width: number,
        public readonly height: number
    ) {}

    static readonly A4 = new PageSize(595, 842);
    static readonly A3 = new PageSize(842, 1191);
    static readonly A5 = new PageSize(420, 595);
    static readonly LETTER = new PageSize(612, 792);
    static readonly LEGAL = new PageSize(612, 1008);
}