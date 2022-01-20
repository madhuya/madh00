import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

export default function ContainerBlock({ children, ...customMeta }) {
  const meta = {
    title: 'Vivek Kumar - Developer, Entrepreneur, Creator and Memer',
    description: `I develope Websites, Mobile Apps. Get in touch with me to know more.`,
    image: '/avatar.jpg',
    type: 'website',
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="shortcut icon" href="/me.svg" />
      </Head>
      <main className="dark:bg-gray-800  w-full h-screen">
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  );
}
