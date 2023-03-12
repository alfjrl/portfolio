export default function HeroIntro() {
  return (
    <div className="container max-w-screen-lg max-auto min-h-[50vh] px-5 sm:px-8 flex items-center">
      <div className="flex flex-col">
        <h1 className="font-inter font-medium text-xl">
          {`Hey there, I'm Alfred.`}
        </h1>
        <p className="font-inter text-base text-slate-500 leading-relaxed pt-8 max-w-screen-md">
          A product designer/developer designing and creating{" "}
          <span className="text-slate-900 underline">
            ethically humane digital products
          </span>{" "}
          focused on{" "}
          <span className="text-slate-900 underline">user well-being</span>,
          bringing <span className="text-slate-900  underline">inclusive</span>{" "}
          and{" "}
          <span className="text-slate-900 underline">accessible design</span>{" "}
          into everyone’s daily life.
        </p>
      </div>
    </div>
  );
}
