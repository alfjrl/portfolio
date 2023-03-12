export default function SectionTitle({ title }) {
  return (
    <div className="group container max-w-screen-lg max-auto px-2 sm:px-4 pt-20 h-full flex">
      <div className="flex flex-row items-center">
        <div className="h-0 w-10 border-t border-slate-900"></div>
        <h1 className="font-inter font-light pl-4 text-slate-900">{title}</h1>
      </div>
    </div>
  );
}
