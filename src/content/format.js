// Small helpers for dates. Dates in the content files are "YYYY-MM" strings, and null means "still going".
export const yearRange = (start, end) =>
  `${start.slice(0, 4)}-${end ? end.slice(0, 4) : "present"}`;
