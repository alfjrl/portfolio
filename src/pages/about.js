import Head from "next/head";
import Navbar from "@/components/navbar";
import CurrentCard from "@/components/curretcard";
import Footer from "@/components/footer";
import ProfilePhoto from "@/components/profilephoto";
import AboutIntro from "@/components/aboutintro";

export default function about() {
  // px-5 sm:px-8 py-5 h-full grid justify-items-center
  return (
    <>
      <Head>
        <title>About - Alfred J. Lin</title>
        <meta
          name="Alfred J. Lin"
          content="Alfred's product design portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favi.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="max-auto bg-zinc-50 min-h-screen flex flex-col">
        <div className="flex-1">
          <Navbar></Navbar>
          <div className="container max-w-screen-xl max-auto">
            <ProfilePhoto></ProfilePhoto>
            <AboutIntro></AboutIntro>
            <CurrentCard></CurrentCard>
          </div>
          <div className="container max-w-screen-lg pb-20"></div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
