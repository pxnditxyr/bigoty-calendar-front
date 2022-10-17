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
    <article>
      <section>
        <h2> Full Name </h2>
        <p> { user.lastName } { user.name } </p>
      </section>
      <section>
        <h2> Birthday </h2>
        <p> { convertDate( user.birthday ) } </p>
      </section>
      <section>
        <h2> User </h2>
        <p> <span> Username </span> { user.username } </p>
        <p> <span> Email </span> { user.email } </p>
      </section>
    </article>
  );
};
