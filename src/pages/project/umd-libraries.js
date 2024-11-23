import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectIntro from "@/components/project/projectintro";
import ProjectSectionTitle from "@/components/project/projectsectiontitle";
import Paragraph from "@/components/project/paragraph";
import List from "@/components/project/list";
import Divider from "@/components/project/divider";
import SubTitle from "@/components/project/subtitle";
import Quote from "@/components/project/quote";
import ProjectImg from "@/components/project/projectimg";
import Insights from "@/components/project/insights";
import HMW from "@/components/project/hmw";
import AtGlance from "@/components/project/atglance";
import GA from "@/components/ga";

export default function Hyena() {
  const metadata = {
    title: "A New Search Experience for Libraries in Higher Education",
    intro:
      "Reimagined library's search experience by implementing intuitive catalog navigation, transforming how students and faculty access research resources.",
    role: "UX/UI Designer, UX Engineer",
    time: "2023 - present",
    platform: "Desktop / Mobile",
    coworkers: "2 Product Managers, and 1 Software Engineers",
    type: "Work Experience",
    src: "/umd_libraries.png",
  };

  // at glance
  // const atglance = {
  //   title:
  //     "Building a new search experience to help user navigating and searching complex libraries' resources.",
  //   subtitle:
  //     "UMD Libraries migrated its catalog system to a new platform to integrate the whole library servics and resources. The migration also brought the new opportunity to redesign the search interfaces on the main website. The original desgin provided users with a bento-styled search preview results page. In user researches targeting the libraies users, it is discovered that it leads to confusion and frustration. Based on the research results, the major changes I bring is to update the defaul search option and change the user journey to reflect what users real need.",
  //   description:
  //     "Currently, this project is under development and waiting for the final approval of going to production.",
  //   subtitle1: "problem",
  //   description1:
  //     "The orginial design confused users with multiple and unclear search tools, and increase fraction when users try to search and access to the library's resources.",
  //   subtitle2: "solution",
  //   description2:
  //     "A new user journey to streamline the search process with intuitive design, including a new entry point for the search feature on the main website, providing a clear way to utilizing libraries' resources",
  // };
  const atglance = {
    title:
      "Reimagining library search to simplify access to academic resources",
    subtitle:
      "The UMD Libraries' catalog system migration necessitated updates to the search experience on the main website. User researches revealed that the existing bento-style search results created confusion among users. Based on these findings, the redesign focused on streamlining the search journey and restructuring result presentation to align with user needs and research patterns.",
    description:
      "This ongoing project demonstrates my approach to user-centered design in academic resource discovery.",
    subtitle1: "problem",
    description1:
      "Multiple search tools with overlapping functionality created cognitive overload, while the bento-style results layout fragmented the user experience and hindered efficient resource discovery.",
    subtitle2: "solution",
    description2:
      "A unified search interface serves as the intuitive entry point on the homepage, maintaining the bento-style results while changing the default search to the new catalog system. This adjustment reduces cognitive load and guides users more effectively through their research process.",
  };

  return (
    <>
      <Head>
        <title>Search Experience | Alfred J. Lin | Portfolio</title>
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
          {/* <div className="container max-w-screen-xl max-auto"> */}
          <ProjectIntro
            title={metadata.title}
            intro={metadata.intro}
            role={metadata.role}
            time={metadata.time}
            platform={metadata.platform}
            coworkers={metadata.coworkers}
            type={metadata.type}
            src={metadata.src}
          ></ProjectIntro>
          <div className="bg-zinc-50">
            <Divider></Divider>
            <AtGlance props={atglance}></AtGlance>
            <Divider></Divider>
          </div>
          <Quote
            props={
              "This project is currently in development and awaiting production deployment. To learn more about this project or test the features in development, please visit UMD University Libraries website or reach out to me at alfred.jr.lin@gmail.com"
            }
          ></Quote>
          <Divider></Divider>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
