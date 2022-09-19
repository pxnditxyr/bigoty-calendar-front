import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="features"> Features </Link>
        </li>
        <li>
          <Link to="me"> Me </Link>
        </li>
        <li>
          <Link to="about"> About </Link>
        </li>
      </ul>
      <div>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="auth/signin"> Sign In </Link>
        </li>
        <li>
          <Link to="auth/signup"> Sign Up </Link>
        </li>
      </ul>
    </nav>
  );
};
