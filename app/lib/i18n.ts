export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh";
  return "en";
}

// English lives at the root (/about), Chinese is prefixed (/zh/about).
export function swapLocaleInPath(pathname: string, target: Locale): string {
  const current = getLocaleFromPath(pathname);
  if (current === target) return pathname;

  if (target === "zh") {
    return pathname === "/" ? "/zh" : `/zh${pathname}`;
  }

  // target === "en": strip the /zh prefix
  if (pathname === "/zh") return "/";
  return pathname.replace(/^\/zh/, "") || "/";
}
