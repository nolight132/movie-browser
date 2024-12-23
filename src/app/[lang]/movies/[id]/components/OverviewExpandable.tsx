'use client';

import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { type getDictionary } from '@/get-dictionary';
import { ChevronDoubleDown, ChevronDoubleUp } from '@mynaui/icons-react';
import { useEffect, useState } from 'react';

const OverviewExpandable = ({
  overview,
  dictionary,
}: {
  overview: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {}, [expanded]);
  const shouldExpand = overview.length > 210;

  return (
    <Card className="p-6 space-y-3">
      <CardTitle className="text-3xl font-semibold">
        {dictionary.content_details.overview}
      </CardTitle>
      <div>
        <div className="relative">
          <p
            className={`text-lg text-muted-foreground overflow-hidden transition-[max-height] duration-200 ${
              expanded ? 'max-h-[9999px]' : 'max-h-[120px] sm:max-h-[160px]'
            }`}
          >
            {overview}
          </p>
          <div
            className={`h-32 w-full left-0 bottom-0 absolute bg-gradient-to-b from-transparent to-background transition-opacity duration-200 ease-linear pointer-events-none ${
              shouldExpand && !expanded ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
        </div>
      </div>
      {shouldExpand && (
        <Button
          onClick={() => setExpanded(!expanded)}
          className="w-full"
          variant="outline"
        >
          <span className="flex items-center gap-1">
            {expanded ? (
              <>
                {dictionary.ui.collapse}
                <ChevronDoubleUp />
              </>
            ) : (
              <>
                {dictionary.ui.expand}
                <ChevronDoubleDown />
              </>
            )}
          </span>
        </Button>
      )}
    </Card>
  );
};

export default OverviewExpandable;
