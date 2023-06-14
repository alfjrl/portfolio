import Head from "next/head";
import GA from "@/components/ga";
import Navbar from "@/components/navbar";
import ProfilePhoto from "@/components/profilephoto";
import AboutIntro from "@/components/aboutintro";
import CurrentCard from "@/components/curretcard";
import Footer from "@/components/footer";
import Divider from "@/components/project/divider";

export default function about() {
  return (
    <>
      <Head>
        <title>About | Alfred J. Lin | Portfolio</title>
        <meta
          name="description"
          content="Welcome to Alfred's product dsesign portfolio. Alfred is a data-driven product designer, who loves working on complex systems, creating user-centered and ethically humane design."
          key="desc"
        />
      </Head>
      <GA />
      <main className="max-auto bg-white min-h-screen flex flex-col">
        <div className="flex-1">
          <Navbar />
          <div className="container max-w-screen-xl max-auto flex flex-col lg:flex-row pt-6">
            <ProfilePhoto />
            <div className="flex flex-col">
              <AboutIntro />
              <CurrentCard />
            </div>
          </div>
          <Divider />
        </div>
        <Footer />
      </main>
    </>
  );
}
