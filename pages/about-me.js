import { useState } from "react";
import Head from "next/head";
import SideNav from "../components/sidenav";

export default function AboutMe() {
  const [selectedSection, setSelectedSection] = useState("about-me");
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque turpis lorem, ac dictum diam dignissim non. Proin gravida viverra dui vitae suscipit. Cras ac ullamcorper magna, eget auctor massa. Donec dictum tincidunt risus, quis finibus justo luctus eget. Aliquam lacus massa, blandit tincidunt felis eget, ullamcorper finibus purus. Vivamus euismod sem quis condimentum feugiat. Duis ornare malesuada ligula, id porta nisl finibus ut. Cras volutpat eu est eu porta. Integer hendrerit porta justo interdum vestibulum. Morbi sit amet tortor tellus.";
  return (
    <>
      <Head>
        <title>About Inez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>

      <main className="relative">
        <SideNav
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <section className="md:mt-10 p-10 w-full lg:w-9/12 lg:ml-auto">
        <div id="about">
        <p className="mb-5 text-4xl font-semibold">Get to know <span className="text-5xl font-medium font-dawningOfaNewDay">me</span></p>
        {/* <p className="mb-5 text-4xl font-semibold">Hola! My name is <span className="text-5xl font-medium font-dawningOfaNewDay">Inez</span>. I'm a Full Stack Web Developer based out of Houston, TX.</p> */}
        <div>{lorem}</div>
      </div>
        </section>
      </main>
    </>
  );
}
