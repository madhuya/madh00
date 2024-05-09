import React, { ReactNode } from 'react';

interface PageWrapProps {
  title: string;
  children: ReactNode;
}

const PageWrap: React.FC<PageWrapProps> = ({ title, children }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl md:text-9xl font-bold my-24 text-center md:text-left bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default PageWrap;
