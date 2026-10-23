// Small text utilities used as the task subject for task-meta E2E runs.

/** Collapse runs of whitespace to single spaces and trim both ends. */
export function squish(input) {
  return String(input).replace(/\s+/g, " ").trim();
}

/** Lowercase; keep ASCII letters/digits, collapse every other run into a single hyphen. */
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
