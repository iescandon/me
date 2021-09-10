import Head from "next/head";
import Layout from '../components/layout';

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Inez Escandón | About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
      <Layout>
        <section className="w-full p-7 md:p-10 lg:w-9/12 lg:ml-auto">
          <div id="about">
            <p className="mb-5 text-4xl font-semibold">Get to know <span className="text-5xl font-medium font-dawningOfaNewDay">me</span></p>
            <div>Hey there!</div>
            <div className="mt-5">
              <div className="grid grid-cols-4">
                <img src="/images/teaching.jpg" alt="" className="col-span-2 p-1"/>
                <img src="/images/coding.png" alt="" className="col-span-2 p-1"/>
              </div>
              <div className="grid grid-cols-4">
                <img src="/images/mtb.png" alt="" className="col-span-1 p-1"/>
                <img src="/images/bjj.jpg" alt="" className="col-span-1 p-1"/>
                <img src="/images/bhangra.jpg" alt="" className="col-span-1 p-1"/>
                <img src="/images/mtb1.jpg" alt="" className="col-span-1 p-1"/>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
