# API Philosophy

## Principle 1

The API should model the developer's intent rather than the internal PDF specification.

Developers should think in terms of:

- documents
- pages
- text
- images
- forms
- metadata

not:

- objects
- streams
- operators
- cross-reference tables
- indirect references

The SDK is responsible for translating high-level operations into valid PDF structures.

The SDK should expose behaviors before data.

Developers should express intent through methods instead of manipulating internal collections directly.

Good:

```js 
document.addPage()
document.pageCount()
```

Avoid:

```js 
document.pages.push(...)
```

Objects should modify only the state they own.

A PdfPage does not own its position inside a document.

A PdfDocument owns the page collection.

Therefore:

```js 
✓ document.movePage(...)

✗ page.index = ...
```

Objects should be valid immediately after they are created.

Avoid partially initialized objects.

Prefer constructors that require all mandatory information.

Child objects should normally be created by the aggregate root.

Avoid allowing consumers to construct child objects that may violate the aggregate's rules.

Good

```js 
document.addPage()
```

Avoid
```js
document.addPage(new PdfPage(...))
```

Exception handling belongs at system boundaries.

Examples:

✓ File System
✓ Database
✓ Network
✓ PDF Parser
✓ PDF Renderer

Avoid wrapping pure domain logic in try/catch unless the error is being transformed into a meaningful domain error.

## Principle 8 — Domain-Specific Errors

The SDK should communicate failures using domain-specific error types instead of generic JavaScript errors.

Consumers should be able to distinguish different failure scenarios using the type system rather than string comparisons.