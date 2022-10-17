import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate( -1 );
  };

  return (
    <nav className="w-full bg-slate-900 flex justify-center items-center py-2">
      <ul className="flex justify-between items-center w-3/4">
        <button
            className="text-white text-xl font-bold hover:text-stone-200"
            onClick={ goBack }
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
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
      </ul>
    </nav>
  );
};
