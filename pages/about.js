import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Navbar2 from "../components/navbar2";
import Hero2 from "../components/hero2";
import ServiceCards from "../components/serviceCards";

function about() {
  return (
    <div className=" w-full transition-all duration-300">
      <Head>
        <title>TetraTechSol</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/img/logo1.png" />
      </Head>

      {/* <div className=" navbar font-thin fixed top-0 left-0 h-0 z-20 w-full ">
        <Navbar />
      </div> */}
      {/* <div className=" navbar font-thin fixed top-0 left-0 h-0 z-20 w-full ">
        <Navbar2 />
      </div> */}
      {/* <Hero /> */}
      <div className=" relative">
        <Hero2 />
        <div className="sticky top-0 bg-[#0b0b27]">
          <SectionTitle
            pretitle="Nextly Benefits"
            title=" Why should you use this landing page"
          >
            Nextly is a free landing page & marketing website template for
            startups and indie projects. Its built with Next.js & TailwindCSS.
            And its completely open-source.
          </SectionTitle>
          <ServiceCards />

          <SectionTitle
            pretitle="Nextly Benefits"
            title=" Why should you use this landing page"
          >
            Nextly is a free landing page & marketing website template for
            startups and indie projects. Its built with Next.js & TailwindCSS.
            And its completely open-source.
          </SectionTitle>
          <Benefits data={benefitOne} />
          <Benefits imgPos="right" data={benefitTwo} />

          <SectionTitle
            pretitle="Watch a video"
            title="Learn how to fullfil your needs"
          >
            This section is to highlight a promo or demo video of your product.
            Analysts says a landing page with video has 3% more conversion rate.
            So, don't forget to add one. Just like this.
          </SectionTitle>
          <Video />
          <SectionTitle
            pretitle="Testimonials"
            title="Here's what our customers said"
          >
            Testimonails is a great way to increase the brand trust and
            awareness. Use this section to highlight your popular customers.
          </SectionTitle>
          <Testimonials />
          <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
            Answer your customers possible questions here, it will increase the
            conversion rate as well as support or chat requests.
          </SectionTitle>
          <Faq />
          <Cta />
          <Footer />
          <PopupWidget />
        </div>
      </div>
    </div>
  );
}

export default about;
