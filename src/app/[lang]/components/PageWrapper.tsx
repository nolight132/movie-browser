import type React from 'react';

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  className = className || '';
  return (
    <div className="w-full min-h-screen flex flex-col items-center motion-translate-y-in-[2%] motion-opacity-in-[0%]">
      <div
        className={`w-full xl:w-4/5 max-w-full flex flex-col items-center p-5 pt-10 ${className}`}
      >
        <div className="w-full space-y-4 relative">{children}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
