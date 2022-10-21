import { Navbar } from '../components';

interface AccountLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const AccountLayout = ( { children, title } : AccountLayoutProps ) => {
  return (
    <div
      className="h-screen overflow-y-auto flex flex-col items-center gap-4"
    >
      <Navbar />
      <div
        className="w-full flex items-center justify-center p-3"
      >
        <h1
          className="text-3xl font-bold text-gray-700 sm:text-5xl"
        > { title } </h1>
      </div>
      <div
        className="w-full flex flex-col items-center justify-center gap-4 h-full"
      >
        { children }
      </div>
    </div>
  );
};
