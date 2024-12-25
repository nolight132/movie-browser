import ListLoading from './components/skeletons/ListLoading';
import PageWrapper from './components/PageWrapper';

export default async function Page() {
  return (
    <PageWrapper className="flex">
      <h1 className="text-center mt-10 text-4xl font-bold">
        Welcome to My Movie Database App!
        <ListLoading />
      </h1>
      <h2 className="text-center">[UNDER CONSTRUCTION]</h2>
    </PageWrapper>
  );
}
