import React from "react";
import About from "./micro/About";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl dark:text-gray-100 font-bold py-9 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <About />
    </section>
  );
}
