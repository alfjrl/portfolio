import Head from "next/head";
import GA from "@/components/ga";
import Navbar from "@/components/navbar";
import HeroIntro from "@/components/herointro";
import ProjectCard from "@/components/projectcard";
import ArticleCard from "@/components/articlecard";
import Footer from "@/components/footer";
import SectionTitle from "@/components/sectiontitle";
import Divider from "@/components/project/divider";
import OtherThing from "@/components/otherthing";

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
          <Navbar />
          <HeroIntro />
          <section id="project" className="scroll-my-0">
            <SectionTitle title={"selected work(s)"} />
            <ProjectCard />
          </section>
          <SectionTitle title={"other project(s)"} />
          <OtherThing />
          <SectionTitle title={"selected article(s)"} />
          <ArticleCard />

          <Divider />
        </div>
        <Footer />
      </main>
    </>
  );
}
