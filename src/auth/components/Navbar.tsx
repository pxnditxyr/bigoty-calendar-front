import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="w-full bg-slate-900 flex justify-center items-center py-2">
      <ul className="flex justify-between items-center w-3/4">
        <li>
          <Link
            className="text-white text-xl font-bold hover:text-stone-200"
            to="/"
          > Home </Link>
        </li>
      </ul>
    </nav>
  );
};
