import HeroPhoto from "./herophoto";

export default function HeroIntro() {
  return (
    <div className="container max-w-screen-lg max-auto min-h-[45vh] px-5 sm:px-8 pt-20 pb-10 flex items-center font-manrope text-slate-900 justify-between">
      <div className="flex flex-col max-w-lg">
        <h1 className="text-3xl sm:text-5xl font-bold leading-relaxed">
          Alfred J. Lin
        </h1>
        <div className="text-lg sm:text-xl font-medium leading-relaxedmb-2">
          Full Stack Product Designer w/ 5 years of experience
        </div>
        <div className="text-base sm:text-base font-normal leading-relaxed mb-8">
          Higher Education • Manufacturing SaaS • E-commerce
        </div>
        <div className="text-base sm:text-base font-normal leading-relaxed">
          A data-driven product designer who loves working on complex systems
          and creating <span className="bg-custom">user-centered</span> and{" "}
          <span className="bg-custom">ethically humane design</span>.
        </div>
      </div>
      <div className="photo hidden md:block translate-y-4">
        <HeroPhoto />
      </div>
    </div>
  );
}
