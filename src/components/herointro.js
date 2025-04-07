export default function HeroIntro() {
  return (
    <div className="container max-w-screen-xl max-auto min-h-[45vh] px-5 sm:px-8 pt-20 pb-10 flex items-center font-manrope text-slate-900">
      <div className="flex flex-col">
        {/* <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-light leading-relaxed sm:leading-relaxed">
            {`I'm a `}
            <a className="bg-sky-100 font-normal">
              data-driven product designer
            </a>
            , who loves working on complex systems, creating{" "}
            <a className="bg-sky-100 font-normal">user-centered</a> and{" "}
            <a className="bg-sky-100 font-normal">ethically humane design</a>.
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-start pt-8">
          <div className="flex flex-row items-center">
            <p className="text-xl">🧑🏻‍💻</p>
            <p className="pl-3">Product Designer</p>
          </div>
          <div className="flex flex-row items-center pt-4 sm:pt-0 sm:pl-8">
            <p className="text-xl">🐢</p>
            <p className="pl-3">M.S. in HCI, University of Maryland</p>
          </div>
        </div> */}
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-bold leading-relaxed sm:leading-relaxed">
            Alfred J. Lin
          </h1>
          <div className="text-lg sm:text-xl font-medium leading-relaxed sm:leading-relaxed">
            Full Stack Product Designer w/ 5 years of experience
          </div>
          <div className="text-base sm:text-base font-normal leading-relaxed sm:leading-relaxed">
            Higher Education • Manufacturing SaaS • E-commerce
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start pt-8">
          <div className="flex flex-row items-center">
            <p className="text-xl">🧑🏻‍💻</p>
            <p className="pl-3">Product Designer</p>
          </div>
          <div className="flex flex-row items-center pt-4 sm:pt-0 sm:pl-8">
            <p className="text-xl">🐢</p>
            <p className="pl-3">M.S. in HCI, University of Maryland</p>
          </div>
        </div>
      </div>
    </div>
  );
}
