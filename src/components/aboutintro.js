export default function AboutIntro() {
  // born and raised in Taiwan
  return (
    <div className="container max-w-screen-lg max-auto px-5 sm:px-8 pt-10 h-full grid justify-items-start">
      <p className="font-inter flex-grow text-slate-900">
        {`Hello there, it's great to have you here! My name is Alfred, I go by 展任 (Jhan-Ren) in Mandarin.`}
      </p>
      <p className="font-inter flex-grow pt-4 text-lg font-semibold text-slate-900">
        An HCI Graduate Student @ University of Maryland, College Park. An
        Experience Designer, A Product Manager, A Front-end Developer, A
        Problem-solver, and A Cycling Enthusiast.
      </p>
      <p className="font-inter flex-grow pt-4 text-slate-900">
        {`With a broad range of experience in multiple platforms (web,
        iOS/Android) for diffrent B2B / B2C products including internal tools,
        IoT, SaaS, and so on.`}
      </p>
      <p className="font-inter flex-grow pt-4 text-slate-900">
        {`As a product designer, I'm constantly fascinated by how people interact with their surroundings. I enjoy learning about different perspectives and design approaches, which helps me incorporate diverse backgrounds and ideas into my work, whether I'm collaborating with developers or other designers.`}
      </p>
      <p className="font-inter flex-grow pt-4 text-slate-900">
        {`When I'm not working, you can find me relaxing in my backyard with a
        good book or spending my weekends cycling. Lately, I've also become
        obsessed with Formula 1, and I can't get enough of the adrenaline rush
        that comes with every race.`}
      </p>
    </div>
  );
}
