import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectIntro from "@/components/project/projectintro";
import ProjectSectionTitle from "@/components/project/projectsectiontitle";
import AtGlance from "@/components/project/atglance";
import Divider from "@/components/project/divider";
import SubTitle from "@/components/project/subtitle";
import Paragraph from "@/components/project/paragraph";
import ProjectImg from "@/components/project/projectimg";
import List from "@/components/project/list";
import GA from "@/components/ga";
import HMW from "@/components/project/hmw";

export default function SmartDaily() {
  const metadata = {
    title: "[DRAFT] Obran OS - An Internal User Center for Coop Members",
    intro:
      "Redesigning an online service ordering experience by identifying the user needs to provide a user-friendly process.",
    role: "Product Designer",
    time: "2022 - 2023",
    platform: "Web & Mobile",
    coworkers:
      "Alfred Lin, Jing Wang, Sourabh Doraji, Tushar Karlapudi, Yeri Yeong",
    type: "Course Project",
    src: "/obran.png",
  };

  // at glance
  const atglance = {
    title:
      "Redesigning the online ordering experience for postal service with research insights to fulfill users' needs.",
    subtitle:
      "When I took over the project, the online ordering service for the postal service was already finished its MVP test and was prepared to officially release it to the public. Before that, we needed to solve the significant usability issues for the best user experience and reduce the workload for the customer service team. We started with conducting user research to understand the current usability issues of the service and users' experiences and expectations. Based on the insights, we redesigned key features and rolled out the service to all of the users in Taiwan.",
    description: "",
    subtitle1: "problem",
    description1:
      "Focusing on verifying the business value and lack of consideration from the users' perspectives led to bad product design with complaints from users.",
    subtitle2: "solution",
    description2:
      "Redesigning the features and user flows to provide sufficient information in the process and a convenient checkout flow to improve overall service ratings from users.",
  };

  return (
    <>
      <Head>
        <title>Obran OS | Alfred J. Lin | Portfolio</title>
        <meta
          name="Obran OS | Alfred J. Lin | Portfolio"
          content="Alfred's product design portfolio"
        />
      </Head>
      <GA />
      <main className="max-auto bg-white min-h-screen flex flex-col">
        <div className="flex-1">
          <Navbar></Navbar>
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
            <Divider />
            {/* <AtGlance props={atglance} /> */}
            <Divider />
          </div>
          <ProjectSectionTitle title={"Background"}></ProjectSectionTitle>
          <Paragraph
            props={
              "In this section, I would briefly introduce Obran Coop and what is Obran OS with its current status."
            }
          ></Paragraph>
          <Paragraph
            props={
              "Also, I would mention this is a year-long project with 5 sprints."
            }
          ></Paragraph>
          <ProjectSectionTitle title={"The challenge"}></ProjectSectionTitle>
          <Paragraph
            props={
              "In this section, I would talk about how we understand Obran's goal for the Obran OS by mapping out Note-n-Map. "
            }
          ></Paragraph>
          <Paragraph
            props={
              "And after internal discussion, we decide on the direction for this project, which is focusing on ICA(internal capital account), and talk about the HMW we are going to solve."
            }
          ></Paragraph>
          <HMW
            props={
              "...how might we make it more transparent to view ICA balance and the transactions made? (Involves QuickBooks integration)"
            }
          ></HMW>
          <HMW
            props={
              "...how might we incentivize members to use ICA to transact money for daily use between members"
            }
          ></HMW>
          <ProjectSectionTitle title={"The kick-off"}></ProjectSectionTitle>
          <Paragraph
            props={
              "(how we understand the problem and how to communicate with the client)"
            }
          ></Paragraph>
          <Paragraph
            props={
              "1. talk about the expert interviews we had with the Obran people, and then here would show the early insight from the expert interview"
            }
          ></Paragraph>
          <Paragraph
            props={
              "2. talk about how we design the ICA prototype here based on the expert interview insight, lighting demo, and solution sketches."
            }
          ></Paragraph>
          <Paragraph
            props={
              "3. show the first version of prototype(from sprint 1) here with detailed explanation."
            }
          ></Paragraph>
          <Paragraph
            props={
              "4. talk about how we conduct the user testing on the prototype."
            }
          ></Paragraph>
          <ProjectSectionTitle title={"The discovery"}></ProjectSectionTitle>
          <Paragraph
            props={"1. Talk about the user testing findings"}
          ></Paragraph>
          <Paragraph
            props={
              "2. Show how we integrated the findings into 2nd version of the prototype(from sprint 2)"
            }
          ></Paragraph>
          <Paragraph
            props={
              "3. also talk about the limitation without completed research on understanding the users."
            }
          ></Paragraph>
          <ProjectSectionTitle
            title={"Reframing the problem"}
          ></ProjectSectionTitle>
          <Paragraph
            props={
              "this section would explain how we decide to do the research in sprint 3 and expand the design scale to the whole brain os in sprints 4 & 5"
            }
          ></Paragraph>
          <Paragraph
            props={
              "this section would focus on how we communicate with clients and how we came to the decision and what is our ultimate goal for this project."
            }
          ></Paragraph>
          <ProjectSectionTitle title={"solution"}></ProjectSectionTitle>
          <Paragraph
            props={
              "Here will show the final prototype(both desktop and mobile versions with all of the pages) with a detailed introduction."
            }
          ></Paragraph>
          <ProjectSectionTitle title={"How we got here"}></ProjectSectionTitle>
          <SubTitle props={"design strategy"}></SubTitle>
          <Paragraph
            props={
              "what are our considerations during the product design process"
            }
          ></Paragraph>
          <Paragraph
            props={"- what is Obran's intention for users?"}
          ></Paragraph>
          <Paragraph props={"- what do users consider the most?"}></Paragraph>
          <Paragraph
            props={
              "- how do we find a balance between what the client wants and what the user wants?"
            }
          ></Paragraph>
          <SubTitle props={"From ICA to whole Obran OS"}></SubTitle>
          <Paragraph
            props={
              "- how the different scales would lead to different design decision"
            }
          ></Paragraph>
          <SubTitle
            props={"how we conduct research and synthesize the findings."}
          ></SubTitle>
          <Paragraph
            props={
              "- talk about sprint 3 in how we conduct the user interview to create a persona and user journey"
            }
          ></Paragraph>
          <SubTitle props={"team collaboration"}></SubTitle>
          <Paragraph
            props={
              "- talk about how research and design channel sync information(in sprint 4), and how we manage to make sure everyone is on the same page"
            }
          ></Paragraph>
          <SubTitle props={"design iteration (design critique)"}></SubTitle>
          <Paragraph
            props={
              "- talk about how the design critique help to improve the design, with the case of the membership page"
            }
          ></Paragraph>
          <ProjectSectionTitle title={"takeaway"}></ProjectSectionTitle>
          <Paragraph
            props={"How to effectively communicate with the client"}
          ></Paragraph>
          <Paragraph
            props={"How to sync information in the team and collaborate"}
          ></Paragraph>
          <Divider />
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
