import assert from "node:assert/strict";
import { test } from "node:test";
import { squish, titleCase } from "../src/text.js";

test("squish collapses whitespace", () => {
  assert.equal(squish("  a \n\t b  "), "a b");
});

test("titleCase capitalizes each word", () => {
  assert.equal(titleCase("hello world"), "Hello World");
});

test("titleCase normalizes mixed case and whitespace", () => {
  assert.equal(titleCase("  mIxEd   CASE "), "Mixed Case");
});

test("titleCase of empty string is empty", () => {
  assert.equal(titleCase(""), "");
});

test("titleCase of single character uppercases it", () => {
  assert.equal(titleCase("a"), "A");
});
