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

// new components
import TableOfContents from "@/components/casestudy/tableofcontent";
import Title from "@/components/casestudy/title";
import P from "@/components/casestudy/p";

export default function Hyena() {
  const metadata = {
    title: "A Completed Software System Solution for E-bikes",
    intro:
      "Designing a new feature in the bike service tool to serve the need of the regional service center.",
    role: "Product Designer",
    time: "2020 - 2021",
    platform: "Windows/macOS",
    coworkers: "1 UI Designer, 1 Product Manager, and 10 Software Engineers",
    type: "Work Experience",
    src: "/hyena.png",
  };

  // at glance
  const atglance = {
    title:
      "Building a new feature to fit in the existing software system to create a consistent user experience.",
    subtitle:
      "The regional service center needed a new feature to support their daily task including checking the e-bike status and updating the e-bike configuration fast and efficiently. The original proposal was to customize one of the internal applications, however, after user interviews and system evaluation, we came up with a new design to provide an easy-to-use solution integrated into the existing application for users and lay the foundation for future product development.",
    description:
      "This project demonstrates part of my work during my time in Hyena for the e-bike drivetrain system solution.",
    subtitle1: "problem",
    description1:
      "The initial design decision led to not only bad user experiences, but also a complicated product design for maintaining, and adding new features.",
    subtitle2: "solution",
    description2:
      "A new product design concept for the internal system to streamline workflows and a new user flow and new interfaces in the existing bike service tool.",
  };

  // list
  const goal = [
    `Make it fast and easy to use for different users in every scenario.`,
    `Create a strong foundation to deliver new features of high
    quality and faster.`,
    `Create the product roadmap to lead the way for the future
    direction.`,
  ];

  const impact = [
    `Save 50% of the time required to service and re-configure an e-bike.`,
    `Reduce the time in development that theis feature can be delivered within 2 months.`,
    `Prevent additional costs to implement new software and provide trainings in service centers.`,
  ];

  const questions = [
    `What should be considered?`,
    `Who are we designing the feature for?`,
    `What is the perfect solution for this situation?`,
  ];

  const action1 = [
    `Redesign the internal product again and introduce the bike model data structure for consistency.`,
    `Integrate the feature into the existing bike service tool, so the engineering team won't need to spend too many resources to re-do the same thing.`,
  ];

  const action2 = [
    `Users are already familiar with the tool and is compatible with different operating systems.`,
    `Interface design is different from the one for the bike shop users, which focuses more on showing the status and part information.`,
  ];

  // content
  const earlyinsight = [
    `The e-bike information and management functions scatter across several different systems.`,
    `The bike model information should be accurate and consistent.`,
    `The whole system should streamline the process of bike information creation and management.`,
    `When manufacturing or adjusting the e-bike, stability and usability play an important role in the process.`,
    `It is hard to identify the bike model information and corresponding setting directly from an e-bike.`,
  ];

  //  img
  const hyenasystem = {
    description:
      "Hyena developed several software applications as a completed system solution covering the whole life cycle of the e-bike from manufacturing to after-sales services.",
    src: "/hyena-system.png",
    alt: "Hyena software system overview",
    width: "1800",
    height: "725",
  };

  const hyenaworkflow = {
    description:
      "Part of the user flow in Hyena's system identifying the e-bike and asking users to enter the corresponding bike frame no. to configure the correct bike settings.",
    src: "/hyena-workflow.png",
    alt: "Hyena seuqence diagram",
    width: "5416",
    height: "3240",
  };

  const hyenanewsd = {
    description: "",
    src: "/hyena-newsd.png",
    alt: "Hyena new system design plan",
    width: "1431",
    height: "775",
  };

  const hyenabm = {
    description: "",
    src: "/hyena-bikemodel.png",
    alt: "Hyena new bike model data structure design",
    width: "1818",
    height: "1221",
  };

  const hyenauihome = {
    description: "HST Homepage",
    src: "/hyena-ui-home.png",
    alt: "Hyena Service Tool Home Page",
    width: "3840",
    height: "2160",
  };

  const hyenauilogin = {
    description: "Serice Center Login Page",
    src: "/hyena-ui-login.png",
    alt: "Hyena Service Tool Login Page",
    width: "3840",
    height: "2160",
  };

  const hyenauiconnect = {
    description: "Serice Center Bike Model Selection Page",
    src: "/hyena-ui-connect.png",
    alt: "Serice Center Bike Model Selection Page",
    width: "3840",
    height: "2160",
  };

  const hyenauibikestatus = {
    description: "Serice Center Bike Status Page",
    src: "/hyena-ui-bikestatus.png",
    alt: "Serice Center Bike Status Page",
    width: "3840",
    height: "2160",
  };

  const hyenauiupdate = {
    description: "Serice Center Bike Upadting Page",
    src: "/hyena-ui-update.png",
    alt: "Serice Center Bike Upadting Page",
    width: "3840",
    height: "2160",
  };

  const hyenauicomplete = {
    description: "Serice Center Bike Update Complete Page",
    src: "/hyena-ui-complete.png",
    alt: "Serice Center Bike Update Complete Page",
    width: "3840",
    height: "2160",
  };

  const hyenauicompare = {
    description:
      "Top: The bike shop page, Bottom: The serice center page. The bike shop page provides more visual elements while the service center page focus on the functionality.",
    src: "/hyena-compare.png",
    alt: "The comparison between the bike shop page and the service center page",
    width: "1351",
    height: "1537",
  };

  const hyenacompareworkflow = {
    description:
      "Top: The user flow, Bottom: The system process flow. It needs to consider more when designing the feature to make it practical and feasible.",
    src: "/hyena-compare-workflow.png",
    alt: "The comparison between the user flow and the system process flow",
    width: "10056",
    height: "5160",
  };

  return (
    <>
      <Head>
        <title>Hyena | Alfred J. Lin | Portfolio</title>
        <meta
          name="description"
          content="Welcome to Alfred's product dsesign portfolio. Alfred is a data-driven product designer, who loves working on complex systems, creating user-centered and ethically humane design."
          key="desc"
        />
      </Head>
      <GA />
      <main className="max-auto bg-white min-h-screen flex flex-col">
        <div className="flex-1">
          {/* herosection */}
          <div id="herosection">
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
              <div id="ataglance" className="scroll-my-10">
                <Divider></Divider>
                <AtGlance props={atglance}></AtGlance>
                <Divider></Divider>
              </div>
            </div>
          </div>
          {/* casestudy below */}
          <Divider></Divider>
          <div className="font-inter text-slate-700 container max-auto max-w-screen-xl px-2 sm:px-5">
            <div className="lg:grid lg:grid-cols-[auto,250px] lg:gap-5">
              {/* casestudy content */}
              <div>
                <Title>background</Title>
                <P>
                  In the early phase, Hyena developed software products based on
                  the use cases, dividing all of the features into several
                  different software applications to demo its ideas faster and
                  show the ability to provide highly customizable solutions for
                  its clients.
                </P>
                <P>
                  In the early phase, Hyena developed software products based on
                  the use cases, dividing all of the features into several
                  different software applications to demo its ideas faster and
                  show the ability to provide highly customizable solutions for
                  its clients.
                </P>
                <P>
                  In the early phase, Hyena developed software products based on
                  the use cases, dividing all of the features into several
                  different software applications to demo its ideas faster and
                  show the ability to provide highly customizable solutions for
                  its clients.
                </P>
                <P>
                  In the early phase, Hyena developed software products based on
                  the use cases, dividing all of the features into several
                  different software applications to demo its ideas faster and
                  show the ability to provide highly customizable solutions for
                  its clients.
                </P>
                <P>
                  In the early phase, Hyena developed software products based on
                  the use cases, dividing all of the features into several
                  different software applications to demo its ideas faster and
                  show the ability to provide highly customizable solutions for
                  its clients.
                </P>
                <P>
                  In the early phase, Hyena developed software products based on
                  the use cases, dividing all of the features into several
                  different software applications to demo its ideas faster and
                  show the ability to provide highly customizable solutions for
                  its clients.
                </P>
                <P>
                  In the early phase, Hyena developed software products based on
                  the use cases, dividing all of the features into several
                  different software applications to demo its ideas faster and
                  show the ability to provide highly customizable solutions for
                  its clients.
                </P>
                <P>
                  In the early phase, Hyena developed software products based on
                  the use cases, dividing all of the features into several
                  different software applications to demo its ideas faster and
                  show the ability to provide highly customizable solutions for
                  its clients.
                </P>
                <P>
                  In the early phase, Hyena developed software products based on
                  the use cases, dividing all of the features into several
                  different software applications to demo its ideas faster and
                  show the ability to provide highly customizable solutions for
                  its clients.
                </P>
                <P>
                  In the early phase, Hyena developed software products based on
                  the use cases, dividing all of the features into several
                  different software applications to demo its ideas faster and
                  show the ability to provide highly customizable solutions for
                  its clients.
                </P>
                <P>
                  In the early phase, Hyena developed software products based on
                  the use cases, dividing all of the features into several
                  different software applications to demo its ideas faster and
                  show the ability to provide highly customizable solutions for
                  its clients.
                </P>

                <Paragraph
                  props={
                    "In the early phase, Hyena developed software products based on the use cases, dividing all of the features into several different software applications to demo its ideas faster and show the ability to provide highly customizable solutions for its clients."
                  }
                ></Paragraph>
                <Paragraph
                  props={
                    "By 2020, as the company became stable, the disadvantages of this strategy came to the stage, it created an extremely deep learning curve for new users, not to mention it became a huge workload for the engineering team to only maintain the product, and difficulties of designing and developing new features."
                  }
                ></Paragraph>
              </div>
              {/* table of contents */}
              <div className="hidden lg:block">
                <div className="top-36 sticky">
                  <TableOfContents></TableOfContents>
                </div>
              </div>
            </div>
          </div>
          <Divider></Divider>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
