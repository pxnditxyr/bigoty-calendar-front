import { useAuthStore } from '../../hooks';
export const ProfileDisplay = () => {
  const { user } = useAuthStore();

  const convertDate = ( date : string ) => {
    const onlyDate = date.split( 'T' )[ 0 ];
    return new Date( onlyDate ).toLocaleDateString( 'en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    } );
  }

  return (
    <article
      className="flex flex-col p-4 sm:px-8 sm:py-4 rounded-lg shadow-lg sm:gap-6 w-full sm:w-1/2 md:w-1/3"
    >
      <section
        className="flex flex-col gap-4 sm:gap-6 sm:text-lg"
      >
        <h2
          className="text-xl font-bold text-gray-700 sm:text-2xl"
        > Full Name </h2>
        <p
          className="text-blue-900 px-3 py-2 rounded-md"
        > { user.lastName } { user.name } </p>
      </section>
      <section
        className="flex flex-col gap-4 sm:gap-6 sm:text-lg"
      >
        <h2
          className="text-xl font-bold text-gray-700 sm:text-2xl"
        > Birthday </h2>
        <p
          className="text-blue-900 px-3 py-2 rounded-md"
        > { convertDate( user.birthday ) } </p>
      </section>
      <section
        className="flex flex-col gap-4 sm:gap-6 sm:text-lg"
      >
        <h2
          className="text-xl font-bold text-gray-700 sm:text-2xl"
        > User </h2>
        <p
          className="text-blue-900 px-3 py-2 rounded-md"
        > <span
          className="font-bold text-gray-700 sm:text-lg"
          > Username: </span> { user.username } </p>
        <p
          className="text-blue-900 px-3 py-2 rounded-md"
        > <span
            className="font-bold text-gray-700"
          > Email: </span> { user.email } </p>
      </section>
    </article>
  );
};
