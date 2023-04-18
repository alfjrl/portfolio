import Head from "next/head";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projectcard";
import ArticleCard from "@/components/articlecard";
import Footer from "@/components/footer";
import HeroIntro from "@/components/herointro";
import ExperienceCard from "@/components/experiencecard";
import SectionTitle from "@/components/sectiontitle";
import GA from "@/components/ga";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alfred J. Lin | Portfolio</title>
        <meta
          name="Alfred J. Lin | Portfolio"
          content="Alfred's product design portfolio"
        />
      </Head>
      <GA />
      <main className="max-auto bg-zinc-50 min-h-screen flex flex-col">
        <div className="flex-1">
          <Navbar></Navbar>
          <HeroIntro></HeroIntro>
          <section id="project" className="scroll-my-10">
            <SectionTitle title={"project(s)"}></SectionTitle>
            <ProjectCard link={"/404"}></ProjectCard>
          </section>
          <SectionTitle title={"article(s)"}></SectionTitle>
          <ArticleCard></ArticleCard>
          <SectionTitle title={"exp. & edu."}></SectionTitle>
          <ExperienceCard></ExperienceCard>
          <div className="container max-w-screen-xl pb-20"></div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
