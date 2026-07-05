import { describe, expect, it } from "vitest";

import { getAllDocsMeta } from "./get-docs";
import { buildNavGroups, CATEGORY_ORDER } from "./nav-config";

describe("buildNavGroups", () => {
  it("groups docs by category, preserving CATEGORY_ORDER", () => {
    const groups = buildNavGroups(getAllDocsMeta());
    const expectedOrder = CATEGORY_ORDER.filter((category) =>
      groups.some((group) => group.category === category)
    );

    expect(groups.map((group) => group.category)).toEqual(expectedOrder);
  });

  it("sorts items within a category by their order field", () => {
    const groups = buildNavGroups(getAllDocsMeta());
    const gameplay = groups.find((group) => group.category === "Oynanış");
    const orders = gameplay?.items.map((item) => item.order) ?? [];

    expect(orders).toEqual([...orders].sort((a, b) => a - b));
  });

  it("omits categories with no docs", () => {
    const groups = buildNavGroups([]);
    expect(groups).toHaveLength(0);
  });
});
