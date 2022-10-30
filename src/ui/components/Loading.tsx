import { useAuthStore } from '../../hooks';

export const Loading = () => {

  const { startSignOut } = useAuthStore();

  setTimeout( () => {
    startSignOut();
  }, 10000 );

  return (
    <div
      className="w-full h-screen flex items-center justify-center flex-col gap-32"
    >
      <h1
        className="text-4xl font-bold text-gray-800 sm:text-6xl"
      > Loading <span className="text-zinc-500 animate-pulse">...</span> </h1>
      <svg className="animate-spin -ml-1 mr-3 sm:h-32 sm:w-32 text-orange-500 h-20 w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
    </div>
  );
};
