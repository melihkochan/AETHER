import { describe, expect, it } from "vitest";

import { getAllDocsMeta, getDocBySlug } from "./get-docs";

describe("getAllDocsMeta", () => {
  it("returns all 11 docs (index + 10 sub-pages)", () => {
    const docs = getAllDocsMeta();
    expect(docs).toHaveLength(11);
  });

  it("derives hrefs correctly from filenames", () => {
    const docs = getAllDocsMeta();
    const index = docs.find((doc) => doc.slug === "");
    const world = docs.find((doc) => doc.slug === "world");

    expect(index?.href).toBe("/documentation");
    expect(world?.href).toBe("/documentation/world");
  });
});

describe("getDocBySlug", () => {
  it("reads the index doc for an empty slug", () => {
    const { meta, content } = getDocBySlug("");
    expect(meta.title).toBe("Genel Bakış");
    expect(content).toContain("AETHER dokümantasyonu");
  });

  it("throws for an unknown slug", () => {
    expect(() => getDocBySlug("does-not-exist")).toThrow();
  });
});
