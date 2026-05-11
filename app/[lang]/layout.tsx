import { notFound } from "next/navigation";

// English is served by the unprefixed routes at app/*, so this [lang] tree
// only handles non-default locales (currently just "zh").
const supportedPrefixes = ["zh"] as const;

export function generateStaticParams() {
  return supportedPrefixes.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!supportedPrefixes.includes(lang as (typeof supportedPrefixes)[number])) {
    notFound();
  }
  return <>{children}</>;
}
