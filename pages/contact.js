import { useState } from "react";
import Head from "next/head";
import SideNav from "../components/sidenav";
import Layout from '../components/layout';
import ContactForm from '../components/contact-form';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mbjqqoaa");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque turpis lorem, ac dictum diam dignissim non.";
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </Head>
      <Layout
          isWork={false}
          selectedSection={"contact"}
      >
        <section className="p-10 w-full lg:w-9/12 lg:ml-auto">
          <div id="contact">
            <p className="mb-5 text-4xl font-semibold">Let's <span className="text-5xl font-medium font-dawningOfaNewDay">link</span> up!</p>
            <div>{lorem}</div>
            <ContactForm />
          </div>
        </section>
      </Layout>
    </>
  );
}
