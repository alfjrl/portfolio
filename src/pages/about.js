import Head from "next/head";
import Navbar from "@/components/navbar";
import CurrentCard from "@/components/curretcard";
import Footer from "@/components/footer";
import ProfilePhoto from "@/components/profilephoto";
import AboutIntro from "@/components/aboutintro";
import GA from "@/components/ga";

export default function about() {
  // px-5 sm:px-8 py-5 h-full grid justify-items-center
  return (
    <>
      <Head>
        <title>About | Alfred J. Lin | Portfolio</title>
        <meta
          name="About | Alfred J. Lin | Portfolio"
          content="Alfred's product design portfolio"
        />
      </Head>
      <GA />
      <main className="max-auto bg-white min-h-screen flex flex-col">
        <div className="flex-1">
          <Navbar></Navbar>
          <div className="container max-w-screen-xl max-auto">
            <ProfilePhoto></ProfilePhoto>
            <AboutIntro></AboutIntro>
            <CurrentCard></CurrentCard>
          </div>
          <div className="container max-w-screen-xl pb-20"></div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
