import React from 'react';
import Timeline from './micro/Timeline';

export default function experience() {
  return (
    <section className=" bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 pb-10 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl dark:text-gray-100 font-bold py-9 text-center md:text-left">
          Expriences.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900 ">
        <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
          <h2 className="text-2xl dark:text-white font-bold md:text-4xl">
            Timeline
          </h2>
          <Timeline />
        </div>
      </div>
    </section>
  );
}
