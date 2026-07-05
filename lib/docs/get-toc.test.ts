import { describe, expect, it } from "vitest";

import { getToc } from "./get-toc";

describe("getToc", () => {
  it("extracts h2/h3 headings with slugified ids", () => {
    const toc = getToc("## Hello World\n\ntext\n\n### A Sub Heading\n");

    expect(toc).toEqual([
      { depth: 2, text: "Hello World", id: "hello-world" },
      { depth: 3, text: "A Sub Heading", id: "a-sub-heading" },
    ]);
  });

  it("disambiguates duplicate headings the same way rehype-slug does", () => {
    const toc = getToc("## Foo\n\n## Foo\n");
    expect(toc.map((item) => item.id)).toEqual(["foo", "foo-1"]);
  });

  it("ignores h1 and h4+ headings", () => {
    const toc = getToc("# Title\n\n## Kept\n\n#### Too deep\n");
    expect(toc).toEqual([{ depth: 2, text: "Kept", id: "kept" }]);
  });
});
