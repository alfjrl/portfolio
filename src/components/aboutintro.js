export default function AboutIntro() {
  // born and raised in Taiwan
  return (
    <div className="container max-w-screen-lg max-auto px-5 sm:px-8 pt-10 h-full grid justify-items-start">
      <p className="font-inter flex-grow text-slate-900">
        {`Hey, thanks for coming, I'm Alfred. In Mandarin, my name is 展任(Jhan-Ren).`}
      </p>
      <p className="font-inter flex-grow pt-4 text-lg font-semibold text-slate-900">
        An HCI Graduate Student @ University of Maryland, College Park. An
        Experience Designer, A Product Manager, A Front-end Developer, A
        Problem-solver, and A Cycling Enthusiast.
      </p>
      <p className="font-inter flex-grow pt-4 text-slate-900">
        With experiences in multiple platforms (web, iOS/Android), B2B / B2C
        products including internal tools, IoT, SaaS, and so on.
      </p>
      <p className="font-inter flex-grow pt-4 text-slate-900">
        {`I am always fascinated by the way people interact with their
        surroundings. It's the reason I am attracted to product design. I enjoy
        listening to others share their perspective and design approach. This
        enables me to incorporate diverse backgrounds and ideas into my work,
        whether it be working with developers or designers.`}
      </p>
      <p className="font-inter flex-grow pt-4 text-slate-900">
        In my free time, other than chilling in the backyard reading some books,
        you can find me enjoying cycling which might take up to the whole
        weekend. Recently, Formula 1 has become my latest obsession, loving the
        intensity in each race.
      </p>
    </div>
  );
}
