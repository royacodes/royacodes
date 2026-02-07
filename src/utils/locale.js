export function pickLocale(value, locale, fallbackLocale = "en") {
  if (value === null || value === undefined) return "";
  if (typeof value === "string" || typeof value === "number")
    return String(value);

  if (typeof value === "object") {
    const v = value?.[locale] ?? value?.[fallbackLocale];
    if (typeof v === "string" || typeof v === "number") return String(v);

    const first = Object.values(value).find(
      (x) => typeof x === "string" || typeof x === "number",
    );
    return first ? String(first) : "";
  }

  return String(value);
}

export function pickLocaleArray(value, locale, fallbackLocale = "en") {
  if (Array.isArray(value)) return value;
  if (!value || typeof value !== "object") return [];

  const v = value?.[locale] ?? value?.[fallbackLocale];
  return Array.isArray(v) ? v : [];
}

const PERSIAN_DIGITS = {
  0: "۰",
  1: "۱",
  2: "۲",
  3: "۳",
  4: "۴",
  5: "۵",
  6: "۶",
  7: "۷",
  8: "۸",
  9: "۹",
};

export function toPersianDigits(input) {
  return String(input).replace(/[0-9]/g, (d) => PERSIAN_DIGITS[d] ?? d);
}
