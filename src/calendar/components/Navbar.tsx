import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hooks';

export const Navbar = () => {

  const { startSignOut, user } = useAuthStore();

  const onSignOut = () => {
    startSignOut();
  }

  return (
    <nav>
      <ul>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </li>
        <li> @{ user.username } </li>
      </ul>
      <ul>
        <li>
          <Link to="../account/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="7" r="5"></circle>
              <path d="M22 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            </svg>
          </Link>
        </li>
        <li>
          <button
            onClick={ onSignOut }
          > Sign Out </button>
        </li>
      </ul>
    </nav>
  );
};
