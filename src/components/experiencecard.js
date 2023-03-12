import exp from "@/data/exp";

export default function ExperienceCard() {
  const exps = exp();

  const cards = exps.map((data) => (
    <div key={data.id} className="">
      <div className="max-w-screen-md flex flex-row items-center h-fit group/card pt-10">
        <div className="border border-slate-300 h-24 sm:h-16 w-0 transition ease-in group-hover/card:border-slate-700"></div>
        <div className="flex flex-col pl-4 ">
          <h2 className="font-inter font-medium text-slate-900">
            {data.title}
          </h2>
          <p className="font-inter text-sm pt-2 text-slate-500 transition ease-in group-hover/card:text-slate-700">
            {data.description}
          </p>
          <p className="font-inter text-sm pt-2 text-slate-500 transition ease-in group-hover/card:text-slate-700">
            {data.time}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container max-w-screen-lg max-auto px-5 sm:pr-8 sm:pl-12 flex flex-col items-start">
      <div className="">{cards}</div>
    </div>
  );
}
