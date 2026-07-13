/**
 * Base error for all PDF Workspace exceptions.
 */

export class PDFError extends Error{
    constructor(message:string){
        super(message);
        this.name = "PdfError";
        Object.setPrototypeOf(this,new.target.prototype);
    }
}
