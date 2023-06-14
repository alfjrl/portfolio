import Head from "next/head";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projectcard";
import ArticleCard from "@/components/articlecard";
import Footer from "@/components/footer";
import HeroIntro from "@/components/herointro";
import SectionTitle from "@/components/sectiontitle";
import GA from "@/components/ga";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alfred J. Lin | Portfolio</title>
        <meta
          name="description"
          content="Welcome to Alfred's product dsesign portfolio. Alfred is a data-driven product designer, who loves working on complex systems, creating user-centered and ethically humane design."
          key="desc"
        />
      </Head>
      <GA />
      <main className="max-auto bg-white min-h-screen flex flex-col">
        <div className="flex-1">
          <Navbar></Navbar>
          <HeroIntro></HeroIntro>
          <section id="project" className="scroll-my-0">
            <SectionTitle title={"project(s)"}></SectionTitle>
            <ProjectCard></ProjectCard>
          </section>
          <SectionTitle title={"article(s)"}></SectionTitle>
          <ArticleCard></ArticleCard>
          <div className="container max-w-screen-xl pb-20"></div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
