import React from 'react';
import Shows from './components/Shows';
import PageWrapper from '../components/PageWrapper';
import { getDictionary } from '@/get-dictionary';

export default async function ShowsPage({ params, searchParams }: Props) {
  // Await the promises to resolve them
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // Destructure the resolved values
  const { page } = resolvedSearchParams;
  const { lang } = resolvedParams;
  const dictionary = await getDictionary(lang);

  const pageInt = parseInt(page || '1', 10);
  return (
    <PageWrapper>
      <div>
        <h1 className="mt-10 text-4xl font-bold">{dictionary.shows.title}</h1>
        <p className="text-muted-foreground mt-4">
          {dictionary.shows.description}
        </p>
      </div>
      <Shows page={pageInt} lang={lang} />
    </PageWrapper>
  );
}
