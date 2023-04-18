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
import Image from "next/image";
import List from "@/components/project/list";

export default function Hyena() {
  const metadata = {
    title: "Tentrr.com - An Online Booking Website Designed for Campers.",
    intro:
      "Conducting usability research on the online campsite booking website to discover usability issues and propose possible solutions.",
    role: "UX Researcher",
    time: "2022",
    platform: "Website",
    coworkers: "Alfred Lin, Jing Wang, Sourabh Doraji",
    type: "Course Project",
    src: "/tentrr.png",
  };

  // at glance
  const atglance = {
    title:
      "Reviewing the usability issues on the camp booking website that interrupt users from seeking the intended information.",
    subtitle:
      "In this project, we tried to find out the existing usability issues for users when they are trying to search for information or make a reservation on Tentrr.com for their upcoming camping trip. We used both heuristic evaluation and usability testing and combined the findings to provide constructive recommendations.",
    description: "",
    subtitle1: "process",
    description1:
      "First, we performed the heuristic evaluation to do the initial research, then we conducted moderated usability tests with tasks from 4 scenarios to identify usability issues and provide recommendations.",
    subtitle2: "finding & recommendation",
    description2:
      "We successfully identified 3 major usability issues and brought up the recommended solutions for each issue.",
  };

  // list
  const usabilitytestingstucture = [
    `Ice Breaking Questions.`,
    `Three Scenarios and Tasks.`,
    `Closing Questions.`,
  ];

  // in text link
  const nielsen = {
    link: "https://www.nngroup.com/articles/ten-usability-heuristics/",
    description: "Jakob Nielsen's 10 general principles for interaction design",
  };

  // img
  const tentrrhesearch = {
    description: "",
    src: "/tentrr-he-search.png",
    alt: "Tentrr Search Function",
    width: "2770",
    height: "1676",
  };

  const tentrrhefilter = {
    description: "",
    src: "/tentrr-he-filter.png",
    alt: "Tentrr Fiter Function",
    width: "2756",
    height: "1654",
  };

  const tentrrpnc = {
    description: "",
    src: "/tentrr-p-nc.png",
    alt: "New Camper Persona",
    width: "3040",
    height: "2160",
  };

  const tentrrpec = {
    description: "",
    src: "/tentrr-p-ec.png",
    alt: "Experienced Camper Persona",
    width: "3040",
    height: "2160",
  };

  const tentrrpco = {
    description: "",
    src: "/tentrr-p-co.png",
    alt: "Campsite Owner Persona",
    width: "3040",
    height: "2160",
  };

  const tentrrtimeline = {
    description: "",
    src: "/tentrr-timeline.png",
    alt: "Usability Testing Timeline",
    width: "3960",
    height: "376",
  };

  const tentrrparticipant = {
    description: "",
    src: "/tentrr-participant.png",
    alt: "Table of Usability Testing Participant Information",
    width: "3960",
    height: "376",
  };

  const tentrrqatime = {
    description: "",
    src: "/tentrr-qa-time.png",
    alt: "Table of Usability Testing Time Needed per Task",
    width: "3610",
    height: "2188",
  };

  const tentrrqapass = {
    description: "",
    src: "/tentrr-qa-pass.png",
    alt: "Table of Usability Testing Task Result",
    width: "3535",
    height: "1034",
  };

  const tentrrqasus = {
    description: "",
    src: "/tentrr-qa-sus.png",
    alt: "Table of Usability Testing SUS Score",
    width: "3512",
    height: "953",
  };

  const tentrrfimap = {
    description: "",
    src: "/tentrr-fi-map.png",
    alt: "Table of Usability Testing SUS Score",
    width: "3512",
    height: "953",
  };
  const tentrrfsmap = {
    description: "",
    src: "/tentrr-fs-map.png",
    alt: "Table of Usability Testing SUS Score",
    width: "3512",
    height: "953",
  };
  const tentrrfifilter = {
    description: "",
    src: "/tentrr-fi-filter.png",
    alt: "Table of Usability Testing SUS Score",
    width: "3512",
    height: "953",
  };
  const tentrrfsfilter = {
    description: "",
    src: "/tentrr-fs-filter.png",
    alt: "Table of Usability Testing SUS Score",
    width: "3512",
    height: "953",
  };
  const tentrrfihome = {
    description: "",
    src: "/tentrr-fi-home.png",
    alt: "Table of Usability Testing SUS Score",
    width: "3512",
    height: "953",
  };
  const tentrrfshome = {
    description: "",
    src: "/tentrr-fs-home.png",
    alt: "Table of Usability Testing SUS Score",
    width: "3512",
    height: "953",
  };

  return (
    <>
      <Head>
        <title>Tentrr | Alfred J. Lin | Portfolio</title>
        <meta
          name="Tentrr | Alfred J. Lin | Portfolio"
          content="Alfred's product design portfolio"
        />
      </Head>
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
          <section id="process" className="scroll-my-10">
            <ProjectSectionTitle title="Background & Process Overview"></ProjectSectionTitle>
            <SubTitle props={"Background"} />
            <Paragraph
              props={
                "Tentrr is a campsite booking website, just like the business model of Airbnb but put focuses on outdoor accommodations such as campsite rental. Currently, the Tentrr's service areas are mainly within the U.S. and the number of the campsite is increasing as the pandemic goes on."
              }
            />
            <SubTitle props={"Process Overview"} />

            <div className="container max-auto max-w-screen-xl px-2 sm:px-5">
              <div className="font-inter text-slate-700 text-md pt-6 lg:pt-8 px-2 lg:px-4 flex flex-row flex-wrap justify-center">
                <div className="px-2 py-4 w-full min-h-[50vh] md:w-1/3 flex flex-col items-start transition ease-in duration-50 hover:-translate-y-1 hover:-translate-x-1">
                  <div className="bg-sky-100 h-full px-4 py-4">
                    <p className="text-start tex-slate-700 text-lg font-semibold pt-4">
                      Heuristic Evaluation
                    </p>
                    <p className="font-inter text-slate-700 pt-4 lg:pt-6">
                      We created the three personas based on both the features
                      on the Tentrr and the understanding of the demographic
                      information for the campers in North America.
                    </p>
                    <Image
                      src={"/tentrr-he-search.png"}
                      alt={"Tentrr Search Function"}
                      width={2770}
                      height={1676}
                      className="object-cover w-full pt-4 lg:pt-6"
                    ></Image>
                  </div>
                </div>
                <div className="px-2 py-4 w-full min-h-[50vh] md:w-1/3 flex flex-col items-start transition ease-in duration-50 hover:-translate-y-1 hover:-translate-x-1">
                  <div className="bg-sky-100 h-full px-4 py-4">
                    <p className="text-start tex-slate-700 text-lg font-semibold pt-4">
                      User Persona
                    </p>
                    <p className="font-inter text-slate-700 pt-4 lg:pt-6">
                      We created the three personas based on both the features
                      on the Tentrr and the understanding of the demographic
                      information for the campers in North America.
                    </p>
                    <Image
                      src={"/tentrr-p.png"}
                      alt={"Tentrr Persona"}
                      width={3040}
                      height={2160}
                      className="object-cover w-full pt-4 lg:pt-6"
                    ></Image>
                  </div>
                </div>
                <div className="px-2 py-4 w-full min-h-[50vh] md:w-1/3 flex flex-col items-start transition ease-in duration-50 hover:-translate-y-1 hover:-translate-x-1">
                  <div className="bg-sky-100 h-full px-4 py-4">
                    <p className="text-start tex-slate-700 text-lg font-semibold pt-4">
                      Usability Testing
                    </p>
                    <p className="font-inter text-slate-700 pt-4 lg:pt-6">
                      We first designed the tasks in 4 scenarios and conducted
                      the usability tests with 3 participants in the hybrid
                      format to identify the usability issues and verify the
                      findings from the heuristic evaluation.
                    </p>
                    <Image
                      src={"/tentrr-ut.png"}
                      alt={"Remote Usability Testing Screenshot"}
                      width={3590}
                      height={2247}
                      className="object-cover w-full pt-4 lg:pt-6 overflow-hidden"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <Paragraph
              props={
                "In this project, we started with conducting the heuristic evaluation for the website based on Jacob Nielsen's 10 general principles for interaction design, to identify the usability issues."
              }
            />
            <Paragraph
              props={
                "Based on the findings we discovered in the heuristic evaluation, we started with creating user personas based on the existing information to understand the target users of Tentrr. We conducted moderated usability tests with tasks from 4 scenarios corresponding to user personas. Using both heuristics review and usability testing, we successfully identified several usability issues and brought up the recommended solutions."
              }
            />
            <Divider></Divider>
          </section>
          <div className="bg-zinc-50">
            <ProjectSectionTitle title="Heuristics Evaluation"></ProjectSectionTitle>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter text-slate-700 sm:text-lg pt-6 lg:pt-8 px-2 lg:px-4">
                We used{" "}
                <a
                  class="font-inter font-medium underline text-slate-900 decoration-slate-900 after:content-['↗'] ..."
                  href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                  target="_blank"
                >
                  {`Jakob Nielsen's 10 general principles for interaction design`}
                </a>{" "}
                to perform the heuristic evaluation of the website.
              </p>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter text-slate-700 sm:text-lg pt-6 lg:pt-8 px-2 lg:px-4">
                Below are the key findings we discovered, full report would be
                found{" "}
                <a
                  class="font-inter font-medium underline text-slate-900 decoration-slate-900 after:content-['↗'] ..."
                  href="https://uploads-ssl.webflow.com/6197d8c4a87652075535e73b/62831191536a007ed20cc101_Heuristics%20Review%20-%20Tentrr.pdf"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Search Function"}></SubTitle>
              <ProjectImg props={tentrrhesearch}></ProjectImg>
              <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  Rule violated
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  {`"Recognition rather than recall"`}
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-4 px-2 lg:px-4">
                  The location filter shows not only the location results but
                  also results related to the word users put here.
                </p>
              </div>
              <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  Recommendation
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  Use the dropdown option for users to choose the location
                  instead of searching campsites based on the word input by
                  users.
                </p>
              </div>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Filter Function"}></SubTitle>
              <ProjectImg props={tentrrhefilter}></ProjectImg>
              <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  Rule violated
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  {`"Consistency and standards"`}
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-4 px-2 lg:px-4">
                  {`The "Clear filters" function is not only clear the options
                  below but also the dates, which normally is not considered as
                  the filter in this situation.`}
                </p>
              </div>
              <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  Recommendation
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  Make clear filter function only clear the below options.
                </p>
              </div>
            </div>
            <Divider />
          </div>
          <ProjectSectionTitle title={"Personas"}></ProjectSectionTitle>
          <Paragraph
            props={
              "We started the whole usability testing by creating personas for the website users. "
            }
          ></Paragraph>
          <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
            <p className="font-inter text-slate-700 sm:text-lg pt-6 lg:pt-8 px-2 lg:px-4">
              Since the website users include both campsite renters and owners,
              and referring to demographic information from{" "}
              <a
                class="font-inter font-medium underline text-slate-900 decoration-slate-900 after:content-['↗'] ..."
                href="https://koa.com/north-american-camping-report/"
                target="_blank"
              >
                Annual North American Camping Report
              </a>
              , we divided users into three categories,{" "}
              <span className="font-medium">a new camper</span>,{" "}
              <span className="font-medium">an experienced camper</span>, and{" "}
              <span className="font-medium">a campsite owner</span>.
            </p>
          </div>
          <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
            <SubTitle props={"A New Camper"}></SubTitle>
            <ProjectImg props={tentrrpnc}></ProjectImg>
          </div>
          <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
            <SubTitle props={"An Experienced Camper"}></SubTitle>
            <ProjectImg props={tentrrpec}></ProjectImg>
          </div>
          <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
            <SubTitle props={"A Campsite Owner"}></SubTitle>
            <ProjectImg props={tentrrpco}></ProjectImg>
          </div>
          <Divider />
          <div className="bg-zinc-50">
            <ProjectSectionTitle title="Usability Testing"></ProjectSectionTitle>
            <Paragraph
              props={
                "Based on the findings from the heuristic evaluation and personas, we conducted the usability testing to identify the details of each usability issue for Tentrr.com."
              }
            ></Paragraph>
            <SubTitle props={"Timeline"}></SubTitle>
            <div className="container max-auto max-w-screen-lg">
              <ProjectImg props={tentrrtimeline}></ProjectImg>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                Week 1
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                - Create personas.
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                - Prepare the test script for the usability test.
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-4 px-2 sm:px-4 pl-6 sm:pl-10">
                - Recruit the participants.
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-4 px-2 sm:px-4 pl-6 sm:pl-10">
                - Prepare moderation guides and dry runs to correct any
                discrepancies in the test flow.
              </p>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                Week 2
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                - Conduct the usability tests..
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                - Compile the data we gathered on a shared workspace.
              </p>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                Week 3
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                - Collate, analyze and summarize the user data to derive
                insights and recommendations.
              </p>
            </div>
            <SubTitle props={"Test Setting"}></SubTitle>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-2 sm:px-4 pl-6 sm:pl-10">
                Role
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                There are 3 roles in usability testing, the moderator, the main
                observer, and the secondary observer. While doing the usability
                testing, we took turns to be a different role.
              </p>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8  px-2 sm:px-4 pl-6 sm:pl-10">
                Hybrid Format
              </p>
              <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 sm:px-4 pl-6 sm:pl-10">
                We conducted 3 usability tests, one was fully in-person, and
                another two were hybrid in which one of our observers joined the
                test via Zoom while the participants and moderators are
                in-person.
              </p>
            </div>
            <SubTitle props={"Usability Test Structure"}></SubTitle>
            <Paragraph
              props={"The usability test consists of three parts,"}
            ></Paragraph>
            <List props={usabilitytestingstucture} />
            <Paragraph
              props={
                "We also included the SUS(System Usability Scale) evaluation form at the end of the usability testing to collect quantitative data from participants regarding their perception of the website."
              }
            ></Paragraph>
            <Paragraph
              props={
                "Each test section is roughly around 30 mins with one participant, one moderator, one main observer, and one secondary observer."
              }
            >
              {" "}
            </Paragraph>
            <SubTitle props={"Scenarios & Tasks"} />
            <Paragraph
              props={
                "We designed 4 scenarios to guide the participant to go through the usability test. The scenarios are based on user personas to provide the context for the participants."
              }
            />
            <Paragraph
              props={
                "The tasks focused on the issues we discovered from the heuristic evaluations. Some of the tasks are designed to gain a deeper understanding of the usability issues."
              }
            />
            <Paragraph
              props={
                "After each task, we also ask the participant the confidence level when doing the task to identify whether the website provides the correct user feedback when users trying to accomplish the tasks."
              }
            />
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5 pt-6 sm:pt-8">
              <div className="flex flex-col bg-sky-100 pb-6 sm:pb-8">
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  Scenario 1
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  You want to camp with your partner next weekend, on a budget.
                </p>
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  Task
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  1. Find a campsite in California with the lowest price during
                  next weekend without bringing any gear.
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  2. Your partner suggested that they prefer somewhere in
                  Virginia. Find out the campsite that is closest to the sea.
                </p>
                <div className="pl-6 sm:pl-10">
                  <p className="font-inter font-medium sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                    Follow-up questions
                  </p>
                  <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                    {`- (If the map is not used) Why didn’t you use the map feature?`}
                  </p>
                  <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                    {`- How do you feel when performing the task? (If the map is used and is frustrating) What made your experience with the maps frustrating?`}
                  </p>
                </div>
              </div>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5 pt-6 sm:pt-8">
              <div className="flex flex-col bg-sky-100 pb-6 sm:pb-8">
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  Scenario 2
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  You just booked a campsite which requires approval from the
                  campsite owner. You decided to add more details about you on
                  website.
                </p>
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  Task
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  {`1. Update information to show you are an experienced camper and
                really love camping. - (Ask follow-up questions based on the
                situation.)`}
                </p>
              </div>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5 pt-6 sm:pt-8">
              <div className="flex flex-col bg-sky-100 pb-6 sm:pb-8">
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  Scenario 3
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  Your friend recommended the Indian Cove Pure Gold camp to you.
                  You want to explore this campsite before reservation.
                </p>
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  Task
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  {`1. Find the Indian Cove Pure Gold camp.`}
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  2. Could you get an extra tent at this campsite?
                </p>
                <div className="pl-6 sm:pl-10">
                  <p className="font-inter font-medium sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                    Follow-up questions
                  </p>
                  <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                    {`- Do you know why they ask you to input your birthday
                information?`}
                  </p>
                  <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                    {`- What did you feel when you visited this page?`}
                  </p>
                  <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                    {`- What is your confidence level for this task?`}
                  </p>
                </div>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  {`3. For future ID check, update your birthday information.`}
                </p>
              </div>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5 pt-6 sm:pt-8">
              <div className="flex flex-col bg-sky-100 pb-6 sm:pb-8">
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  Scenario 4
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  You are a farm owner and want to make more money. You realize
                  that you can rent your farm site for campers on Tentrr.
                </p>
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-6 sm:pt-8 px-6 sm:px-10">
                  Task
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  {`1. Find out the average night rate when you list your site as a Tentrr Signature site.`}
                </p>
                <div className="pl-6 sm:pl-10">
                  <p className="font-inter font-medium sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                    Follow-up questions
                  </p>
                  <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                    {`- Are you convinced to list your farm on Tentrr after visiting this page?`}
                  </p>
                  <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                    {`- What is your confidence level for this task?`}
                  </p>
                </div>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-6 sm:px-10">
                  {`2. Apply for listing your farm as a campsite on Tentrr. (stop
                  them after they finding the application page)`}
                </p>
              </div>
            </div>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter text-slate-700 sm:text-lg pt-6 lg:pt-8 px-2 lg:px-4">
                The completed test plan please refer to{" "}
                <a
                  class="font-inter font-medium underline text-slate-900 decoration-slate-900 after:content-['↗'] ..."
                  href="https://www.notion.so/gizmofalcon/Usability-Testing-Plan-829c7b8191c04127b93108c2de7e83e2"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>
            </div>
            <SubTitle props={"Participant Recruitment"}></SubTitle>
            <Paragraph
              props={
                "We recruited 3 participants from our network. Two of the participants are occasional campers, and one of the participants is an experienced camper."
              }
            ></Paragraph>
            <div className="container max-auto max-w-screen-lg">
              <ProjectImg props={tentrrparticipant}></ProjectImg>
            </div>
            <Divider />
          </div>
          <section id="finding%20&%20recommendation" className="scroll-my-10">
            <ProjectSectionTitle title="Finding & Recommendation"></ProjectSectionTitle>
            <Paragraph
              props={
                "After conducting the usability tests, we performed quantitative and qualitative analyses to synthesize the research findings. "
              }
            ></Paragraph>
            <Paragraph
              props={
                "By combining the research result from both heuristic evaluation and usability testing, our findings and recommendations are below."
              }
            ></Paragraph>
            <SubTitle props={"Quantitative Analysis"}></SubTitle>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle
                props={"Lack of Visibility of System Status"}
              ></SubTitle>
              <Paragraph
                props={`We observed that users found it hard to complete the “Indian Cove Pure Gold” Campsite. This was due to the filters being retained from the previous task without the user's knowledge.`}
              ></Paragraph>
              <ProjectImg props={tentrrqatime}></ProjectImg>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Insufficient Instructions"}></SubTitle>
              <Paragraph
                props={`We also observed that the task which involved panning/zooming around the map to find campsites was not successfully completed by the participants, while they thought they completed it successfully.`}
              ></Paragraph>
              <Paragraph
                props={`This reveals to us how this feature misleads the users by giving ambiguous results.`}
              ></Paragraph>
              <ProjectImg props={tentrrqapass}></ProjectImg>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle
                props={"Over User Experience - SUS Evaluation"}
              ></SubTitle>
              <Paragraph
                props={`The final SUS score is 65.83 which is not ideal, indicating that improvements need to be made on the website.`}
              ></Paragraph>
              <ProjectImg props={tentrrqasus}></ProjectImg>
            </div>
            <SubTitle props={"Quanlitative Analysis"}></SubTitle>
            <Paragraph
              props={`Based on the observations of the participants during the usability test and also the information gathered by the think-out-loud principle, we categorized the usability issues into two parts, major and minor issues.`}
            ></Paragraph>
            <div className="container max-auto max-w-screen-lg px-2 sm:px-5">
              <p className="font-inter text-slate-700 sm:text-lg pt-6 lg:pt-8 px-2 lg:px-4">
                This portfolio only demonstrates the major issues we discovered
                and the corresponding recommendations. For the full list of
                issues we discovered, please refer to our report{" "}
                <a
                  class="font-inter font-medium underline text-slate-900 decoration-slate-900 after:content-['↗'] ..."
                  href="https://www.figma.com/proto/sbRMGfMPDcrEtzd7ZyBDX8/Tentrr?page-id=223%3A2&node-id=309%3A66&viewport=1237%2C42%2C0.21&scaling=contain&starting-point-node-id=309%3A66"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Map Feature"}></SubTitle>
              <Paragraph
                props={`All participants failed to use the map feature to locate the campsite closest to the sea. (Although one participant performed the task as intended) The map shows different campsites at different zoom levels. Users might not end up with the desired campsite by using the map.
                `}
              ></Paragraph>
              <ProjectImg props={tentrrfimap}></ProjectImg>
              <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  Recommendation
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  A google maps like behaviour in which the pinpoints on the map
                  stay consistent when zooming in/out.
                </p>
              </div>
              <ProjectImg props={tentrrfsmap}></ProjectImg>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Filter Function"}></SubTitle>
              <Paragraph
                props={`All participants failed to find a specific campsite by searching the campsite’s name. They all assumed they did an incorrect search. They did not realize the campsite is unavailable during the selected dates, because the website does not display any unavailable campsites in the search results.
                `}
              ></Paragraph>
              <ProjectImg props={tentrrfifilter}></ProjectImg>
              <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  Recommendation
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  Graying out the unavailable options and not omitting them from
                  the results would convey the right message to the users.
                </p>
              </div>
              <ProjectImg props={tentrrfsfilter}></ProjectImg>
            </div>
            <div className="container flex flex-col max-auto max-w-screen-lg px-4 sm:px-9 my-8 lg:my-10 pb-8 lg:pb-12 bg-slate-100">
              <SubTitle props={"Homepage Search Function"}></SubTitle>
              <Paragraph
                props={`Another factor leading to the misunderstanding is the lack of selections for dates and the number of campers on the homepage search. Some participants assumed that the filters would reset with a new search from the homepage.
                `}
              ></Paragraph>
              <ProjectImg props={tentrrfihome}></ProjectImg>
              <div className="container max-auto max-w-screen-lg px-2 pt-4 lg:px-5">
                <p className="font-inter font-semibold sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  Recommendation
                </p>
                <p className="font-inter sm:text-lg text-slate-700 pt-2 px-2 lg:px-4">
                  Adding the basic filters on the homepage would indicate the
                  users on what the status of those filters are when they
                  revisit the page and also helps search for campsites better
                  even before going to the results page.
                </p>
              </div>
              <ProjectImg props={tentrrfshome}></ProjectImg>
            </div>
            <Divider />
          </section>
        </div>
        <div className="bg-zinc-50">
          <ProjectSectionTitle title="Takeaway"></ProjectSectionTitle>
          <SubTitle props={"Importance of research approaches"}></SubTitle>
          <Paragraph
            props={
              "Adopting different research approaches in a research project would help to identify and verify the same usability issues, which would help you understand the real situation and provide you with enough understanding from users' perspectives."
            }
          ></Paragraph>
          <SubTitle props={"Interacting with the participants"}></SubTitle>
          <Paragraph
            props={
              "While doing the usability testing, it is important to be in the participants' shoes. Be sure to include the message to let participants know they are not being evaluated but the product. By doing this, we would have friendly participants willing to share everything with us."
            }
          ></Paragraph>
          <Divider />
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
