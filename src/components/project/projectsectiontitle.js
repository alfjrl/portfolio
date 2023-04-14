export default function ProjectSectionTitle({ title }) {
  return (
    <div className="container max-auto max-w-screen-xl px-2 sm:px-5 pt-10 sm:pt-20">
      <div className="flex flex-row items-center px-2 lg:px-4">
        {/* <div className="h-0 w-10 border-t-2 border-slate-700"></div> */}
        <h2 className="font-inter text-xl font-semibold text-slate-900 uppercase">
          # {title}
        </h2>
        {/* <div className="h-0 w-10 border-t-2 border-slate-700"></div> */}
      </div>
    </div>
  );
}
