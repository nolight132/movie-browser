import React from 'react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full xl:w-2/3 p-5">{children}</div>
    </div>
  );
};

export default PageWrapper;
