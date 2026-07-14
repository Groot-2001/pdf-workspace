# PDF Object Model

## Purpose

This document explains the logical structure of a PDF document and how it maps to PDF Workspace's internal domain model.

---

# High-Level Structure

A PDF document is composed of interconnected objects.

The minimal document contains:

- Header
- Catalog
- Pages Tree
- At least one Page
- Cross Reference Table
- Trailer
- EOF Marker

---

# Object Relationships

PDF
│
├── Catalog
│   │
│   ▼
│ Pages
│   │
│   ├── Page 1
│   ├── Page 2
│   └── Page N
│
├── Resources
│
├── Metadata
│
└── Trailer

---

# Mapping to the Domain Model

Domain Model

PdfDocument
├── PdfPage
└── Metadata

↓

Serialization

Catalog
Pages
Page
Trailer

The serializer is responsible for translating the domain model into the PDF object graph.

The domain model must never expose PDF-specific concepts such as indirect objects, object numbers, or cross-reference tables.

---

# Design Principle

Developers work with documents.

The serializer works with PDF objects.

These are different models serving different purposes.