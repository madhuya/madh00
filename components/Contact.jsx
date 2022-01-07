import React from "react";
import Contact from "./micro/Contact";
import ContactMe from "./micro/ContactMe";

export default function aboutt() {
  return (
    <section className=" bg-white h-full dark:bg-gray-800 jus">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl dark:text-gray-100 font-bold py-9 text-center md:text-left">
          Contact.
        </h1>
      </div>
      <ContactMe />
    </section>
  );
}
