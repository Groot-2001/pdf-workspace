# PDF Object System

> "A PDF document is not a text file. It is a graph of interconnected objects."

---

# Purpose

Before implementing the serializer, we must understand the building blocks of a PDF.

Every PDF file is composed of objects that reference one another. The serializer's responsibility is to transform our in-memory domain model (`PdfDocument`, `PdfPage`, etc.) into this object graph.

This document explains the PDF object system using comparisons to JavaScript.

---

# Mental Model

Imagine the following JavaScript code:

```ts
const page = {
  width: 595,
  height: 842,
};

const document = {
  pages: page,
};
```

The document **does not contain another copy of the page**.

It simply references it.

A PDF works exactly the same way.

Instead of JavaScript objects and references, it uses **PDF objects** and **object references**.

---

# High-Level Structure

A minimal PDF looks like this:

PDF
│
├── Catalog
│
├── Pages
│
├── Page
│
├── Cross Reference Table
│
└── Trailer

Every item above is an object.

---

# Object Declaration

Every object has an identifier.

Example:

1 0 obj
<<
/Type /Catalog
>>
endobj

Let's break this down.

---

## Object Number

Example:

1

Meaning:

This is object number **1**.

Object numbers uniquely identify objects inside the document.

Think of them like primary keys in a database.

---

## Generation Number

Example:

0

Meaning:

Generation number.

Most PDFs simply use **0**.

Later we'll learn how generation numbers are used for incremental document updates.

For now, always assume **0**.

---

## obj

Marks the beginning of an object.

Equivalent to:

"Object starts here."

---

## endobj

Marks the end of the object.

Equivalent to:

"Object ends here."

---

# Dictionaries

A PDF dictionary stores key/value pairs.

JavaScript:

```ts
{
  type: "Catalog",
  pages: pagesObject
}
```

PDF:

<<
/Type /Catalog
/Pages 2 0 R
>>

Notice:

JavaScript uses:

{}

PDF uses:

<< >>

A dictionary is simply a collection of properties.

---

# Dictionary Keys

Every key begins with a slash.

Example:

/Type

/Pages

/Count

These are just property names.

Equivalent to:

type

pages

count

in JavaScript.

---

# Names

Values beginning with a slash are called **Names**.

Example:

/Catalog

/Pages

/Page

These are similar to enum values.

Example:

```ts
type = "Catalog";
```

becomes

/Type /Catalog

---

# Arrays

JavaScript:

```ts
const kids = [
  page1,
  page2,
];
```

PDF:

[
  3 0 R
  4 0 R
]

Arrays preserve order.

They can contain:

- numbers
- names
- strings
- references
- other arrays
- dictionaries

---

# References

One of the most important concepts in PDF.

Example:

2 0 R

Meaning:

Object Number = 2

Generation = 0

Reference

Equivalent JavaScript:

```ts
const catalog = {
  pages: pagesObject,
};
```

Instead of embedding the page object directly, the Catalog references another object.

---

# Why References?

References provide several advantages.

## No duplication

Multiple objects can point to the same object.

---

## Smaller files

Objects are stored once.

---

## Easier updates

Objects can be replaced without rewriting the entire file.

---

## Object graph

Objects become connected like nodes in a graph.

---

# Direct Objects

Stored directly inside another object.

Example:

<<
/Count 1
>>

The number **1** is a direct object.

---

# Indirect Objects

Stored separately.

Example:

3 0 obj
<<
...
>>
endobj

Referenced using:

3 0 R

Indirect objects have identities.

Direct objects do not.

---

# Visual Example

Object 1

Catalog

↓

Pages → Object 2

────────────────────────────

Object 2

Pages

↓

Kids → Object 3

────────────────────────────

Object 3

Page

Notice that every object points to another object.

This is why we describe a PDF as an object graph.

---

# Mapping to Our Domain Model

Developer API

PdfDocument
│
└── PdfPage

↓

Serializer

↓

Catalog
│
Pages
│
Page

The developer never works with object numbers or references.

Those are serializer implementation details.

---

# Design Principles

## Developers think in documents.

The serializer thinks in PDF objects.

---

## The domain model must not expose PDF internals.

`PdfDocument` should never contain object numbers.

---

## References are serializer concerns.

The serializer assigns object numbers and builds references automatically.

---

# Summary

A PDF document is a graph of interconnected objects.

Every object has:

- Object Number
- Generation Number
- Type
- Optional references to other objects

The serializer converts our domain model into this graph.

Library users work with:

- PdfDocument
- PdfPage

The serializer translates those concepts into:

- Objects
- Dictionaries
- Arrays
- References

Understanding this object system is the foundation for every future serialization component.