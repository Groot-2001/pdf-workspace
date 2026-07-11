# ADR-0001: Adopt a Single Entry Point Public API

- **ADR ID:** ADR-0001
- **Title:** Adopt a Single Entry Point Public API
- **Status:** Accepted
- **Date:** 2026-07-11
- **Authors:** Shiva Silmawala
- **Reviewers:** TBD
- **Related RFC:** RFC-0001 Core Architecture

---

# Context

One of the primary goals of PDF Workspace is to provide the best possible developer experience for working with PDF documents.

Most existing PDF libraries require developers to understand their internal architecture before they can perform common operations.

Examples include importing multiple modules for parsing, rendering, exporting, or editing.

This increases cognitive load and makes the learning curve unnecessarily steep.

Our goal is to expose a clean and intuitive API that feels natural to JavaScript and TypeScript developers.

---

# Problem

Developers should not need to understand our internal architecture.

The following API is undesirable.

```ts
import Parser from "@pdf-workspace/parser";
import Renderer from "@pdf-workspace/renderer";
import Exporter from "@pdf-workspace/exporter";
import Layout from "@pdf-workspace/layout";
```

Although modular internally, exposing this complexity publicly results in a fragmented developer experience.

---

# Decision

PDF Workspace will expose a single public entry point.

```ts
import PDF from "pdf-workspace";
```

All standard PDF operations will begin from this object.

Example

```ts
const pdf = await PDF.load(file);

pdf.page(0)
   .text(0)
   .setText("John Doe");

await pdf.save();
```

Developers should rarely need additional imports for common workflows.

Internally, the project will remain fully modular.

---

# Rationale

This approach provides several benefits.

- Consistent developer experience
- Lower learning curve
- Better API discoverability
- Improved IntelliSense support
- Simpler documentation
- Easier onboarding
- Reduced decision fatigue

The internal package architecture remains hidden behind a stable public API.

---

# Alternatives Considered

## Option 1 — Multiple Public Packages

Example

```ts
import Parser from "@pdf-workspace/parser";
import Exporter from "@pdf-workspace/exporter";
```

### Pros

- Explicit package ownership
- Small imports
- Independent versioning

### Cons

- Poor developer experience
- Higher learning curve
- More documentation
- Harder discoverability

Decision

Rejected.

---

## Option 2 — Feature Based Imports

Example

```ts
import { Parser } from "pdf-workspace/parser";
import { Exporter } from "pdf-workspace/exporter";
```

### Pros

- Familiar structure
- Tree shaking

### Cons

- Multiple imports
- Internal architecture leaks publicly

Decision

Rejected.

---

## Option 3 — Single SDK Entry Point

Example

```ts
import PDF from "pdf-workspace";
```

### Pros

- Excellent developer experience
- Simple documentation
- Clean API
- Consistent usage
- Easy onboarding

### Cons

- Requires careful internal architecture
- Larger responsibility for the SDK entry point

Decision

Accepted.

---

# Consequences

Positive

- Unified API
- Better developer experience
- Easier documentation
- Stable public contract
- Internal architecture can evolve without breaking users

Negative

- SDK entry point becomes responsible for API composition
- Internal package boundaries must remain disciplined

---

# Implementation Notes

Internally the project remains modular.

```
packages/

core/
parser/
renderer/
exporter/
layout/
json/
plugins/
react/
express/
nest/
```

Only the SDK package is publicly exposed.

```
import PDF from "pdf-workspace";
```

The SDK acts as a facade over the internal packages.

---

# Examples

## Load Document

```ts
const pdf = await PDF.load(file);
```

---

## Create Document

```ts
const pdf = await PDF.create();
```

---

## Export

```ts
await pdf.save();
```

---

## Convert to JSON

```ts
const json = pdf.toJSON();
```

---

## Merge Documents

```ts
const merged = await PDF.merge([
    pdf1,
    pdf2
]);
```

---

## Split Document

```ts
const pages = await PDF.split(pdf);
```

---

# Future Considerations

Advanced users may require direct access to lower-level packages.

Those packages may be published independently for specialized use cases.

However, the recommended and documented approach will always remain:

```ts
import PDF from "pdf-workspace";
```

---

# Risks

Potential risks include:

- Overloading the public API surface
- Maintaining backward compatibility
- Preventing the SDK entry point from becoming a monolith

These risks will be mitigated through:

- Strong internal modularization
- Stable interfaces
- Clear package boundaries
- Continuous architecture reviews

---

# Decision Summary

PDF Workspace adopts a **Single Entry Point Public API**.

Developers interact with one import.

Internal complexity remains internal.

This decision establishes the foundation for the developer experience philosophy of PDF Workspace and will guide the design of every future package and API.