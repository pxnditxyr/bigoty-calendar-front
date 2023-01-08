import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hooks';

export const Navbar = () => {

  const { startSignOut, user } = useAuthStore();
  const [ isOpen, setIsOpen ] = useState<boolean>( false );

  const onSignOut = () => {
    startSignOut();
  }

  const onToggleMenu = () => {
    setIsOpen( !isOpen );
  }


  return (
    <nav
      className={ `w-full bg-orange-400 flex flex-row px-4 py-3 text-lg font-semibold gap-4 text-white ${ isOpen ? 'h-auto z-10 flex-col' : 'relative' } sm:grid sm:grid-cols-3 sm:gap-0 sm:justify-items- sm:items-center sm:text-xl` }
    >
      <ul
        className={ `flex flex-col items-center gap-4 ${ isOpen ? 'flex' : 'hidden' } sm:flex sm:flex-row` }
      >
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
      <div
        className={ `flex items-center w-full ${ isOpen ? 'justify-center' : 'justify-start' } sm:justify-center` }
      >
        <Link to="../../account/profile">
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
      </div>
      <ul
        className={ `flex flex-col items-end ${ isOpen ? 'flex items-center' : 'hidden' } sm:flex sm:items-end` }
      >
        <button
          onClick={ onSignOut }
          className="flex flex-row items-center gap-2"
        > 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            { /* logout like a fab icon*/ }
            <path d="M21 7l-3-3-3 3M3 11V7a5 5 0 0 1 5-5h4a12 12 0 0 1 12 12v4a5 5 0 0 1-5 5H7a7 7 0 0 1-7-7z"></path>
            <line x1="12" y1="12" x2="12" y2="21"></line>
            <polyline points="3 17 12 21 21 17"></polyline>
            <polyline points="3 12 12 16 21 12"></polyline>


          </svg>
          Sign Out
        </button>
      </ul>
      <div
        className="sm:hidden bg-red-400"
      >
        <button
          className="text-white text-2xl absolute top-1 right-3"
          onClick={ onToggleMenu }
        >
          { isOpen ? 'X' : '☰' }
        </button>
      </div>

    </nav>
  );
};
