interface AuthLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const AuthLayout = ( { children, title } : AuthLayoutProps ) => {
  return (
    <div>
      <h1> { title } </h1>
      { children }
    </div>
  );
};
