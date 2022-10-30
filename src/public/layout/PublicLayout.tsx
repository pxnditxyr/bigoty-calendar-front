import { Navbar } from '../components';

interface PublicLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const PublicLayout = ( { children, title } : PublicLayoutProps ) => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center overflow-y-auto gap-4"
    >
      <Navbar />
      <div 
        className="z-0 w-full flex-grow flex flex-col items-center p-4 gap-4"
      >
        <h1
          className="text-4xl font-bold text-stone-800"
        > { title } </h1>
        <div>
          { children }
        </div>
      </div>
    </div>
  );
};
