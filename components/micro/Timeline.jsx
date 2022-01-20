import React from 'react';
import experience from '../../constants/experienceData';

export default function Timeline() {
  return (
    <div className="space-y-8 dark:text-white">
      {experience.map((item) => (
        <div key={item.title}>
          <h3 className="mb-3 text-lg font-bold md:text-xl">{item.year}</h3>
          <ul className="space-y-4">
            <li className="space-y-1">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current dark:text-green-600 text-violet-400"
                >
                  <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                  <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <h4 className="font-medium">
                  {item.title}
                  {'  '}
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {' @ '}
                    {item.company}
                  </span>
                </h4>
              </div>
              <p className="ml-7 dark:text-coolGray-400">{item.desc}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
