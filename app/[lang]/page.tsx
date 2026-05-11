import { getDictionary } from "app/lib/dictionaries";
import { getLocaleFromPath } from "app/lib/i18n";

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = getLocaleFromPath(`/${lang}`);
  const dict = getDictionary(locale);

  return (
    <section>
      <div className="max-w-[1280px] w-full md:mx-auto border-x border-gray-200">
        <div className="px-4 py-16 md:py-36 text-gray-500">
          <h1 className="text-3xl md:text-5xl md:pl-24 md:pr-60 mb-8 text-gray-900 md:leading-[3.5rem]">
            嘿,我是林展任 Alfred Lin
          </h1>
          <p className="md:pl-24 md:pr-60 md:text-lg font-semibold">
            {/* Scaffolding placeholder — the real Chinese homepage will share a
                component with the English version once translations land. */}
            中文版正在準備中。Nav labels ({dict.nav.work} · {dict.nav.about} ·{" "}
            {dict.nav.resume}) are wired up; long-form content is pending
            translation.
          </p>
        </div>
      </div>
    </section>
  );
}
