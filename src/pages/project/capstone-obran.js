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
          <ProjectSectionTitle title={"The research"}></ProjectSectionTitle>
          <Paragraph
            props={
              "Throughout the entirety of the project, we employed a diverse range of research methods and approaches to comprehensively comprehend the user and synthesize the findings. These invaluable insights guided our design decisions effectively."
            }
          ></Paragraph>
          <ProjectSectionTitle
            title={"The research - From the big picture"}
          ></ProjectSectionTitle>
          <Paragraph
            props={
              "To gain a comprehensive understanding of the user, our user research commenced by addressing the following three pivotal questions: Who constitutes the user base of Obran OS? What specific actions do these users aim to accomplish on Obran OS? What are the prevailing challenges encountered when utilizing Obran OS?"
            }
          ></Paragraph>
          <Paragraph
            props={
              "Our research plan encompassed two distinct segments: Obran Admin and Obran members. We tailored interview questions according to each role, allowing us to delve into their unique perspectives and experiences as either administrators or regular users."
            }
          ></Paragraph>
          <SubTitle props={"Interview Format"}></SubTitle>
          <Paragraph
            props={
              "We carried out a total of two user interviews with the admin and an additional four user interviews with general users. During each interview, we designated a primary facilitator responsible for conducting the interview while the remaining team members observed in the background, taking notes or posing follow-up questions as necessary."
            }
          ></Paragraph>
          <Paragraph
            props={
              "To ensure organized documentation, we utilized Figjam as a platform for note-taking. All notes were meticulously recorded and categorized based on the corresponding user and interview questions, enabling efficient analysis and reference in the subsequent stages of the project."
            }
          ></Paragraph>
          <SubTitle props={"Data Synthesize"}></SubTitle>
          <Paragraph
            props={
              "Given our utilization of qualitative research methods throughout the process, we employed various techniques to synthesize the gathered data effectively. These techniques encompassed Affinity mapping, Count analysis, thematic analysis, as well as the creation of a 2x2 matrix for data analysis."
            }
          ></Paragraph>
          <Paragraph
            props={
              "Subsequently, we leveraged the synthesized research outcomes to construct both user personas and user journeys. These artifacts facilitated a comprehensive comprehension of the user base and facilitated alignment with stakeholders. Moreover, these insights served as the foundation for designing the system, ensuring its alignment with user needs and expectations."
            }
          ></Paragraph>
          <SubTitle props={"Takeaway"}></SubTitle>
          <SubTitle
            props={"Takeaway - The Significance of User Understanding"}
          ></SubTitle>
          <Paragraph
            props={
              "In order to create a product that resonates with users, it is crucial to gain insights into their identities, emotions, and actual usage patterns. By comprehensively understanding the user, we can effectively identify their needs and seamlessly integrate the research findings into the design process."
            }
          ></Paragraph>
          <SubTitle
            props={"Takeaway - Effective Stakeholder Communication"}
          ></SubTitle>
          <Paragraph
            props={
              "While advocating for the necessity of user research, it is common to encounter resistance from stakeholders who may believe they already possess a solid understanding of the user. It is vital to articulate the rationale behind conducting user research and present easily digestible results to ensure the project progresses smoothly. By sharing compelling evidence, we can demonstrate the value of user research and maintain momentum in the project."
            }
          ></Paragraph>
          <ProjectSectionTitle
            title={"The research - at a closer look"}
          ></ProjectSectionTitle>
          <Paragraph
            props={
              "In the product design process, two crucial aspects that need careful consideration before finalizing the design are the design direction and usability. To inform our design decisions effectively, we employed two distinct methods: expert interviews and usability testing."
            }
          ></Paragraph>
          <SubTitle
            props={
              "Expert Interviews: Initial Product Vision and Wireframing Confirmation"
            }
          ></SubTitle>
          <Paragraph
            props={
              "During the expert interviews, we focused on two key elements: understanding the initial product vision and direction, as well as seeking confirmation on wireframing. By employing contextual interview techniques, we engaged with Obran experts to gather their expectations, intentions, and considerations. This understanding enabled us to ideate and design based on their insights, ensuring alignment with the desired goals."
            }
          ></Paragraph>
          <Paragraph
            props={
              "Wireframing confirmation interviews were conducted periodically throughout the design sprint to align the design outcomes with clients. This facilitated discussions around basic functionality and user flow, ensuring the design direction matched the stakeholders' expectations. These interviews also helped identify crucial design issues, such as terminology and conceptual understanding of the product's workings."
            }
          ></Paragraph>
          <SubTitle
            props={"Usability Testing: Evaluating Design Effectiveness"}
          ></SubTitle>
          <Paragraph
            props={
              "Upon completing the high-fidelity design, we conducted usability testing to verify its effectiveness. A comprehensive usability test was carried out in ICA with five participants, focusing on their ability to navigate the page, find key information, and manage their accounts. In addition to collecting quantitative data on task completion rates, we also gathered qualitative feedback from users to inform our design decisions."
            }
          ></Paragraph>
          <Paragraph
            props={
              "With a SUS (System Usability Scale) score of 65.5 and a relatively low task completion rate (below 50%), we made significant design modifications to address the issues raised during testing."
            }
          ></Paragraph>
          <SubTitle props={"Takeaway"}></SubTitle>
          <SubTitle props={"Takeaway - Evaluating Design"}></SubTitle>
          <Paragraph
            props={
              "Usability testing with users after design completion is crucial for obtaining subjective feedback and ensuring the solution aligns with user expectations. It helps validate the effectiveness of the design and identify areas for improvement."
            }
          ></Paragraph>
          <SubTitle props={"Takeaway - Stakeholder Alignment"}></SubTitle>
          <Paragraph
            props={
              "Expert interviews played a vital role in understanding stakeholders' ideas and motivations behind the product. Without these interviews, we could have potentially developed a solution lacking business value, despite its excellent user experience design."
            }
          ></Paragraph>
          <Divider></Divider>
          <div className="bg-zinc-50">
            <ProjectSectionTitle
              title={"The Design - Leveraging User Research and Design Process"}
            ></ProjectSectionTitle>
            <Paragraph
              props={
                "The design of Obran OS was shaped by insights gathered from user research, including expert interviews and user personas/user journeys. These research findings served as the foundation for our design decisions."
              }
            ></Paragraph>
            <SubTitle props={"My ICA"}></SubTitle>
            <Paragraph
              props={
                "The ICA design was initiated from scratch, with initial ideas originating from the CEO. For the My ICA section, we conducted Lightning Demos, exploring existing products with similar designs to be incorporated into the ICA page. Inspired by these demos, we developed our own sketch solutions."
              }
            ></Paragraph>
            <Paragraph
              props={
                "To consolidate our designs, we shared our sketches with each other, selecting key design decisions and combining them into a cohesive whole. After completing the wireframe design, we conducted expert interviews, seeking insights from individuals such as product managers to further refine our design."
              }
            ></Paragraph>
            <Paragraph
              props={
                "We underwent two major iterations for the ICA design. The first iteration focused on redesigning features and information, while the second iteration centered around implementing the ICA within the new Design System."
              }
            ></Paragraph>
            <SubTitle props={"Design System"}></SubTitle>
            <Paragraph
              props={
                "To ensure consistency and expandability, we developed a new design system based on the existing Obran visual guidelines for the Obran Cooperative website. This design system catered to both mobile and desktop platforms, providing users with an intuitive interface that facilitated easy access to information without visual clutter."
              }
            ></Paragraph>
            <SubTitle props={"Design Critique and Alignment"}></SubTitle>
            <Paragraph
              props={
                "Design critique played a vital role in aligning the work of multiple product designers. Given the diverse features and user flows in Obran OS, not all scenarios were initially considered in the design system. Regular design critiques helped improve visual design, establish new design rules/components in the system, and align the design with user flows, ultimately enhancing the overall user experience."
              }
            ></Paragraph>
            <SubTitle props={"Takeaway"}></SubTitle>
            <SubTitle props={"Takeaway - Communication is Key"}></SubTitle>
            <Paragraph
              props={
                "Effective communication within the team is crucial, particularly when simultaneously conducting user research and designing a new design system. Sharing information and maintaining understanding among team members is essential to avoid chaos and ensure successful collaboration."
              }
            ></Paragraph>
            <SubTitle props={"Takeaway - Embracing Feedback"}></SubTitle>
            <Paragraph
              props={
                "Taking feedback from others is highly beneficial. During a design critique session, I received direct feedback on the membership page's gamification aspect, prompting me to reevaluate my design from new perspectives. Embracing feedback with an open mind helps elevate one's own design skills and reach new levels of excellence."
              }
            ></Paragraph>
            <Divider></Divider>
          </div>
          <ProjectSectionTitle
            title={"Reflecting on the Capstone Project of the Past Year"}
          ></ProjectSectionTitle>
          <Paragraph
            props={
              "The journey from starting the project with limited knowledge about co-ops to designing an exceptional member center for the Obran Cooperative has been a remarkable achievement."
            }
          ></Paragraph>
          <Paragraph
            props={
              "Despite initial uncertainties and potential deviations from our planned sprints, we successfully delivered a project that left stakeholders happy and satisfied."
            }
          ></Paragraph>
          <SubTitle props={"Key Takeaways"}></SubTitle>
          <SubTitle props={"Collaboration"}></SubTitle>
          <Paragraph
            props={
              " Strong collaboration within the product design teams and maintaining a close connection with stakeholders serve as the foundation for building a product that users love. By working together effectively, we can leverage diverse perspectives and skills to achieve outstanding outcomes."
            }
          ></Paragraph>
          <SubTitle props={"Communication"}></SubTitle>
          <Paragraph
            props={
              "Clear communication plays a pivotal role in ensuring everyone is on the same page, enabling efficient and effective project execution. Understanding the thoughts and viewpoints of team members and stakeholders is essential for smooth coordination and cohesive decision-making."
            }
          ></Paragraph>
          <SubTitle props={"Embracing Challenges"}></SubTitle>
          <Paragraph
            props={
              "Challenges are inevitable on any project journey. By embracing these challenges, we transform them into opportunities for enhancing our design solutions. Overcoming obstacles allows us to push our designs to the next level and foster innovation."
            }
          ></Paragraph>
          <SubTitle props={"Advocating User Voices"}></SubTitle>
          <Paragraph
            props={
              "Placing user voices at the forefront of our minds is the most efficient way to create products that resonate with users. By empathizing with their perspectives and considering their needs, we can explore new and often brilliant solutions."
            }
          ></Paragraph>
          <Paragraph
            props={
              "As we reflect on this past year's capstone project, we celebrate our achievements and the lessons learned along the way. It is through collaborative efforts, effective communication, embracing challenges, and prioritizing user voices that we have created a product that brings value and satisfaction to its users."
            }
          ></Paragraph>
          <Divider />
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
