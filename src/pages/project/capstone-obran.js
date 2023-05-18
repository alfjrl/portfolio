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
import Quote from "@/components/project/quote";
import Image from "next/image";

export default function SmartDaily() {
  const metadata = {
    title: "Obran OS - An Internal User Center for Coop Members",
    intro: "",
    role: "Product Designer",
    time: "2022 - 2023",
    platform: "Web & Mobile",
    coworkers:
      "Alfred Lin, Jing Wang, Sourabh Doraji, Tushar Karlapudi, Yeri Yeong",
    type: "Course Project",
    src: "/obran-cover.png",
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

  // img
  const obranscope = {
    description:
      "Phase 1 and Phase 2 have different scopes and focuses. Phase 1 is focusing on the ICA, and Phase 2 is focusing on the whole Obran OS.",
    src: "/obran-scope.png",
    alt: "Project Scope in different phases",
    width: "4320",
    height: "1914",
  };
  const obranphase = {
    description: "The goals for each phase and focus for each sprint.",
    src: "/obran-phase.png",
    alt: "Project phases",
    width: "4320",
    height: "1245",
  };
  const obrannotenmap = {
    description: "",
    src: "/obran-notenmap.png",
    alt: "Note-n-Map for ICA",
    width: "5874",
    height: "2752",
  };
  const obranicamobile = {
    description: "The mobile version overview of My ICA pages",
    src: "/obran-ica-mobile.png",
    alt: "The mobile version overview of My ICA pages",
    width: "4320",
    height: "1962",
  };
  const obranmembershipmobile = {
    description: "The mobile version overview of Membership pages",
    src: "/obran-membership-mobile.png",
    alt: "The mobile version overview of Membership pages",
    width: "4320",
    height: "1962",
  };

  const obranicah = {
    description: "My ICA page",
    src: "/obran-ica-hd.png",
    alt: "My ICA Homepage",
    width: "4548",
    height: "2958",
  };
  const obranicac = {
    description: "Update Member Contribution",
    src: "/obran-ica-cd.png",
    alt: "Update Member Contribution",
    width: "4548",
    height: "2958",
  };
  const obranicab = {
    description: "Manage Balance",
    src: "/obran-ica-bd.png",
    alt: "Manage Balance",
    width: "4548",
    height: "2958",
  };
  const obranicas = {
    description: "Send Money on ICA",
    src: "/obran-ica-sd.png",
    alt: "Send Money on ICA",
    width: "4548",
    height: "2958",
  };
  const obranmi = {
    description: "Memnership page - Inactive",
    src: "/obran-m-i.png",
    alt: "Memnership page - Inactive",
    width: "4548",
    height: "2958",
  };
  const obranma = {
    description: "Memnership page - Active",
    src: "/obran-m-a.png",
    alt: "Memnership page - Active",
    width: "4548",
    height: "2958",
  };
  const obranmap = {
    description: "Memnership page - Active with pop-up",
    src: "/obran-m-ap.png",
    alt: "Memnership page - Active with pop-up",
    width: "4548",
    height: "2958",
  };
  const obranmp = {
    description: "Memnership page - Provisional",
    src: "/obran-m-p.png",
    alt: "Memnership page - Provisional",
    width: "4548",
    height: "2958",
  };
  const obranmpp = {
    description: "Memnership page - Provisional with pop-up",
    src: "/obran-m-pp.png",
    alt: "Memnership page - Provisional with pop-up",
    width: "4548",
    height: "2958",
  };
  const obranallm = {
    description: "",
    src: "/obran-all-m.png",
    alt: "Overview of pages for the member center",
    width: "4548",
    height: "2958",
  };
  const obranalld = {
    description: "",
    src: "/obran-all-d.png",
    alt: "Overview of pages for the member center",
    width: "4548",
    height: "2958",
  };
  const obranld = {
    description: "Lightning Demo",
    src: "/obran-ligthning-demo.png",
    alt: "Lightning Demo",
    width: "4548",
    height: "2958",
  };
  const obranss = {
    description: "Solution Sketch",
    src: "/obran-solution-sketch.png",
    alt: "Solution Sketch",
    width: "4548",
    height: "2958",
  };
  const obranei = {
    description: "Expert Interview",
    src: "/obran-expertinterview1.jpeg",
    alt: "Expert Interview",
    width: "4548",
    height: "2958",
  };

  return (
    <>
      <Head>
        <title>Obran OS | Alfred J. Lin | Portfolio</title>
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
          <ProjectSectionTitle title={"Overview"}></ProjectSectionTitle>
          <Paragraph
            props={
              "Obran is a worker-owned cooperative conglomerate corporation. It has its own member center(Obran OS) for all of its workers to stay connected to the coop while utilizing the benefits such as Internal Capital Account(ICA)."
            }
          ></Paragraph>
          <Paragraph
            props={
              "In this project, the whole process can be divided into 2 phases. In Phase 1, we started by exploring the design for the Internal capital account and how it fits into Obran’s business goal. In Phase 2, after we already developed a more thorough understanding of Obran Cooperative and the existing member center, we started the redesign for the whole member center based on the user research findings and domain knowledge we developed in the process."
            }
          ></Paragraph>
          <ProjectImg props={obranscope}></ProjectImg>
          <Paragraph
            props={
              "This is a year-long project, we finished 5 design sprints in the process, creating 3 major design iterations for both the web & mobile versions of the member center."
            }
          ></Paragraph>
          <ProjectImg props={obranphase}></ProjectImg>
          <Divider></Divider>
          <div className="bg-zinc-50">
            <ProjectSectionTitle title={"The challenge"}></ProjectSectionTitle>
            <Paragraph
              props={
                "Cooperatives are businesses owned by member-owners. Therefore it would value the member participation and contribution to the co-ops. In Obran, the member center plays an important role and medium for members to stay connected to Obran and keep track of everything including membership status, the internal capital account, and the communication in between."
              }
            ></Paragraph>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter text-slate-700 sm:text-lg pt-6 lg:pt-8 px-2 lg:px-4">
                Obran’s goal for the member center is:
              </p>
            </div>
            <Quote
              props={
                "Encourage employees to become members and understand the benefits of using ICA and increase activity in Obran OS."
              }
            ></Quote>

            <Divider></Divider>
          </div>
          <ProjectSectionTitle title={"The solution"}></ProjectSectionTitle>
          <Paragraph
            props={
              "For this project, we not only designed the My ICA feature and created a new design system but also revamped the whole member side of the member center based on the user research findings."
            }
          ></Paragraph>
          <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
            <SubTitle props={"My ICA"}></SubTitle>
            <ProjectImg props={obranicamobile}></ProjectImg>

            <Paragraph
              props={
                "We designed the whole My ICA feature from scratch, providing the key information and function for users to access and manage the account. By doing this, users could have a clear view of their ICA, and use it with ease."
              }
            ></Paragraph>
            <ProjectImg props={obranicah}></ProjectImg>
            <Paragraph
              props={
                "The main card on the page is the Balance, which users could directly use the money in ICA from here. Alongside, there are other cards including the member contribution, the payment notifications, and the recent transactions."
              }
            ></Paragraph>
            <Paragraph
              props={
                "Considering that users might not be familiar with terminologies or concepts on the page, we also design the contextual learning component to provide users with a quick way to learn that information."
              }
            ></Paragraph>
            <Paragraph
              props={
                "For all of the functions in the member center, we choose to use pop-ups to show the following steps, which make the information architecture less complicated and provide a consistent pattern for a flat learning curve for users."
              }
            ></Paragraph>
            <ProjectImg props={obranicab}></ProjectImg>
            <ProjectImg props={obranicac}></ProjectImg>
            <ProjectImg props={obranicas}></ProjectImg>
          </div>
          <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
            <SubTitle props={"Membership"}></SubTitle>
            <Quote props={"Alfred designed every page here."}></Quote>
            <ProjectImg props={obranmembershipmobile}></ProjectImg>

            <Paragraph
              props={
                "We designed the Membership page for users to keep track of their membership status. Obran’s intention is to encourage all of its workers to become members. Providing this page in the member center, not only helps existing members finish the required tasks but also provides a way to draw attention from non-member users to join Obran."
              }
            ></Paragraph>
            <Paragraph
              props={
                "There are 3 membership statuses in Obran, Inactive, Provisional, and Active. Based on the different scenarios, it would show the corresponding status to users."
              }
            ></Paragraph>
            <ProjectImg props={obranmi}></ProjectImg>
            <Paragraph
              props={
                "For the non-member user, other than the membership status as Inactive, it would show the testimonials from existing Obran members alongside the benefits of becoming a member to attract them to join."
              }
            ></Paragraph>
            <Paragraph
              props={
                "For users already signed up to join Obran as a member, it would show the milestones for becoming an active member(in other words: in good standing). We turned all of the requirements of becoming a member into tasks and divided them into several milestones with badges to reduce the perception of difficulties by gamification the whole process."
              }
            ></Paragraph>
            <ProjectImg props={obranma}></ProjectImg>
            <ProjectImg props={obranmp}></ProjectImg>
            <Paragraph
              props={
                "Here also use pop-ups to show the status for each milestone, with different task statuses to indicate the progress."
              }
            ></Paragraph>
            <ProjectImg props={obranmap}></ProjectImg>
            <ProjectImg props={obranmpp}></ProjectImg>
          </div>
          <SubTitle props={"All of the pages for the member center"}></SubTitle>
          <ProjectImg props={obranallm}></ProjectImg>
          <ProjectImg props={obranalld}></ProjectImg>
          <Divider></Divider>
          <div className="bg-zinc-50">
            <ProjectSectionTitle title={"The kick-off"}></ProjectSectionTitle>
            <Paragraph
              props={
                "In the beginning, the ICA was a concept for the member center, and there was barely any other information we had for this feature."
              }
            ></Paragraph>
            <Paragraph
              props={
                "We started exploring the ICA by creating a Note-n-Map for the ICA to map out the key factors and experiences for users."
              }
            ></Paragraph>
            <ProjectImg props={obrannotenmap}></ProjectImg>
            <Paragraph
              props={
                "By putting the HMW into the map, we decided to target the Obran member center users as the starting points to explore the possible solutions to help users utilize the ICA for below two questions."
              }
            ></Paragraph>
            <HMW
              props={
                "...how might we make it more transparent to view ICA balance and the transactions made?"
              }
            ></HMW>
            <HMW
              props={
                "...how might we incentivize members to use ICA to transact money for daily use between members"
              }
            ></HMW>
            <Divider></Divider>
          </div>
          <ProjectSectionTitle title={"The process"}></ProjectSectionTitle>
          <Paragraph
            props={
              "We started the design for My ICA with Lightning Demos, and based on the inspiration we got from the lightning demos, we developed our own sketch solutions."
            }
          ></Paragraph>
          <Paragraph
            props={
              "We would share the sketch solutions with each other, pick the key design decision and combine all of the designs together."
            }
          ></Paragraph>
          <Paragraph
            props={
              "Once we finished the wireframe design, we conduct the expert interview to get insights from people such as product managers to further modify our design."
            }
          ></Paragraph>
          <div className="container max-auto max-w-screen-xl px-2 sm:px-5">
            <div className="flex flex-col sm:flex-row justify-center">
              <ProjectImg props={obranld}></ProjectImg>
              <ProjectImg props={obranss}></ProjectImg>
              <ProjectImg props={obranei}></ProjectImg>
            </div>
          </div>

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
