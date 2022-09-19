import { Navbar } from '../components';

interface AuthLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const AuthLayout = ( { children, title } : AuthLayoutProps ) => {
  return (
    <div>
      <Navbar />
      <h1> { title } </h1>
      { children }
    </div>
  );
};
