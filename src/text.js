// Small text utilities used as the task subject for task-meta E2E runs.

/** Collapse runs of whitespace to single spaces and trim both ends. */
export function squish(input) {
  return String(input).replace(/\s+/g, " ").trim();
}

/** Cut text to n-1 chars plus "…" when longer than n; n < 1 yields "". */
export function truncate(text, n) {
  if (n < 1) return "";
  const s = String(text);
  if (s.length > n) return s.slice(0, n - 1) + "…";
  return s;
}
