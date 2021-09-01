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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque turpis lorem, ac dictum diam dignissim non. Proin gravida viverra dui vitae suscipit. Cras ac ullamcorper magna, eget auctor massa. Donec dictum tincidunt risus, quis finibus justo luctus eget. Aliquam lacus massa, blandit tincidunt felis eget, ullamcorper finibus purus. Vivamus euismod sem quis condimentum feugiat. Duis ornare malesuada ligula, id porta nisl finibus ut. Cras volutpat eu est eu porta. Integer hendrerit porta justo interdum vestibulum. Morbi sit amet tortor tellus.";
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <Layout
          isWork={false}
          selectedSection={"contact"}
      >
        <section className="md:mt-10 p-10 w-full lg:w-9/12 lg:ml-auto">
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
