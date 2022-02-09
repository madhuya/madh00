import React from 'react';
import projects from '../../constants/projectsData';

export default function Project() {
  return (
    <div>
      {projects.map((item) => (
        <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900 py-12 justify-center">
          <div className="bg-white dark:bg-gray-800 mx-auto lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
              <div
                className="h-64 bg-cover lg:rounded-lg lg:h-full"
                style={{
                  backgroundImage: `url(${item.imgUrl})`,
                }}
              ></div>
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                {item.title}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>

              <div className="mt-8">
                <a
                  target="__blank"
                  href={item.link}
                  className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
                >
                  Checkout GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
