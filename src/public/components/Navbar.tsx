import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [ isOpen, setIsOpen ] = useState<boolean>( false );

  const onNavToggle = () => {
    setIsOpen( !isOpen );
  };

  return (
    <nav
      className={ `w-full bg-gray-800 flex items-center justify-between p-4 text-white text-lg font-medium ${ isOpen ? 'h-screen flex-col fixed z-10 overflow-y-auto' : '' } md:grid md:grid-cols-3 md:gap-4 md:items-center md:justify-center md:h-auto md:static md:overflow-y-visible font-serif` }
    >
      <ul
        className={ `w-full flex items-center gap-4 ${ isOpen ? 'flex-col' : 'hidden' } md:flex md:flex-row md:justify-start md:w-auto` }
      >
        <li>
          <Link 
            to="/"
            onClick={ () => setIsOpen( false ) }
            className="hover:bg-gray-700 p-2 rounded-md hover:text-zinc-100 transition-colors duration-200"
          > Home </Link>
        </li>
        <li>
          <Link
            to="../features"
            onClick={ () => setIsOpen( false ) }
            className="hover:bg-gray-700 p-2 rounded-md hover:text-zinc-100 transition-colors duration-200"
          > Features </Link>
        </li>
        <li>
          <Link 
            onClick={ () => setIsOpen( false ) }
            to="../me"
            className="hover:bg-gray-700 p-2 rounded-md hover:text-zinc-100 transition-colors duration-200"
          > Me </Link>
        </li>
        <li>
          <Link
            to="../about"
            onClick={ () => setIsOpen( false ) }
            className="hover:bg-gray-700 p-2 rounded-md hover:text-zinc-100 transition-colors duration-200"
          > About </Link>
        </li>
      </ul>
      <div
        className="flex items-center justify-center"
      >
        <Link
          onClick={ () => setIsOpen( false ) }
          to="/"
        >
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
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>
      </div>
      <ul
        className={ `flex items-center gap-4 ${ isOpen ? 'flex-col' : 'hidden' } md:flex md:flex-row md:justify-end md:w-auto` }
      >
        <li>
          <Link
            onClick={ onNavToggle }
            to="../auth/signin"
            className="hover:bg-gray-700 p-2 rounded-md hover:text-zinc-100 transition-colors duration-200"
          > Sign In </Link>
        </li>
        <li>
          <Link
            to="../auth/signup"
            onClick={ onNavToggle }
            className="hover:bg-gray-700 p-2 rounded-md hover:text-zinc-100 transition-colors duration-200"
          > Sign Up </Link>
        </li>
      </ul>
      <div
        className="md:hidden"
      >
        <button
          className="text-white text-2xl fixed top-3 right-4"
          onClick={ () => setIsOpen( !isOpen ) }
        >
          { isOpen ? 'X' : '☰' }
        </button>
      </div>
    </nav>
  );
};
