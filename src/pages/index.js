import Head from "next/head";
import Navbar from "@/components/navbar";
import Cursor from "@/components/cursor";
import ProjectCard from "@/components/projectcard";
import ArticleCard from "@/components/articlecard";
import Footer from "@/components/footer";

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
          <ProjectCard link={"/404"}></ProjectCard>
          <ProjectCard link={"/404"}></ProjectCard>
          <ArticleCard
            link={
              "https://medium.com/@alfredjlin/co-design-customized-hearing-aids-with-hearing-impaired-people-c2f49c90474"
            }
          ></ArticleCard>
          <ProjectCard link={"/"}></ProjectCard>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
