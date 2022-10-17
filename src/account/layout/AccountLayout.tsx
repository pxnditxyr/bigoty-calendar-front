import { Navbar } from '../components';

interface AccountLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const AccountLayout = ( { children, title } : AccountLayoutProps ) => {
  return (
    <div>
      <Navbar />
      <h1> { title } </h1>
      { children }
    </div>
  );
};
