# SDK Design

> This document defines the public Software Development Kit (SDK) for PDF Workspace.
>
> The SDK is the primary interface between developers and the PDF Workspace platform.
>
> This document focuses exclusively on API design and does not describe implementation details.

---

# Purpose

The goal of the SDK is to provide a simple, intuitive, and powerful API for working with PDF documents.

Developers should be able to perform common PDF operations without understanding the internal architecture of the platform.

The SDK prioritizes:

- Developer Experience
- Type Safety
- Discoverability
- Consistency
- Extensibility
- Performance

---

# Design Principles

The SDK follows several core principles.

## One Import Philosophy

Developers should only need a single import.

```ts
import PDF from "pdf-workspace";
```

The internal package structure should never be exposed through the public API.

---

## Fluent API

Operations should read naturally.

Example

```ts
const pdf = await PDF.load(file);

pdf
    .page(0)
    .text(0)
    .fontSize(20)
    .color("#2563EB")
    .save();
```

---

## Type Safe

Every public API should provide complete TypeScript support.

Developers should receive rich IntelliSense without consulting documentation.

---

## Framework Agnostic

The SDK should work in:

- JavaScript
- TypeScript
- Node.js
- Browser
- React
- Express
- NestJS

Framework-specific integrations belong to adapter packages.

---

# Public Entry Point

The public SDK begins with a single object.

```ts
import PDF from "pdf-workspace";
```

The `PDF` object acts as the primary facade for the platform.

---

# SDK Architecture

```
                PDF

                 │

            PdfWorkspace

                 │

            PdfDocument

                 │

              PdfPage

                 │

              PdfLayer

                 │

              PdfElement

                ├── PdfText
                ├── PdfImage
                ├── PdfShape
                ├── PdfAnnotation
                └── PdfForm
```

---

# Class Responsibilities

## PDF

The public entry point.

Responsibilities

- Load document
- Create document
- Merge documents
- Split documents
- Import JSON
- Register plugins

---

## PdfWorkspace

Represents the execution environment.

Responsibilities

- Open documents
- Shared resources
- Clipboard
- History
- Undo
- Redo
- Global plugins

---

## PdfDocument

Represents a single PDF document.

Responsibilities

- Metadata
- Pages
- Save
- Export
- Convert to JSON
- Search
- Extraction

---

## PdfPage

Represents one page.

Responsibilities

- Layers
- Size
- Rotation
- Crop
- Elements

---

## PdfLayer

Represents a logical layer.

Responsibilities

- Visibility
- Ordering
- Grouping
- Locking

---

## PdfElement

Base class for all drawable objects.

---

## PdfText

Text object.

---

## PdfImage

Image object.

---

## PdfShape

Shape object.

---

## PdfAnnotation

Annotation object.

---

## PdfForm

Interactive form object.

---

# Public API

## PDF

```ts
class PDF {

    static load()

    static create()

    static merge()

    static split()

    static fromJSON()

    static registerPlugin()

}
```

---

## PdfDocument

```ts
class PdfDocument {

    page()

    pages()

    metadata()

    extract()

    save()

    export()

    toJSON()

    clone()

}
```

---

## PdfPage

```ts
class PdfPage {

    text()

    image()

    shape()

    annotation()

    form()

    layer()

    rotate()

    resize()

}
```

---

## PdfText

```ts
class PdfText {

    content()

    setText()

    font()

    fontSize()

    color()

    move()

    rotate()

    opacity()

    remove()

}
```

---

## PdfImage

```ts
class PdfImage {

    resize()

    crop()

    replace()

    rotate()

    opacity()

    remove()

}
```

---

# Fluent API Examples

## Load

```ts
const pdf = await PDF.load(file);
```

---

## Create

```ts
const pdf = await PDF.create();
```

---

## Edit Text

```ts
const pdf = await PDF.load(file);

pdf
    .page(0)
    .text(0)
    .setText("John Doe");
```

---

## Change Font

```ts
pdf
    .page(0)
    .text(0)
    .font("Inter")
    .fontSize(18);
```

---

## Save

```ts
await pdf.save();
```

---

## Export

```ts
await pdf.export("resume.pdf");
```

---

# Future APIs

The SDK is designed to support future capabilities without breaking existing applications.

---

## AI

```ts
pdf.ai()
    .summarize();

pdf.ai()
    .rewrite();

pdf.ai()
    .translate();
```

---

## Plugins

```ts
PDF.registerPlugin(plugin);
```

---

## Search

```ts
pdf.search("Invoice");
```

---

## Extraction

```ts
pdf.extract()
    .tables();

pdf.extract()
    .images();

pdf.extract()
    .fonts();
```

---

## Collaboration

```ts
pdf.workspace()
    .history();

pdf.workspace()
    .undo();

pdf.workspace()
    .redo();
```

---

# Error Handling

The SDK should expose strongly typed errors.

Examples

```
PdfError

ParserError

ExportError

RenderError

ValidationError
```

---

# Extension Philosophy

Developers should extend functionality through plugins instead of modifying the SDK.

Future packages may include:

```
@pdf-workspace/plugin-watermark

@pdf-workspace/plugin-ocr

@pdf-workspace/plugin-html

@pdf-workspace/plugin-ai

@pdf-workspace/plugin-forms
```

---

# Versioning

The SDK follows Semantic Versioning.

Major versions may introduce breaking changes.

Minor versions introduce new functionality.

Patch versions contain bug fixes.

---

# Design Goals

The SDK should always be:

- Simple
- Discoverable
- Predictable
- Extensible
- Framework Agnostic
- Type Safe

---

# Conclusion

The SDK is the public face of PDF Workspace.

Every future package should integrate with this design rather than introducing new APIs.

Maintaining a consistent SDK is more valuable than adding new features quickly.