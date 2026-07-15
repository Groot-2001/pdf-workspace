export interface PdfObjectOffset {
    objectNumber: number;
    offset: number;
  }
  
  export class SerializationContext {
    private readonly objectOffsets: PdfObjectOffset[] = [];
  
    public registerObject(
      objectNumber: number,
      offset: number,
    ): void {
      this.objectOffsets.push({
        objectNumber,
        offset,
      });
    }
  
    public getOffsets(): readonly PdfObjectOffset[] {
      return this.objectOffsets;
    }
  }