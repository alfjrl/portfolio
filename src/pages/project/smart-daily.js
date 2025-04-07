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

export default function EcommerceOrderPlacing() {
  const metadata = {
    title: "Order Placing Feature for an online E-commerce Application",
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
      "Redesigning the online ordering experience for an e-commerce app with research insights to fulfill users' needs.",
    subtitle:
      "When I took over the project, the online ordering service was already finished its MVP test and was prepared to officially release it to the public. Before that, we needed to solve the significant usability issues for the best user experience and reduce the workload for the customer service team. We started with conducting user research to understand the current usability issues of the service and users' experiences and expectations. Based on the insights, we redesigned key features and rolled out the service to all of the users in Taiwan.",
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
    `Who is the user of this e-commerce app? and what are their user behaviors when placing orders?`,
    `What are the user pain points when using the ordering service?`,
  ];

  // img
  const knstuiya1 = {
    description: "",
    src: "/knst-ya-1.png",
    alt: "Your Address Function",
    width: "1500",
    height: "3088",
  };

  const knstuiya2 = {
    description: "",
    src: "/knst-ya-2.png",
    alt: "Your Address Function",
    width: "1500",
    height: "3088",
  };

  const knstuiya3 = {
    description: "",
    src: "/knst-ya-3.png",
    alt: "Your Address Function",
    width: "1500",
    height: "3088",
  };

  const knstuipa1 = {
    description: "",
    src: "/knst-pa-1.png",
    alt: "Purchase Again Function",
    width: "1500",
    height: "3088",
  };

  const knstuipa2 = {
    description: "",
    src: "/knst-pa-2.png",
    alt: "Purchase Again Function",
    width: "1500",
    height: "3088",
  };

  const knstuipa3 = {
    description: "",
    src: "/knst-pa-3.png",
    alt: "Purchase Again Function",
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
    alt: "Product Design Process",
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
        <title>
          E-commerce Order Placing Feature | Alfred J. Lin | Portfolio
        </title>
        <meta
          name="description"
          content="Welcome to Alfred's product design portfolio. Alfred is a data-driven product designer, who loves working on complex systems, creating user-centered and ethically humane design."
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
          <div className="bg-zinc-50">
            <Divider />
            <AtGlance props={atglance} />
            <Divider />
          </div>
          <ProjectSectionTitle title="Background"></ProjectSectionTitle>
          <Paragraph
            props={`The Smart Daily app is a popular community service platform with over 1.5 million active users daily. It aims at providing users a tool to solve any living-related problems/requests with one tap on their phone`}
          ></Paragraph>
          <Paragraph
            props={
              "The online ordering feature was the latest addition to the app. When this project started, they had just finished the MVP test and planned to roll out this service to all users in Taiwan."
            }
          ></Paragraph>
          <Divider />
          <div className="bg-zinc-50">
            <section id="problem" className="scroll-my-10">
              <ProjectSectionTitle title="Problem"></ProjectSectionTitle>
              <Paragraph
                props={
                  "Starting as an MVP (Minimum Viable Product), the ordering feature was introduced with basic functions without any consideration for user experience. While it successfully passed the MVP test, the timeline set for releasing the service to the public was tight, and there wasn't much time to revamp the whole feature."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "Based on the 80-20 rule, we believe that the user experience could be greatly improved if we identify the key issues. Therefore, we reframe our problem for this product design to:"
                }
              ></Paragraph>
              <HMW
                props={
                  "...how might we redesign the ordering feature that fulfills users' critical needs with minimal effort while greatly improving the user experience?"
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
                  "On the page where users enter the shipping address, we added a button at the top indicating there is a list of saved addresses they could choose from."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "Because the reading direction is from the top to bottom, we try to prevent the situation where users discover this function after filling in all of the information already. Based on the same concept, once users finish entering the shipping address, we offer an option at the bottom where users could decide to save this information for future use."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "Once the shipping addresses are stored in Your Addresses, users could choose the address directly and edit the list as needed."
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
                  "Your Addresses function only provides convenience when entering the shipping address, but users still need to select other order details. After discussion internally with product designers in other teams, we decided to add one feature which is the ability to place the same order directly from the order history."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "The feature is not only used in the ordering process but also used across the platform. There are several product categories on the platform and the original design would make it difficult for users to find the products they want. This feature would greatly reduce the time users needed to search for products, and skip the process of selecting options they've chosen before."
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
                  "We added detailed order information in the order overview section before the user places the order. This ensures users have enough information before making a purchasing decision. The information provided includes estimated delivery time and additional fees for special delivery options."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "Important information is displayed in red color which attracts the attention of the user."
                }
              ></Paragraph>
              <div className="flex sm:flex-row sm:max-h-[60vh]">
                <ProjectImg props={knstuido1}></ProjectImg>
                <ProjectImg props={knstuido2}></ProjectImg>
              </div>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Additional Ordering Options"}></SubTitle>
              <Paragraph
                props={
                  "On the first page of the ordering process, we added checkboxes including 'Delivery Notice' and 'Agree to the service agreement'. We placed that information below the product options because users care more about the products they want initially. Once they decide to make a purchase, they would then consider the additional details."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "The Delivery Notice section maintains flexibility so the marketing team can add or modify the contents based on the situation at any given time, and the notice would record the terms each time users agree to them."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "The design of the service agreement requires users to agree to the terms before continuing to the following steps."
                }
              ></Paragraph>
              <div className="flex sm:flex-row sm:max-h-[60vh]">
                <ProjectImg props={knstuiao1}></ProjectImg>
                <ProjectImg props={knstuiao2}></ProjectImg>
              </div>
              <Paragraph
                props={
                  "As mentioned in the user pain points section, some delivery options had issues with package collection. To solve this problem, after discussion with the logistics team, we decided to add one more option before users place orders."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "The option is to ask the delivery service to call users before picking up items so that users could coordinate the delivery in person. This option is presented under the delivery method selection with a pop-up window upon checking the checkbox to notify users of details."
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
                "As the feature was planned to roll out in a short time frame, we needed to discover problems and deliver new solutions as soon as possible. Therefore, we speeded up the progress from research to validation with randomly selected users to test our design prototype."
              }
            ></Paragraph>
            <ProjectImg props={knstprocess}></ProjectImg>
            <SubTitle props={"Constraint"}></SubTitle>
            <Paragraph
              props={"There were two main challenges/limitations at the time."}
            ></Paragraph>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                1. Limited resources from the development team
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                This feature was one of many products under development at the
                same time. It was impossible to have all the resources needed to
                deliver a complete redesign at once, so we had to find the best
                solutions from the perspectives of both users and the
                engineering team and implement them step by step.
              </p>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                2. Consistency with the existing product design
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                This feature is based on the existing platform, therefore the
                design must consider system consistency to maintain the overall
                user experience. On the other hand, we also needed to understand
                the constraints of the original platform so that the redesign
                would not exceed its capabilities.
              </p>
            </div>
            <Paragraph
              props={
                "To conclude, the most challenging part was finding the right balance so that the product could be delivered on time with high quality and be enjoyed by users."
              }
            ></Paragraph>
            <SubTitle props={"Research"}></SubTitle>
            <Paragraph
              props={`We used two methods to conduct research, "survey" and "contextual interview" trying to identify the user behavior when shopping online, especially during the pandemic, and current usability issues of the ordering feature.`}
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
                      We designed the survey focusing on collecting user habits
                      when shopping online to gain an overview of user behaviors
                      on our platform. By pushing notifications directly through
                      the app, we collected 3279 responses within 2 weeks.
                    </p>
                  </div>
                </div>
                <div className="px-2 py-4 w-full h-full flex flex-col items-start transition ease-in duration-50 hover:-translate-y-1 hover:-translate-x-1">
                  <div className="bg-sky-100 h-full px-4 py-4">
                    <p className="text-start tex-slate-700 text-lg font-semibold pt-4">
                      Method - Contextual Inquiry
                    </p>
                    <p className="font-inter text-slate-700 pt-4 lg:pt-6 pb-4">
                      The interview focused on how users felt about the ordering
                      feature and asked for their feedback. We recruited 5
                      existing app users who were also the MVP users in the
                      first phase of the feature for this user interview. At the
                      same time, we also observed how they completed the
                      ordering process while adopting the think-aloud protocol.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <SubTitle props={"Finding"}></SubTitle>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-sky-100">
              <SubTitle props={"E-commerce Usage Patterns"}></SubTitle>
              <div className="flex flex-col">
                <p className="font-inter sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  <span className="font-semibold">5% of the users</span> are
                  heavy users of the app, who place more than 6 orders per
                  month.
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  <span className="font-semibold">80% of the users</span> are
                  general users, who place 1-2 orders per month.
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  <span className="font-semibold">15% of the users</span> rarely
                  shop online.
                </p>
                <ProjectImg props={knstsurvey}></ProjectImg>
                <p className="font-inter sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  The demographic result shows that the main user types of the
                  e-commerce app include two types of users:
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  {`1. General consumers such as homemakers.`}
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  2. Business users such as small business owners.
                </p>
              </div>
              <SubTitle props={"User Behaviors and Expectations"}></SubTitle>
              <div className="flex flex-col">
                <p className="font-inter sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  <span className="font-semibold">85% of the users</span> expect
                  the order details and status to be clear.
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  <span className="font-semibold">60% of the users</span> ship
                  to the same address multiple times.
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  <span className="font-semibold">76% of the orders</span>{" "}
                  contain only one or two items.
                </p>
              </div>
              <Paragraph
                props={
                  "The user research helped us gain a clear understanding of our users. The users could be roughly divided into 2 groups: general consumers who shop occasionally, and business users who have consistent shopping needs."
                }
              ></Paragraph>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-sky-100">
              <SubTitle
                props={"Inconvenience in entering shipping information"}
              ></SubTitle>
              <Paragraph
                props={
                  "It is always inconvenient to enter information such as address and phone number, not only needing to memorize details but also taking effort to enter them. According to our research, 60% of users ship to the same address multiple times."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "Under the existing design, if users wanted to ship to the same address multiple times, they had to enter the detailed information every single time."
                }
              ></Paragraph>
              <div className="flex max-h-[60vh]">
                <ProjectImg props={knstincon}></ProjectImg>
              </div>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-sky-100">
              <SubTitle
                props={"Incomplete order and shipping information"}
              ></SubTitle>
              <Paragraph
                props={
                  "Key information that is important to users includes estimated delivery time, shipping costs, and delivery options."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "However, this information was completely missing in the original design, requiring users to call customer service with inquiries. In the worst case, if the delivery address was in a remote area, the user would be asked to pay additional fees without prior notification."
                }
              ></Paragraph>
              <div className="flex max-h-[60vh]">
                <ProjectImg props={knstlackinfo}></ProjectImg>
              </div>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-sky-100">
              <SubTitle
                props={"Difficulties in delivery coordination"}
              ></SubTitle>
              <Paragraph
                props={
                  "The delivery process was designed without considering various living situations. Some users had special delivery requirements or were not available during standard delivery times. Without a way to specify these needs in the ordering process, delivery attempts would often fail."
                }
              ></Paragraph>
              <ProjectImg props={knstpickup}></ProjectImg>
            </div>
            <SubTitle props={"Ideate"}></SubTitle>
            <Paragraph
              props={
                "During the entire product design process, these 2 questions were always on my mind to inform my design decisions:"
              }
            ></Paragraph>
            <List
              props={[
                "What do users care about the most?",
                "What causes the most serious usability issues for users?",
              ]}
            ></List>
            <Paragraph
              props={
                "Based on the research findings and design considerations, I set two directions for product design iteration."
              }
            ></Paragraph>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                1. Simplify the ordering process
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                Provide features that enable users to complete orders easily and
                match their online shopping habits.
              </p>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                2. Keep users informed
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                Reduce uncertainty for users by providing complete information
                about their orders, shipping options, and delivery status.
              </p>
            </div>
            <Paragraph
              props={
                "With these directions, we selected the necessary improvements and prioritized them over other recommendations from our heuristic evaluation. By doing this, we successfully delivered the new product iteration to the market within two months."
              }
            ></Paragraph>
            <Divider />
          </div>
          <ProjectSectionTitle title="Impact"></ProjectSectionTitle>
          <Paragraph
            props={
              "The redesign enhanced customer engagement with the e-commerce platform and increased usage rates significantly. After rolling out the redesigned version, service orders increased by over 400% with the repurchase rate increasing by up to 36% within 3 months."
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
                "Rather than starting from scratch, it's often impossible to implement a complete redesign to an existing product in a short time. You have to consider several factors such as the impact on existing users, perspectives from the marketing team, and available resources from the development team."
              }
            ></Paragraph>
            <SubTitle props={"Simple solutions can be effective"}></SubTitle>
            <Paragraph
              props={
                "Once key factors are identified, you can improve the overall user experience with minimal effort. For instance, you don't need to completely redesign the interface - it's possible to just change the user flow or add strategic elements to achieve significant improvements."
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
