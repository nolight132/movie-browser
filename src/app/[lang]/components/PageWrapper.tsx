import React from 'react';

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  className = className || '';
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`w-full xl:w-4/5 max-w-full flex flex-col items-center ${className}`}
      >
        <div className="w-full xl:w-4/5 p-5 space-y-3">{children}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
