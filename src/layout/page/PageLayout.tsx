import React, { ReactNode } from 'react';

type PageProps = {
  children?: ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center mb-auto h-auto bg-gray-900">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default Page;
