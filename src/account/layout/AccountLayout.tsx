import { Navbar } from '../components';

interface AccountLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const AccountLayout = ( { children } : AccountLayoutProps ) => {
  return (
    <div>
      <Navbar />
      { children }
    </div>
  );
};
