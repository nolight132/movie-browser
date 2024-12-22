import ListLoading from './components/ContentList/ListLoading';

export default async function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-center mt-10 text-4xl font-bold">
        Welcome to My Movie Database App!
        <ListLoading />
      </h1>
    </div>
  );
}
