import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hooks';

export const Navbar = () => {

  const { startSignOut } = useAuthStore();
  const [ isOpen, setIsOpen ] = useState<boolean>( false );

  const onSignOutClick = () => {
    startSignOut();
  }

  const onToggleClick = () => {
    setIsOpen( !isOpen );
  }

  return (
    <nav
      className={ `w-full flex text-white items-center text-lg bg-orange-400 font-semibold ${ isOpen ? 'flex-col items-center justify-center gap-3 p-3' : 'justify-between' } sm:text-xl sm:flex-row sm:grid sm:grid-cols-3 sm:gap-0 sm:px-3 ` }
    >
      <ul
        className={ `px-2 flex items-center` }
      >
        <li>
          <Link
            className="p-2"
            to="../../calendar">
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
          </Link>
        </li>
      </ul>
      <ul
        className={ `flex justify-center items-center ${ isOpen ? 'flex-col gap-y-4' : 'hidden' } sm:flex sm:gap-6 sm:flex-row h-full` }
      >
        <li>
          <Link
            className="py-3 px-4 hover:bg-orange-500 hover:underline"
            to="../profile">
            Profile
          </Link>
        </li>
        <li>
          <Link
            className="py-3 px-4 hover:bg-orange-500 hover:underline"
            to="../appearance">
            Appearance
          </Link>
        </li>
        <li>
          <Link
            className="py-3 px-4 hover:bg-orange-500 hover:underline"
            to="../settings">
            Settings
          </Link>
        </li>
      </ul>
      <ul
        className={ `flex justify-end items-center ${ isOpen ? 'flex-col' : 'hidden' } sm:flex sm:gap-6 sm:flex-row` }
      >
        <li>
          <button 
            className="py-3 px-4 hover:bg-orange-500 hover:underline"
            onClick={ onSignOutClick }
          > Sign Out </button>
        </li>
      </ul>
      <div
        className="sm:hidden"
      >
        <button
          className={ `p-3 font-bold text-2xl ${ isOpen ? 'absolute right-0 top-0' : '' }` }
          onClick={ onToggleClick }>
          { isOpen ? 'x' : '☰' }
        </button>
      </div>
    </nav>
  );
};
