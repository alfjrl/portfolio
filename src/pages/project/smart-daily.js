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
    title:
      "Smart Daily - A Residential Property Management System for Communities",
    intro:
      "Redesigning an online service ordering experience by identifying the user needs to provide a user-friendly process.",
    role: "Product Designer, Product Manager",
    time: "2020",
    platform: "Mobile(iOS & Android)",
    coworkers:
      "1 UI Designer, 1 Marketing Specialist, and 6 Software Engineers",
    type: "Work Experience",
    src: "/knst.png",
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

  // list
  const researchquestion = [
    `Who is the user of this service? and what are their user behaviors when using this?`,
    `What are the user pain points when using the service?`,
  ];

  // img
  const knstuiya1 = {
    description: "",
    src: "/knst-ya-1.png",
    alt: "Your Address Funtion",
    width: "1500",
    height: "3088",
  };

  const knstuiya2 = {
    description: "",
    src: "/knst-ya-2.png",
    alt: "Your Address Funtion",
    width: "1500",
    height: "3088",
  };

  const knstuiya3 = {
    description: "",
    src: "/knst-ya-3.png",
    alt: "Your Address Funtion",
    width: "1500",
    height: "3088",
  };

  const knstuipa1 = {
    description: "",
    src: "/knst-pa-1.png",
    alt: "Purchase Again Funtion",
    width: "1500",
    height: "3088",
  };

  const knstuipa2 = {
    description: "",
    src: "/knst-pa-2.png",
    alt: "Purchase Again Funtion",
    width: "1500",
    height: "3088",
  };

  const knstuipa3 = {
    description: "",
    src: "/knst-pa-3.png",
    alt: "Purchase Again Funtion",
    width: "1500",
    height: "3088",
  };
  const knstuido1 = {
    description: "",
    src: "/knst-do-1.png",
    alt: "More Order Details",
    width: "1500",
    height: "3088",
  };

  const knstuido2 = {
    description: "",
    src: "/knst-do-2.png",
    alt: "More Order Details",
    width: "1500",
    height: "3088",
  };

  const knstuiao1 = {
    description: "",
    src: "/knst-ao-1.png",
    alt: "Additional Order Options",
    width: "1500",
    height: "3088",
  };

  const knstuiao2 = {
    description: "",
    src: "/knst-ao-2.png",
    alt: "Additional Order Options",
    width: "1500",
    height: "3088",
  };

  const knstuiao3 = {
    description: "",
    src: "/knst-ao-3.png",
    alt: "Additional Order Options",
    width: "1500",
    height: "3088",
  };

  const knstuiao4 = {
    description: "",
    src: "/knst-ao-4.png",
    alt: "Additional Order Options",
    width: "1500",
    height: "3088",
  };

  const knstprocess = {
    description: "",
    src: "/knst-process.png",
    alt: "Produce Design Process",
    width: "1500",
    height: "3088",
  };
  const knstsurvey = {
    description: "",
    src: "/knst-survey.png",
    alt: "Survey Results",
    width: "1500",
    height: "3088",
  };

  const knstincon = {
    description: "",
    src: "/knst-incon.png",
    alt: "Survey Results",
    width: "1500",
    height: "3088",
  };

  const knstlackinfo = {
    description: "",
    src: "/knst-lackinfo.png",
    alt: "Survey Results",
    width: "1500",
    height: "3088",
  };

  const knstpickup = {
    description: "",
    src: "/knst-pickup.png",
    alt: "Survey Results",
    width: "5887",
    height: "2534",
  };

  return (
    <>
      <Head>
        <title>Smart Daily | Alfred J. Lin | Portfolio</title>
        <meta
          name="Smart Daily | Alfred J. Lin | Portfolio"
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
            <AtGlance props={atglance} />
            <Divider />
          </div>
          <ProjectSectionTitle title="Backgroud"></ProjectSectionTitle>
          <Paragraph
            props={`Smart Daily is KNST's property management platform. The platform has over 1.5 million active users daily. It aims at providing the residents in each apartment or community a tool to solve any living-related problems/requests with one tap on their phone.`}
          ></Paragraph>
          <Paragraph
            props={
              "The online postal service was the latest addition to Smart Daily. When this project started, they just finished the MVP test and planned to roll out this service to the entire Taiwan."
            }
          ></Paragraph>
          <Divider />
          <div className="bg-zinc-50">
            <section id="problem" className="scroll-my-10">
              <ProjectSectionTitle title="Problem"></ProjectSectionTitle>
              <Paragraph
                props={
                  "Starting as an MVP(Minimum Viable Product) product, the service was introduced to people with basic functions without any consideration for user experience. While it successfully passed the MVP test, the timeline set for releasing the service to the public was tight, and there wasn't much time to revamp the whole service."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "Based on the 80-20 rule, we believe that the user experience could be greatly improved if we identify the key issues. Therefore, we reframe our problem for this product design to:"
                }
              ></Paragraph>
              <HMW
                props={
                  "...how might we redesign the service that fulfills users' critical needs with minimal effort while greatly improving the user experience?"
                }
              ></HMW>
              <Divider />
            </section>
          </div>
          <section id="solution" className="scroll-my-10">
            <ProjectSectionTitle title="Design Solution"></ProjectSectionTitle>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Your Addresses Function"}></SubTitle>
              <Paragraph
                props={
                  "On the page that users enter the recipient information, we add the button on the top indicating there is a list of recipients' information they could choose from."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "Because the reading direction is from the top to bottom, we try to prevent the situation users discover this function after filling in all of the information already. Based on the same concept, once users finish entering the recipient information, we offer an option at the bottom in which users could decide to save this information or not."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "Once the list of recipients' information is stored in Your Addresses, users could choose the address directly and edit the list."
                }
              ></Paragraph>
              <div className="flex sm:flex-row sm:max-h-[60vh]">
                <ProjectImg props={knstuiya1}></ProjectImg>
                <ProjectImg props={knstuiya2}></ProjectImg>
                <ProjectImg props={knstuiya3}></ProjectImg>
              </div>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Purchase Again Function"}></SubTitle>
              <Paragraph
                props={
                  "Your Addresses function only provides convenience when entering the recipient’s information, but users still need to select other service details. After discussion internally with product designers in other teams, we decided to add one feature which is the ability to place the same order directly from the order history."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "The feature is not only used in the online postal service but also used across the platform. There are several services on the platform and the original design of the platform would make users difficult to find the service they want. This feature would greatly reduce the time users needed to search the service, and skip the process of selecting the service options."
                }
              ></Paragraph>
              <div className="flex sm:flex-row sm:max-h-[60vh]">
                <ProjectImg props={knstuipa1}></ProjectImg>
                <ProjectImg props={knstuipa2}></ProjectImg>
                <ProjectImg props={knstuipa3}></ProjectImg>
              </div>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Detailed Order Information"}></SubTitle>
              <Paragraph
                props={
                  "We add the online postal service detail information in the order overview section before the user places the order. So that the user could have the enough information before making purchasing decision. The information provided here includes estimated delivery time and also the additional fee for the destination in a remote area."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "That information is displayed in red color which attracts the attention of the user."
                }
              ></Paragraph>
              <div className="flex sm:flex-row sm:max-h-[60vh]">
                <ProjectImg props={knstuido1}></ProjectImg>
                <ProjectImg props={knstuido2}></ProjectImg>
              </div>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Additional Ordering Option"}></SubTitle>
              <Paragraph
                props={
                  "On the first page of the online postal service, we add the checkboxes including “Delivery Notice” and “Agree to the service agreement”. We put that information below the service options because users care more about the service they want in the beginning. Once they decide to make the purchase decision, they would start to consider the further details."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "The Delivery Notice section remains the flexibility which the marketing team could add or modify the contents based on situation at any given time, and the notice would be recorded the term each time users agree to."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "The design of service agreement would require users to agree the term before continuing to the following steps."
                }
              ></Paragraph>
              <div className="flex sm:flex-row sm:max-h-[60vh]">
                <ProjectImg props={knstuiao1}></ProjectImg>
                <ProjectImg props={knstuiao2}></ProjectImg>
              </div>
              <Paragraph
                props={
                  "As mentioned above in the user pain points section, some communities do not have a doorman so that the logistics company might fail to pick up the package. In order to solve this problem, after that discussion with the logistics company, we decided to add one more option before users placing orders."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "The option is to ask the logistics company to call users before picking up the package so that users could hand in the package in person. This option is presented under the community selection with the following pop-up window upon checking the checkbox to notify users details."
                }
              ></Paragraph>
              <div className="flex sm:flex-row sm:max-h-[60vh]">
                <ProjectImg props={knstuiao3}></ProjectImg>
                <ProjectImg props={knstuiao4}></ProjectImg>
              </div>
            </div>
          </section>
          <Divider />
          <div className="bg-zinc-50">
            <ProjectSectionTitle title="HOW WE GOT HERE"></ProjectSectionTitle>
            <SubTitle props={"Process"}></SubTitle>
            <Paragraph
              props={
                "As the service was planned to roll out in a short time frame, we needed to discover problems and deliver new features as soon as possible. Therefore, we speeded up the progress from research to validate with the randomly selected users to test our design prototype."
              }
            ></Paragraph>
            <ProjectImg props={knstprocess}></ProjectImg>
            <SubTitle props={"Constraint"}></SubTitle>
            <Paragraph
              props={"There were two main challenges/limitations at the time."}
            ></Paragraph>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                1. Limit resources from the development team
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                This service was one of all products and there were several
                features under development at the same time, that was impossible
                to have all of the resources to deliver the completed redesign
                at one time, we have to find the best solutions from the
                perspectives of both users and the engineering team and
                implement step by step.
              </p>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                2. Consistency with the existing product design
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                This service is based on the existing platform, therefore the
                design must consider the system consistency to reduce the
                influence of the overall user experience. On the other hand, we
                also need to understand the constraint of the original platform
                so that the redesign would not exceed the possibility of the
                platform.
              </p>
            </div>
            <Paragraph
              props={
                "To conclude, the most challenging part is to find the balance in all time so that the product could be delivered on time with high quality, and enjoyed by users."
              }
            ></Paragraph>
            <SubTitle props={"Research"}></SubTitle>
            <Paragraph
              props={`We used two methods to conduct research, "survey", and "contextual interview" trying to identify the user behavior of using postal service, especially under the influence of the pandemic, and current usability issues of the service.`}
            ></Paragraph>
            <Paragraph
              props={"Focused on two main research questions:"}
            ></Paragraph>
            <List props={researchquestion}></List>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <div className="font-inter text-slate-700 text-md pt-6 lg:pt-8 px-2 lg:px-4 flex flex-col flex-wrap justify-center">
                <div className="px-2 py-4 w-full h-full flex flex-col items-start transition ease-in duration-50 hover:-translate-y-1 hover:-translate-x-1">
                  <div className="bg-sky-100 h-full px-4 py-4">
                    <p className="text-start tex-slate-700 text-lg font-semibold pt-4">
                      Method - Survey
                    </p>
                    <p className="font-inter text-slate-700 pt-4 lg:pt-6 pb-4">
                      We designed the survey with the focus on collecting the
                      user habit of using postal service(no limit to our online
                      postal service) to gain an overview of user behaviors on
                      our platform. By pushing notifications directly through
                      App, we collected 3279 responses within 2 weeks.
                    </p>
                  </div>
                </div>
                <div className="px-2 py-4 w-full h-full flex flex-col items-start transition ease-in duration-50 hover:-translate-y-1 hover:-translate-x-1">
                  <div className="bg-sky-100 h-full px-4 py-4">
                    <p className="text-start tex-slate-700 text-lg font-semibold pt-4">
                      Method - Contextual Inquiry
                    </p>
                    <p className="font-inter text-slate-700 pt-4 lg:pt-6 pb-4">
                      The interview focused on how they felt about the service
                      and asked for their feedback. We recruited 5 existing
                      Smart Daily users, who were also the MVP users in the
                      first phase of the service for this user interview. At the
                      same time, we also observed how they used the online
                      postal service while adopting the think-aloud protocol.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <SubTitle props={"Finding"}></SubTitle>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-sky-100">
              <SubTitle props={"Postal Service Usage"}></SubTitle>
              <div className="flex flex-col">
                <p className="font-inter sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  <span className="font-semibold">5% of the users</span> are
                  heavy users of the postal service, which would send more than
                  6 packages per month.
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  <span className="font-semibold">80% of the users</span> are
                  general users, which would send 1-2 packages per month.
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  <span className="font-semibold">15% of the users</span> do not
                  need postal services at all.
                </p>
                <ProjectImg props={knstsurvey}></ProjectImg>
                <p className="font-inter sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  The demographic result shows that the main user types of the
                  online postal service include two types of users:
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  {`1. General public such as homemakers.`}
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  2. Business users such as e-commerce sellers.
                </p>
              </div>
              <SubTitle props={"User Behaviors and Expectations"}></SubTitle>
              <div className="flex flex-col">
                <p className="font-inter sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  <span className="font-semibold">85% of the users</span> expect
                  that the order details and status to be clear.
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  <span className="font-semibold">60% of the users</span> send
                  the package to the same place several times.
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  <span className="font-semibold">76% of the orders</span>{" "}
                  contain only one packages.
                </p>
              </div>
              <Paragraph
                props={
                  "With the help of user research, it helped us to have a clear understanding of our users. The users could be roughly divided into 2 groups; one is the general public which has small demand, another one is the business users which have a consistent demand for the postal service."
                }
              ></Paragraph>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-sky-100">
              <SubTitle
                props={"Inconvenience in entering recipient information"}
              ></SubTitle>
              <Paragraph
                props={
                  "It is always inconvenient to enter information such as address and phone number, not only need to memorize so that you could enter, but also take effort to enter. According to our previous research, 60% of the users have the demand of sending packages to the same recipient several times."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "Under the existing design, If users would like to send the packages to the same recipient several times, the user has to enter the detailed information of the recipient every single time."
                }
              ></Paragraph>
              <div className="flex max-h-[60vh]">
                <ProjectImg props={knstincon}></ProjectImg>
              </div>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-sky-100">
              <SubTitle
                props={"Incomplete postal service information"}
              ></SubTitle>
              <Paragraph
                props={
                  "Generally speaking, the postal service has several key information that is important to the users, including estimated delivery time, cost of delivery, and related information."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "However, that information was completed missing in the original design, which would need to call the customer services to inquiry for that. The worst situation is that, if the destination of package locates at remote area, the user would be asked to pay additional fee in person to the logistics company."
                }
              ></Paragraph>
              <div className="flex max-h-[60vh]">
                <ProjectImg props={knstlackinfo}></ProjectImg>
              </div>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-sky-100">
              <SubTitle
                props={"Difficulties in package pick-up process"}
              ></SubTitle>
              <Paragraph
                props={
                  "The package was designed to be picked up at the gate of the community However, some communities do not have a doorman to handle those affairs, which residents need to finish by themselves. In this situation, if the user uses this online postal service, the logistics company would fail to pick up the packages since no one is at the gate."
                }
              ></Paragraph>
              <ProjectImg props={knstpickup}></ProjectImg>
            </div>
            <SubTitle props={"Ideate"}></SubTitle>
            <Paragraph
              props={
                "During the whole product design process, those 2 questions were always on my mind to inform my design decision,"
              }
            ></Paragraph>
            <List
              props={[
                "What users care the most?",
                "What causes the most serious usability issues to users?",
              ]}
            ></List>
            <Paragraph
              props={
                "Based on the research findings, with above design considerations, I set the two directions for product design iteration."
              }
            ></Paragraph>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                1. Simplify the whole process
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                Provide features for users to be able to use this service with
                ease, and match their habit of using the existing postal
                service.
              </p>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                2. Keep users in control
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                Reduce uncertainty for users when using the service, users
                should have the access to the latest information on the
                delivery.
              </p>
            </div>
            <Paragraph
              props={
                "With those directions, we selected the necessary improvements and pushed back other recommendations we got from the heuristic evaluation. By doing this, we successfully delivered the new product iteration to the market within two months."
              }
            ></Paragraph>
            <Divider />
          </div>
          <ProjectSectionTitle title="Impact"></ProjectSectionTitle>
          <Paragraph
            props={
              "Enhance customer stickiness to the community postal service, and increase the usage rate eventually. After the rollout of the redesign version, the service orders increased over 400% with the repurchase rate increased of up to 36% in 3 months."
            }
          ></Paragraph>
          <Divider />
          <div className="bg-zinc-50">
            <ProjectSectionTitle title="takeaway"></ProjectSectionTitle>
            <SubTitle
              props={"Importance of prioritizing and considering feasibility"}
            ></SubTitle>
            <Paragraph
              props={
                "Other than starting from scratch again, it is always impossible to do the completed redesign implementation to the existing product in a short time. You have to consider several factors during the redesign such as the consideration to the existing users, the perspectives from the marketing team, and also how much resources you would get from the development team."
              }
            ></Paragraph>
            <SubTitle props={"Simple solutions could be effective"}></SubTitle>
            <Paragraph
              props={
                "Once the key factors are identified, you could improve the overall user experience with small efforts. For instance, you don’t need to completely redesign the interface, it is possible to just change the process of the user flow or even add a couple of words to achieve the same result."
              }
            ></Paragraph>
            <Divider />
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
