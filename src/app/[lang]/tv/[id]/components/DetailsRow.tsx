import React from 'react';

const DetailsRow = ({ children }: { children: React.ReactNode }) => {
  const [rowTitle, rowContent] = React.Children.toArray(children);

  return (
    <div className="flex w-full justify-between gap-4">
      <span className="text-lg flex-shrink-0 truncate">{rowTitle}</span>
      <div className="flex items-center justify-end flex-grow overflow-hidden">
        <p className="text-md text-muted-foreground truncate text-right w-full">
          {rowContent}
        </p>
      </div>
    </div>
  );
};

export default DetailsRow;
