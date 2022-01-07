import React from "react";
import Timeline from "./micro/Timeline";

export default function experience() {
  return (
    <section className=" bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 pb-10 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl dark:text-gray-100 font-bold py-9 text-center md:text-left">
          Expriences.
        </h1>
      </div>
      <Timeline />
    </section>
  );
}
