import assert from "node:assert/strict";
import { test } from "node:test";
import { squish, camelCase } from "../src/text.js";

test("squish collapses whitespace", () => {
  assert.equal(squish("  a \n\t b  "), "a b");
});

test("camelCase joins words split on non-alphanumeric runs", () => {
  assert.equal(camelCase("hello world"), "helloWorld");
  assert.equal(camelCase("hello-world_foo bar"), "helloWorldFooBar");
});

test("camelCase lower-cases the first word and capitalizes the rest", () => {
  assert.equal(camelCase("HELLO WORLD"), "helloWorld");
  assert.equal(camelCase("Already Camel"), "alreadyCamel");
});

test("camelCase collapses consecutive separators", () => {
  assert.equal(camelCase("foo__bar--baz"), "fooBarBaz");
  assert.equal(camelCase("  leading and trailing  "), "leadingAndTrailing");
});

test("camelCase returns empty string for empty or separator-only input", () => {
  assert.equal(camelCase(""), "");
  assert.equal(camelCase("---"), "");
});
