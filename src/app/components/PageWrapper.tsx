import React from 'react';

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center ${className}`}
    >
      <div className="w-full xl:w-4/5 p-5 space-y-3">{children}</div>
    </div>
  );
};

export default PageWrapper;
