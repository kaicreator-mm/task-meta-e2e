import assert from "node:assert/strict";
import { test } from "node:test";
import { squish, truncate } from "../src/text.js";

test("squish collapses whitespace", () => {
  assert.equal(squish("  a \n\t b  "), "a b");
});

test("truncate returns text unchanged when not longer than n", () => {
  assert.equal(truncate("hello", 5), "hello");
  assert.equal(truncate("hello", 10), "hello");
});

test("truncate cuts to n-1 chars and appends ellipsis", () => {
  assert.equal(truncate("hello world", 8), "hello w…");
});

test("truncate with n of 1 yields only the ellipsis", () => {
  assert.equal(truncate("hello", 1), "…");
});

test("truncate returns empty string for n < 1", () => {
  assert.equal(truncate("hello", 0), "");
  assert.equal(truncate("hello", -3), "");
});
