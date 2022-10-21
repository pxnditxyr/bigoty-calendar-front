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
        className="flex flex-col gap-4 p-4 sm:px-8 sm:py-4 rounded-lg shadow-lg sm:gap-6 w-full h-full overflow-y-auto"
      >
        <header 
        style={ {
          backgroundColor: headerColor,
          color: 'white',
          backgroundImage: headerImage.length > 4 && `url( ${ headerImage } )`,
        } as CSSProperties }
        className="flex flex-col justify-start items-start gap-4 p-4 sm:px-8 sm:py-4 rounded-lg shadow-lg sm:gap-6 w-full h-full break-all"
        >
          <h1
            className="text-3xl font-bold text-gray-700 sm:text-5xl bg-gray-200 break-all"
          > { title } </h1>
          <p
            className="text-xl font-bold text-gray-700 sm:text-2xl bg-gray-200 "
          > { user.name } { user.lastName } </p>
          <span
            className="text-xl font-bold text-gray-700 sm:text-2xl bg-gray-200 rounded-full p-2"
          > { profession } </span>
        </header>
        <p
          className="text-xl font-bold text-gray-700 sm:text-2xl bg-gray-200 w-full px-4 break-all"
        > { description } </p>
        <p
          className="text-xl font-bold text-gray-700 sm:text-2xl bg-gray-200 w-full px-4 break-all"
        > { content } </p>
      </main>
    </>
  );
};
