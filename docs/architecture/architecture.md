# PDF Workspace Architecture

> "Architecture is the set of decisions that are difficult to change."

This document describes the high-level architecture of PDF Workspace.

It is **not** intended to explain implementation details.
Instead, it defines the major building blocks of the SDK, their responsibilities, and how they interact.

---

# Vision

PDF Workspace is a developer-first PDF SDK for JavaScript and TypeScript.

The goal is to provide a clean, discoverable, and intuitive API that allows developers to work with PDF documents without understanding the PDF specification.

Developers should think about:

- Documents
- Pages
- Text
- Images
- Forms
- Metadata

instead of:

- PDF Objects
- Streams
- Operators
- Cross Reference Tables
- Object Numbers
- Dictionaries

The SDK is responsible for translating high-level operations into valid PDF structures.

---

# Architecture Overview

```
                    Application
                          │
                          ▼
                 Public SDK API
                          │
                          ▼
                 Document Model
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
      Pages            Resources        Metadata
        │
        ▼
 Rendering / Parsing / Serialization
        │
        ▼
          PDF Specification
```

The developer should never have to interact directly with the PDF specification.

---

# Core Components

## PDF

### Responsibility

The entry point of the SDK.

The `PDF` class is responsible for creating, loading, importing, exporting and transforming PDF documents.

Examples:

```ts
const document = await PDF.create();

const document = await PDF.load(file);

const merged = await PDF.merge([a, b]);
```

The `PDF` object should **never** contain document editing logic.

---

## PdfDocument

### Responsibility

Represents a single PDF document.

The document owns:

- Pages
- Metadata
- Fonts
- Images
- Attachments
- Security
- Forms
- Bookmarks

Every operation that modifies a document belongs here.

Examples:

```ts
document.addPage();

document.removePage(0);

document.pageCount();

await document.save();
```

---

## PdfPage

### Responsibility

Represents a single page inside a document.

The page owns everything rendered on that page.

Examples:

```ts
page.text(...);

page.image(...);

page.shape(...);

page.annotation(...);
```

A page should never know how to save the document.

---

# Ownership Rules

```
PDF
│
├── Creates Documents
├── Loads Documents
├── Imports Documents
└── Merges Documents

PdfDocument
│
├── Owns Pages
├── Owns Metadata
├── Owns Fonts
├── Owns Resources
└── Saves Documents

PdfPage
│
├── Owns Text
├── Owns Images
├── Owns Shapes
└── Owns Annotations
```

Each component has exactly one responsibility.

---

# Dependency Direction

```
Application
      │
      ▼
PDF
      │
      ▼
PdfDocument
      │
      ▼
PdfPage
```

Dependencies always flow downward.

A page must never depend on the application.

The document must never depend on UI frameworks.

The SDK core must remain framework independent.

---

# Package Architecture

```
packages/

core/
types/
utils/

parser/
renderer/

layout/
forms/

annotations/
fonts/

images/

encryption/

cli/
```

Each package owns a single domain.

Packages communicate through public interfaces.

---

# Design Principles

## 1. Developer First

The API should optimize for readability.

Example:

```ts
document.addPage();
```

instead of exposing PDF internals.

---

## 2. Intent Over Implementation

The developer describes what they want.

The SDK decides how to produce a valid PDF.

---

## 3. Progressive Complexity

Simple tasks should require very little code.

Advanced functionality should remain available without affecting beginner workflows.

---

## 4. Composition Over Monoliths

Large features should be composed from smaller objects.

Avoid "God Classes."

---

## 5. Backwards Compatibility

Public APIs should remain stable.

Breaking changes require careful consideration and versioning.

---

# Internal Layers

```
Public API

↓

Document Model

↓

Parser

↓

Renderer

↓

Serializer

↓

PDF Binary
```

Each layer has a single responsibility.

No layer should bypass another.

---

# Future Architecture

Future modules may include:

- OCR
- Digital Signatures
- Encryption
- Forms
- Accessibility
- Tagged PDFs
- Collaborative Editing
- Plugins

These should integrate without requiring changes to the existing public API.

---

# Non Goals

The project is **not** intended to become:

- A Word processor
- An Office document converter
- An OCR engine
- A Graphics editor

The SDK has one responsibility:

> Build the best JavaScript and TypeScript PDF SDK.

---

# Architecture Philosophy

A developer should be able to install PDF Workspace and feel that working with PDFs is as natural as working with JavaScript objects.

The complexity of the PDF specification belongs inside the SDK—not in the developer's application.