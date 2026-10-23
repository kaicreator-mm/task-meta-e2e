// Small text utilities used as the task subject for task-meta E2E runs.

/** Collapse runs of whitespace to single spaces and trim both ends. */
export function squish(input) {
  return String(input).replace(/\s+/g, " ").trim();
}

/** Title-case: uppercase the first character of each word, lowercase the rest. */
export function titleCase(text) {
  return String(text)
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
