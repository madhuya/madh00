import NextLink from 'next/link';
import { useState, useEffect } from 'react';
import userData from '../constants/data';
import socialLinks from '../constants/socialLinks';
import useDarkMode from '../utils/useDarkMode';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Experience', href: '/experience', current: false },
  // { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  let [current, setCurrent] = useState('');

  useEffect(() => {
    current = window.location.pathname;
    console.log(current);
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="w-full mx-auto px-4 ">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 ">
                  <NextLink href="/">
                    <a className="items-center flex justify-between space-x-3 dark:text-white text-black text-lg font-medium">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={userData.avatar}
                        alt=""
                      />
                      <h1>{userData.name}</h1>
                    </a>
                  </NextLink>
                </div>
                {/* Navigation Destop */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <NextLink key={item.href} href={item.href}>
                        {
                          <a
                            target="__blank"
                            key={item.name}
                            className={classNames(
                              current === item.href
                                ? (item.current = true
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')
                                : 'text-gray-600 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                          >
                            {item.name}
                          </a>
                        }
                      </NextLink>
                    ))}
                  </div>
                </div>
              </div>
              {/* Dark mode and social Links */}
              <div className="hidden md:block">
                <div className="p-4 flex justify-around space-x-10 items-center ">
                  {/* Dark Mode Button */}
                  <div>
                    <button
                      type="button"
                      className="dark:bg-gray-800 bg-white dark:text-gray-400 text-gray-600  dark:hover:text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 dark:focus:ring-white p-1 rounded-full"
                    >
                      <span className="sr-only">Dark Mode</span>

                      {colorTheme === 'light' ? (
                        <svg
                          onClick={() => setTheme('light')}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      ) : (
                        <svg
                          onClick={() => setTheme('dark')}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="flex">
                    {/* Social Media Links */}
                    {socialLinks.map((item) => (
                      <NextLink key={item.name} href={item.href}>
                        <a as="a" key={item.name} className="p-1 items-center">
                          <button
                            key={item.name}
                            target="__blank"
                            as="a"
                            className="dark:bg-gray-800 bg-white p-1 rounded-full dark:text-gray-400 text-gray-600  dark:hover:text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 dark:focus:ring-white "
                          >
                            <img
                              className="h-8 w-8"
                              aria-hidden="true"
                              src={item.link}
                            />
                          </button>
                        </a>
                      </NextLink>
                    ))}
                  </div>
                </div>
              </div>
              {/* Navigation Dark Mode Mobile */}
              <div className="flex items-center justify-around md:hidden">
                <button
                  type="button"
                  className="dark:bg-gray-800 bg-white dark:text-gray-400 text-gray-600  dark:hover:text-white hover:text-black dark:hover:bg-gray-700 hover:bg-gray-400 focus:ring-offset-2 dark:focus:ring-white flex-shrink-0 p-1 mr-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  {colorTheme === 'light' ? (
                    <svg
                      onClick={() => setTheme('light')}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => setTheme('dark')}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </button>
                {/* Mobile menu button */}
                <div>
                  <Disclosure.Button className="dark:bg-gray-800 bg-white inline-flex items-center justify-center p-2 rounded-md dark:text-gray-400 text-gray-800 dark:hover:text-white hover:text-gray-800 dark:hover:bg-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <NextLink key={item.name} href={item.href}>
                  {
                    <a
                      key={item.name}
                      className={classNames(
                        current === item.href
                          ? (item.current = true
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')
                          : 'text-gray-600 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  }
                </NextLink>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center justify-around pl-8 pr-8">
                {/* Navigation Mobile Social Media Links */}
                {socialLinks.map((item) => (
                  <NextLink href={item.href}>
                    <a as="a" className="p-1 items-center">
                      <button
                        key={item.name}
                        target="__blank"
                        as="a"
                        href={item.href}
                        className="dark:bg-gray-800 bg-white p-1 rounded-full dark:text-gray-400 text-gray-600  dark:hover:text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 dark:focus:ring-white "
                      >
                        <img
                          className="h-8 w-8"
                          aria-hidden="true"
                          src={item.link}
                        />
                      </button>
                    </a>
                  </NextLink>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
