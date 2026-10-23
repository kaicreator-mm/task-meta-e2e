// Small text utilities used as the task subject for task-meta E2E runs.

/** Collapse runs of whitespace to single spaces and trim both ends. */
export function squish(input) {
  return String(input).replace(/\s+/g, " ").trim();
}

/** Reverse whitespace-separated words, joined by single spaces. */
export function reverseWords(text) {
  return squish(text).split(" ").reverse().join(" ");
}
