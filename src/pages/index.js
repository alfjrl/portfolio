import Head from "next/head";
import Navbar from "@/components/navbar";
import Cursor from "@/components/cursor";
import ProjectCard from "@/components/projectcard";
import ArticleCard from "@/components/articlecard";
import Footer from "@/components/footer";
import HeroIntro from "@/components/herointro";
import ExperienceCard from "@/components/experiencecard";
import SectionTitle from "@/components/sectiontitle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alfred J. Lin</title>
        <meta name="Alfred J. Lin" content="Product design portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favi.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="max-auto bg-zinc-50 min-h-screen flex flex-col">
        <div className="flex-1">
          <Navbar></Navbar>
          <HeroIntro></HeroIntro>
          <section id="project">
            <SectionTitle title={"selected projects"}></SectionTitle>
            <ProjectCard link={"/404"}></ProjectCard>
          </section>
          <SectionTitle title={"article(s)"}></SectionTitle>
          <ArticleCard></ArticleCard>
          <SectionTitle title={"exp. & edu"}></SectionTitle>
          <ExperienceCard></ExperienceCard>
          <div className="container max-w-screen-lg pb-16"></div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
