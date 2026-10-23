import assert from "node:assert/strict";
import { test } from "node:test";
import { squish, slugify } from "../src/text.js";

test("squish collapses whitespace", () => {
  assert.equal(squish("  a \n\t b  "), "a b");
});

test("slugify lowercases and separates with single hyphens", () => {
  assert.equal(slugify("Hello, World!"), "hello-world");
  assert.equal(slugify("  A  b  "), "a-b");
  assert.equal(slugify("--x--"), "x");
  assert.equal(slugify("!!!"), "");
  assert.equal(slugify("Node 24 LTS"), "node-24-lts");
});
