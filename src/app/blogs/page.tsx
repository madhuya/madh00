import PageWrap from "@components/PageWrap";
import React from "react";

export default function Blogs() {
  return (
    <PageWrap title="Blogs">
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />      
      </div>
    </PageWrap>
  );
}

function Blog() {
  return (
    <>
      <article className="flex flex-col rounded-lg shadow-md overflow-hidden">
        <a 
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img 
            alt=""
            className="object-cover w-full h-60 transition duration-300 hover:scale-110"
            src="https://source.unsplash.com/200x200/?fashion?2"
          />
        </a>
        <div className="flex flex-col flex-1 p-6 bg-white/90 dark:bg-gray-900/90">
          <a 
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracking-wider uppercase hover:underline text-indigo-600 dark:text-indigo-400"
          >
            Convenire
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-900 dark:text-gray-100">
            Te nulla oportere reprimique his dolorum
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 dark:text-gray-400">
            <span>June 2, 2020</span>
            <span>2.2K views</span>
          </div>
        </div>
      </article>
    </>
  );
}