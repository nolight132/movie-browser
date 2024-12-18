import React from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../../components/ListLoading';
import { getDetails, getPopularTvShows } from '@/app/lib/tmdb';

const ContentList = dynamic(() => import('../../components/ContentList'), {
  loading: () => <ListLoading />,
});

export default async function Shows() {
  const content = (await getPopularTvShows()).results;
  const contentDetails: Content[] = [];

  for (const c of content) {
    const details = await getDetails(c);
    contentDetails.push(details);
  }

  return <ContentList content={contentDetails} />;
}
