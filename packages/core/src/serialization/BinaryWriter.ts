export class BinaryWriter {
    private readonly encoder = new TextEncoder();
  
    private readonly chunks: Uint8Array[] = [];
  
    private _position = 0;
  
    public get position(): number {
      return this._position;
    }
  
    public write(data: string): void {
      //convert string into Uint8Array of UTF-8 bytes
      const bytes = this.encoder.encode(data);
  
      //push that bytes into chunks array
      this.chunks.push(bytes);
  
      //for each byte move the postion to the next to write
      this._position += bytes.length;
    }
  
    public toUint8Array(): Uint8Array {
      const result = new Uint8Array(this._position);
  
      let offset = 0;
  
      for (const chunk of this.chunks) {
        result.set(chunk, offset);
        offset += chunk.length;
      }
  
      return result;
    }

    public writeLine(data: string): void {
        this.write(`${data}\n`);
    }
  }