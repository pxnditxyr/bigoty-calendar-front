import { Navbar } from '../components';

interface PublicLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const PublicLayout = ( { children, title } : PublicLayoutProps ) => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center overflow-y-auto"
    >
      <Navbar />
      <div className="z-0">
        <h1> { title } </h1>
        { children }
      </div>
    </div>
  );
};
