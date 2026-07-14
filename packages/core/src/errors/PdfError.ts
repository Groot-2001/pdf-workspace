/**
 * Base error for all PDF Workspace exceptions.
 */

export class PdfError extends Error {
    constructor(
        message: string,
        options?: ErrorOptions
    ) {
        super(message, options);

        this.name = "PdfError";
    }
}