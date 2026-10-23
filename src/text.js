// Small text utilities used as the task subject for task-meta E2E runs.

/** Collapse runs of whitespace to single spaces and trim both ends. */
export function squish(input) {
  return String(input).replace(/\s+/g, " ").trim();
}

/** Convert text to camelCase, splitting on any run of non-alphanumeric characters. */
export function camelCase(text) {
  const words = String(text).split(/[^a-zA-Z0-9]+/).filter(Boolean);
  return words
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}
