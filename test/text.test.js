import assert from "node:assert/strict";
import { test } from "node:test";
import { countWords, squish } from "../src/text.js";

test("squish collapses whitespace", () => {
  assert.equal(squish("  a \n\t b  "), "a b");
});

test("countWords returns zero for empty or whitespace-only text", () => {
  assert.equal(countWords(""), 0);
  assert.equal(countWords(" \t\n\r\u00a0 "), 0);
});

test("countWords counts whitespace-separated words", () => {
  assert.equal(countWords("hello"), 1);
  assert.equal(countWords("hello world"), 2);
  assert.equal(countWords("  one\t two\nthree\r\nfour\u00a0five  "), 5);
});

test("countWords treats punctuation as part of a word", () => {
  assert.equal(countWords("hello, world! well-known"), 3);
});
