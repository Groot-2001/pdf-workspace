import { writeFileSync } from "node:fs";

import { PDF } from "@pdf-workspace/core";

const document = PDF.create();

document.addPage();

writeFileSync(
  "hello.pdf",
  document.toBytes(),
);

console.log("Generated hello.pdf");