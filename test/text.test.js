import assert from "node:assert/strict";
import { test } from "node:test";
import { capitalize, squish } from "../src/text.js";

test("squish collapses whitespace", () => {
  assert.equal(squish("  a \n\t b  "), "a b");
});

test("capitalize upper-cases the first character", () => {
  assert.equal(capitalize("hello"), "Hello");
  assert.equal(capitalize("éclair"), "Éclair");
  assert.equal(capitalize("a"), "A");
});

test("capitalize leaves the rest unchanged", () => {
  assert.equal(capitalize("hELLo world"), "HELLo world");
  assert.equal(capitalize("Hello"), "Hello");
  assert.equal(capitalize(" hello"), " hello");
  assert.equal(capitalize("1hello"), "1hello");
});

test("capitalize returns an empty string for empty input", () => {
  assert.equal(capitalize(""), "");
});
