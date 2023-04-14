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

export default function Hyena() {
  const metadata = {
    title: "A Completed Software System Solution for E-bikes",
    intro:
      "Designing a new feature in the bike service tool to serve the need of the regional service center.",
    role: "Product Designer",
    time: "2020 - 2021",
    platform: "Windows/macOS",
    coworkers: "1 UI Designers, 1 Product Manager, and 10 Software Engineers",
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
    problem:
      "The initial design decision led to not only bad user experiences, but also a complicated product design for maintaining, and adding new features.",
    solution:
      " A new product design concept for the internal system to streamline workflows and a new user flow and new interfaces in the existing bike service tool.",
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
    `What content has to be considered?`,
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
          name="Hyena | Alfred J. Lin | Portfolio"
          content="A Completed Software System Solution for E-bikes | Alfred's Product Design Portfolio"
        />
      </Head>
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
          <ProjectSectionTitle title={"Background"}></ProjectSectionTitle>
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
          <ProjectImg props={hyenasystem}></ProjectImg>
          <Divider></Divider>
          <div className="bg-zinc-50">
            <ProjectSectionTitle
              title={"The Challenge - Recapture the Aspiration"}
            ></ProjectSectionTitle>
            <Paragraph
              props={
                "Our goal for this project is to recapture the aspiration for Hyena's software systems, which made Hyena stands out from the competition. The original concept was simple: provide an e-bike system solution with deep integration between software and hardware. Our ambition is to set a strong foundation to support future product developments as the business grows faster."
              }
            ></Paragraph>
            <Paragraph props={"Our Goals were to,"}></Paragraph>
            <List props={goal}></List>
            <Divider></Divider>
          </div>
          <ProjectSectionTitle title={"My Role"}></ProjectSectionTitle>
          <Paragraph
            props={
              "I led the design for the e-bike assembly-related features(BTS) from September 2020 to August 2021 and collaborated with another designer on other e-bike service features."
            }
          ></Paragraph>
          <Paragraph
            props={
              "I managed all of the software systems at the time except the rider's assistant mobile app, working alongside my manager(senior product manager), a senior firmware development manager, and ten software engineers."
            }
          ></Paragraph>
          <Paragraph
            props={
              "I stopped working on the detailed visual of the e-bike service features as the user flow and wireframe were designed, and the collaborated designer finished the rest of the visual design with the existing design system."
            }
          ></Paragraph>
          <Divider></Divider>
          <div className="bg-zinc-50">
            <ProjectSectionTitle
              title={"The kick-off - Connecting the dot"}
            ></ProjectSectionTitle>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter text-slate-700 sm:text-lg pt-6 lg:pt-8 px-2 lg:px-4">
                The main task at the time was to{" "}
                <span className="font-medium underline decoration-solid">
                  find a solution for the regional service center to update the
                  e-bike configuration in different countries for the
                  after-sales services.
                </span>
              </p>
            </div>
            <Paragraph
              props={
                "The original solution was to provide BTS (the internal application used in the bike assembly factory) directly to the regional service center. However, it not only increases the need to provide additional user training, but also needs a lot of customized redesign in the BTS which couldn't be done in time."
              }
            ></Paragraph>
            <Paragraph
              props={
                "Therefore, we started exploring existing workflows in the Hyena software system for possible solutions. At the same time, we decided to have the completed product review, understanding the user's pain points and real user experiences. With the understanding of previous direct feedback from users, I partnered up with my manager(who is also a senior product manager) to have interviews with key users using the system."
              }
            ></Paragraph>
            <SubTitle props={"Early Insight"}></SubTitle>
            <Paragraph
              props={
                "We interviewed 6 key users to develop a full understanding of users' perspectives when they were trying to use the system to put e-bikes into production or prepare for the after-sales services. After synthesis of the interview results,  here are the insights we got,"
              }
            ></Paragraph>
            <Insights props={earlyinsight}></Insights>
            <Divider></Divider>
          </div>
          <ProjectSectionTitle title={"the discovery"}></ProjectSectionTitle>
          <Quote
            props={
              "The bike model information scattered across different internal software applications led to users' confusion, and data inconsistency."
            }
          ></Quote>
          <Paragraph
            props={
              "There was a huge gap between users' expectations and the existing system, which led to difficulties in maintaining the e-bike information for different clients and collaborating with every department."
            }
          ></Paragraph>
          <SubTitle props={"Deeper Insight"}></SubTitle>
          <Paragraph
            props={
              "Before directly going into designing the new solution, we used the sequence model to help us identify the bottom necks of the workflow and be easy to come up with the solutions."
            }
          ></Paragraph>
          <ProjectImg props={hyenaworkflow}></ProjectImg>
          <Paragraph
            props={
              "As we used the sequence model to examine the current workflow within the e-bike management workflows, we were appalled to find out that: "
            }
          ></Paragraph>
          <Quote
            props={
              "80% of the time in setting up the e-bike information is wasted by users checking the information accuracy and consistency between each feature, and application."
            }
          ></Quote>
          <Paragraph
            props={
              "Users have to manually go to each application to check whether the same information is maintained or not so that they can proceed to the next step in the workflow. Only after confirming everything is correct, those settings could be applied to the assembly line to start the e-bike production and later be used in the aftersales services."
            }
          ></Paragraph>
          <Divider></Divider>

          <div className="bg-zinc-50">
            <section id="problem" className="scroll-my-10">
              <ProjectSectionTitle
                title={"Reframing the Problem"}
              ></ProjectSectionTitle>
              <SubTitle
                props={
                  "Poorly designed information architecture leads to time waste, and the accompanied deep learning curve of the system brings unpleasant user experiences."
                }
              ></SubTitle>
              <Paragraph
                props={
                  "The original product design makes the simple data be created and maintained in a complex way, which complicated the whole user flows and product design. The complexity of whole system brings more confusion and frustration to users and difficulties to collaborate with different departments just to fulfill an easy request."
                }
              ></Paragraph>
              <HMW
                props={
                  "...how might we help users in the regional service center utilize the Hyena software system to service the bike efficiently & easily?"
                }
              ></HMW>
              <Paragraph
                props={
                  "This seems like a simple feature to design, but it requires the whole system revamp to provide the completed solution for future product development."
                }
              ></Paragraph>
              <Divider></Divider>
            </section>
          </div>
          <section id="solution" className="scroll-my-10">
            <ProjectSectionTitle
              title={"Solutions - Behind the scene"}
            ></ProjectSectionTitle>
            <Paragraph
              props={
                "Set up the internal software system structure and streamline the entire workflow to lay the foundation for better user experiences."
              }
            ></Paragraph>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Product redesign at system level"}></SubTitle>
              <ProjectImg props={hyenanewsd}></ProjectImg>
              <Paragraph
                props={
                  "We divide all of the current system functions and features into two applications, Hyena Management Tool and Hyena Manufacturing Tool."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "By integrating and simplifying the internal software applications from 3 to 2, and removing the replicated features in the application, there would have a centralized place to manage the whole information, getting rid of the need for users to jump around the application to check and maintain information."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "Also, the engineering team would not need to maintain the same function in several different places. It would speed up the software development process and reduce the possibility of bugs."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "Another major benefit of product management is, it helps to set the foundation and direction for the Hyena software system product roadmap. "
                }
              ></Paragraph>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Bike model data structure"}></SubTitle>
              <ProjectImg props={hyenabm}></ProjectImg>
              <Paragraph
                props={
                  "We introduce the bike model structure into the system, which serves as the foundation to streamline the information needed for the e-bike when it is being assembled and serviced. "
                }
              ></Paragraph>
              <Paragraph
                props={
                  "It would be used as a foundation for the whole system to perform data validation across the whole system, making sure that all of the e-bike-related data would be consistent without any surprises."
                }
              ></Paragraph>
            </div>
            <ProjectSectionTitle
              title={"solutions - on the stage"}
            ></ProjectSectionTitle>
            <Paragraph
              props={
                "Design a new user flow and user interface in the existing bike service tool to create a consistent user experience with easy access."
              }
            ></Paragraph>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Access the service center feature"}></SubTitle>
              <ProjectImg props={hyenauihome}></ProjectImg>

              <Paragraph
                props={
                  "To provide a consistent user experience, we integrate the service center features into the existing bike service tool. We add an icon in the top left corner menu for access to the service center feature page."
                }
              ></Paragraph>
              <ProjectImg props={hyenauilogin}></ProjectImg>
              <Paragraph
                props={
                  "Unlike regular bike shops, the service center would be dealing with a more advanced configuration of the e-bike, which being constrained by local regulations, would require users to log in to access the feature."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "By doing this, we could also keep track of all of the service histories from each regional service center for future client quality claims or research to improve the product."
                }
              ></Paragraph>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Select the bike model"}></SubTitle>
              <ProjectImg props={hyenauiconnect}></ProjectImg>
              <Paragraph
                props={
                  "We keep the feature simple, that the user only needs to select the bike model, and connect the computer to the e-bike, and the system would take care of the rest."
                }
              ></Paragraph>
              <Paragraph
                props={
                  "We offer 3 ways for the user to select the bike model, by Bike Brand, by Bike Model Name, or by Bike Frame No."
                }
              ></Paragraph>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Service the bike"}></SubTitle>
              <ProjectImg props={hyenauibikestatus}></ProjectImg>
              <Paragraph
                props={
                  "Once the e-bike is connected, it would show all of the detailed information about the bike, from its part no. to whether the bike requires firmware update or re-configuration."
                }
              ></Paragraph>
              <ProjectImg props={hyenauiupdate}></ProjectImg>
              <Paragraph
                props={
                  "During the updating or configuring of the e-bike, it would show the progress and status with a warning to remind users not to disconnect the bike in the progress."
                }
              ></Paragraph>
              <ProjectImg props={hyenauicomplete}></ProjectImg>
              <Paragraph
                props={
                  "After the service is done, it would show the bike status with the new configuration and region setting."
                }
              ></Paragraph>
            </div>
            <Divider />
          </section>
          <div className="bg-zinc-50">
            <ProjectSectionTitle
              title={`How we got here`}
            ></ProjectSectionTitle>
            <Paragraph
              props={
                "During the whole product design process, those 3 questions were always on my mind to inform my design decision,"
              }
            ></Paragraph>
            <List props={questions}></List>
            <SubTitle props={"What content have to be considered?"}></SubTitle>
            <Paragraph
              props={
                "In the early stage, as we receive the feature request from the regional service center, we started to figure out what they want. But before that, we needed to know the current situation to develop a proper solution. That's why we first started to look into the current system."
              }
            ></Paragraph>
            <Paragraph
              props={
                "There are 2 points we discovered to be the key foundations to delivering a successful product in this scenario,"
              }
            ></Paragraph>
            <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
              <p className="font-inter font-medium sm:text-lg text-slate-700 pt-2 px-2 pl-6 lg:px-4 lg:pl-10">
                1. Data accuracy and consistency
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 pl-6 lg:px-4 lg:pl-10">
                The data in the system should be correct and in a consistent
                format that would be used in the future without the need to
                verify before using it in other processes.
              </p>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
              <p className="font-inter font-medium sm:text-lg text-slate-700 pt-2 px-2 pl-6 lg:px-4 lg:pl-10">
                2. Rescource allocation
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 pl-6 lg:px-4 lg:pl-10">
                The features in the whole system should be well planned which
                reduces the possibility to spend resources in dealing with the
                same time in different sectors of the system, especially in the
                startup environment, the resources should be carefully utilized.
              </p>
            </div>
            <Paragraph props={"That's why we decided to "} />
            <List props={action1}></List>
            <Divider />
            <SubTitle
              props={"Who are we designing the feature for?"}
            ></SubTitle>
            <Paragraph
              props={
                "During the time we investigated the internal system, we also conducted user interviews with the regional service center staff to know who they are."
              }
            ></Paragraph>
            <Paragraph
              props={"There are some takeaways from the talks with them,"}
            />
            <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
              <p className="font-inter font-medium sm:text-lg text-slate-700 pt-2 px-2 pl-6 lg:px-4 lg:pl-10">
                1. Clear about their task
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 pl-6 lg:px-4 lg:pl-10">
                {`They know what thing they need to do, and already have a higher
              level of understanding of the system(both software-wise and
              hardware-wise), which would not need to have concerns about
              abusing the system before providing more advanced features to them
              for their task.`}
              </p>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
              <p className="font-inter font-medium sm:text-lg text-slate-700 pt-2 px-2 pl-6 lg:px-4 lg:pl-10">
                2. Practical-oriented
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 pl-6 lg:px-4 lg:pl-10">
                Compared to the fancy user interface, they care more about how
                to have the essential information fast and solve the problem
                fast. The information is clear and easy to read is their top
                consideration.
              </p>
              <ProjectImg props={hyenauicompare}></ProjectImg>
            </div>

            <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
              <p className="font-inter font-medium sm:text-lg text-slate-700 pt-2 px-2 pl-6 lg:px-4 lg:pl-10">
                3. Environment setup
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 pl-6 lg:px-4 lg:pl-10">
                They have variable working equipment setups, different computer
                operating systems, and different existing dongles used to
                connect to the e-bike. So, the solution should be compatible to
                this situation.
              </p>
            </div>
            <Paragraph
              props={
                "That's why we decided to integrate the new feature into the existing bike service tool which"
              }
            />
            <List props={action2} />
            <Divider />
            <SubTitle
              props={"What is the perfect solution for this situation?"}
            ></SubTitle>
            <Paragraph
              props={
                "Here comes my last consideration, what is the perfect solution? Based on the understanding from the previous 2 questions, at the time, we decided, "
              }
            ></Paragraph>
            <HMW
              props={
                "A new feature in the bike service tool with the new interface for our users that is easy to use and can be delivered fast."
              }
            />
            <Paragraph
              props={
                "To do that, we first need to streamline the data management in the internal system which would take a longer period to fully implement. In the meanwhile, since the bike service tool is in use already, we decided to design the feature in this application."
              }
            />
            <Paragraph
              props={`When designing the user flow in the system, and putting the consideration into how the system handles the task, we could tell that there are way more things we need to consider when we design the user flow.`}
            />
            <ProjectImg props={hyenacompareworkflow}></ProjectImg>
            <Paragraph
              props={
                "The detailed process flow of the system handling this feature helps us to prioritize the importance of which part should be developed first in the internal system so that the feature could be implemented and delivered to users."
              }
            />
            <Divider />
          </div>
          <ProjectSectionTitle title={`Impact`}></ProjectSectionTitle>
          <Paragraph
            props={
              "By implementing the new feature in the existing bike service tool, we successfully"
            }
          ></Paragraph>
          <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
            <h3 className="font-inter text-slate-900 font-medium text-lg pt-2 lg:pt-4 px-2 lg:px-4">
              ## Improved the overall usability making it easier for users to
              learn and use, at the same time reducing the time needed for the
              engineering team to implement new features.
            </h3>
            <Paragraph props={"Impacts in details,"}></Paragraph>
            <List props={impact}></List>
            <Paragraph
              props={
                "By redesigning the internal software system, We set the direction for the Hyena Software System 3.0 which would solve the fundamental issues in the system. It might take longer to develop and implement the whole system, but when we started to organize the data such as bike model information, we received positive feedback from users already."
              }
            ></Paragraph>
            <Divider />
          </div>
          <div className="bg-zinc-50">
            <ProjectSectionTitle title={`Takeaways`}></ProjectSectionTitle>
            <Paragraph
              props={
                "- When conducting user research on the product involves operation between software and hardware, we need to consider how users are using the product and try to find out what's causing the issue instead of only thinking about how the interface influences users."
              }
            ></Paragraph>
            <Paragraph
              props={
                "- It would be long-term progress to understand how users are using the product, conducting research within a short time frame would sometimes come up with a partial picture of the reality."
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
