import { Navbar } from '../components';

interface AuthLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const AuthLayout = ( { children, title } : AuthLayoutProps ) => {
  return (
    <div className="w-full h-screen flex flex-col bg-slate-700 gap-4 items-center overflow-y-auto">
      <Navbar />
      <h1
        className="text-white text-4xl font-bold text-center"
      > { title } </h1>
      <div className="px-5 py-4 pb-8">
        { children }
      </div>
    </div>
  );
};
