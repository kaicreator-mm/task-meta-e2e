import assert from "node:assert/strict";
import { test } from "node:test";
import { reverseWords, squish } from "../src/text.js";

test("squish collapses whitespace", () => {
  assert.equal(squish("  a \n\t b  "), "a b");
});

test("reverseWords reverses word order", () => {
  assert.equal(reverseWords("one two three"), "three two one");
});

test("reverseWords normalizes whitespace", () => {
  assert.equal(reverseWords("  one\t two\nthree\r\n "), "three two one");
});

test("reverseWords returns an empty string for empty or whitespace-only input", () => {
  assert.equal(reverseWords(""), "");
  assert.equal(reverseWords(" \t\n\r "), "");
});

test("reverseWords preserves a single word and punctuation", () => {
  assert.equal(reverseWords("  hello!  "), "hello!");
  assert.equal(reverseWords("hello, world!"), "world! hello,");
});
