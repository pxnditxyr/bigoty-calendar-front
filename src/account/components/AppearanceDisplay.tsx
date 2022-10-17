import { CSSProperties } from 'react';
import { useAuthStore } from '../../hooks';
import { IPage } from '../../interfaces';

interface AppearanceDisplayProps extends IPage {
}


export const AppearanceDisplay = ( {
  title,
  description,
  content,
  profession,
  bgColor,
  bgImage,
  headerImage,
  headerColor,
} : AppearanceDisplayProps ) => {

  const { user } = useAuthStore();
  return (
    <>
      <main
        style={ {
          backgroundColor: bgColor,
          backgroundImage: bgImage.length > 4 && `url( ${ bgImage } )`,
        } as CSSProperties }
      >
        <header 
        style={ {
          backgroundColor: headerColor,
          color: 'white',
          backgroundImage: headerImage.length > 4 && `url( ${ headerImage } )`,
        } as CSSProperties }>
          <h1> { title } </h1>
          <p> { user.name } { user.lastName } </p>
          <span> { profession } </span>
        </header>
        <p> { description } </p>
        <p> { content } </p>
      </main>
    </>
  );
};
