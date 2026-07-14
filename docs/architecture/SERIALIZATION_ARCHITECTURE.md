# PDF Serialization Architecture

> "The serializer converts the in-memory document model into a valid PDF binary representation."

---

# Overview

The serialization layer is responsible for transforming the domain model into a standards-compliant PDF document.

The domain model must never know how PDF bytes are produced.

This separation ensures that the document model remains clean, testable, and independent from the PDF specification.

---

# Goals

The serialization architecture should:

- Convert a PdfDocument into PDF bytes
- Support future PDF versions
- Allow incremental feature additions
- Keep the domain model independent
- Support streaming in the future
- Support compression and encryption later

---

# High-Level Architecture

                    Application
                          │
                          ▼
                        PDF API
                          │
                          ▼
                    PdfDocument
                          │
                          ▼
                   PdfSerializer
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
 Object Writer      XRef Writer      Trailer Writer
        │
        ▼
    Binary Output

---

# Responsibilities

## PdfDocument

### Responsibility

Represents the in-memory PDF document.

Owns:

- Pages
- Metadata
- Resources

Does NOT:

- Write bytes
- Allocate object numbers
- Build cross-reference tables

---

## PdfSerializer

### Responsibility

Coordinates serialization.

Responsibilities include:

- Traverse the document
- Allocate PDF object numbers
- Invoke specialized writers
- Produce the final byte stream

The serializer does not contain low-level writing logic.

---

## ObjectWriter

### Responsibility

Serialize individual PDF objects.

Examples:

Catalog

Pages

Page

Font

Image

Annotation

Every object writer is responsible only for its own object type.

---

## XRefWriter

### Responsibility

Generate the PDF cross-reference table.

Responsible for:

- Byte offsets
- Object locations
- Free object entries

No other component should generate xref information.

---

## TrailerWriter

### Responsibility

Generate the trailer section.

Responsible for:

- Root reference
- Info reference
- Document size
- StartXRef

---

# Data Flow

PdfDocument
      │
      ▼
PdfSerializer
      │
      ▼
Allocate Object Numbers
      │
      ▼
Serialize Objects
      │
      ▼
Generate XRef
      │
      ▼
Generate Trailer
      │
      ▼
Binary PDF

---

# Dependency Direction

Application

↓

PDF

↓

PdfDocument

↓

PdfSerializer

↓

Object Writers

↓

Binary Writer

Dependencies always point downward.

The domain model never depends on infrastructure.

---

# Future Components

Future serialization components may include:

- StreamWriter
- FontWriter
- ImageWriter
- ObjectStreamWriter
- EncryptionWriter
- IncrementalWriter
- LinearizationWriter

These should integrate through PdfSerializer without modifying the domain model.

---

# Design Principles

## Single Responsibility

Each writer owns one part of the PDF specification.

---

## Open for Extension

New PDF object types should be added without modifying existing writers.

---

## Domain Independence

The document model must remain completely unaware of serialization.

---

## Capability Driven Development

Serialization features are introduced only when required.

Avoid speculative implementations.

---

# Example Lifecycle

Developer

↓

PDF.create()

↓

PdfDocument

↓

document.addPage()

↓

PdfSerializer.serialize(document)

↓

PDF Binary

---

# Non Goals

The serializer should not:

- Parse PDFs
- Modify documents
- Render graphics
- Perform OCR
- Manage files

Its only responsibility is converting the document model into a valid PDF binary.

---

# Future Evolution

Version 0.1

- Basic serializer

Version 0.2

- Multiple objects

Version 0.3

- Cross-reference table

Version 0.4

- Trailer

Version 0.5

- Valid PDF generation

Version 0.6

- Incremental save

Version 0.7

- Compression

Version 0.8

- Encryption

Version 1.0

- Production-ready serializer

---

# Architecture Philosophy

Serialization is infrastructure.

The document model is the business domain.

The serializer depends on the document model.

The document model must never depend on the serializer.