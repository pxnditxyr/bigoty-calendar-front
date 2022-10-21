import { useEffect, useState } from 'react';
import { usePageStore } from '../../hooks';
import { IPage } from '../../interfaces';
import { AppearanceDisplay } from '../components/AppearanceDisplay';
import { AppearanceForm } from '../components/AppearanceForm';
import { AccountLayout } from '../layout';

export const AppearancePage = () => {

  const { page, startLoadingPage, startDeletingPage, startCreatingPage, startUpdatingPage } = usePageStore();
  const [ isFormVisible, setIsFormVisible ] = useState<boolean>( false );
  const [ isOk, setIsOk ] = useState<boolean>( true );

  useEffect( () => {
    startLoadingPage();
  }, [] )

  const onChangeFormVisibility = () => {
    if ( isOk )
      setIsFormVisible( !isFormVisible );
    setIsOk( true );
  };


  const onClickDeletePage = async () => {
    const res = await startDeletingPage();
    setIsFormVisible( !res );
  };

  const onCreatePage = async ( page : IPage ) => {
    const res = await startCreatingPage( page );
    setIsFormVisible( !res );
  };

  const onEditPage = async ( page : IPage ) => {
    const res = await startUpdatingPage( page );
    setIsFormVisible( !res );
  };


  return (
    <AccountLayout title="Appearance">
      {
        page
          ? (
            <div
              className="w-full h-full flex flex-col items-center gap-4 px-2"
            >
              {
                isFormVisible
                  ? <AppearanceForm
                      onSubmitPage={ onEditPage }
                      page={ page }
                    />
                  : (
                    <>
                      <AppearanceDisplay { ...page } />
                      <button
                        onClick={ onClickDeletePage }
                        className="py-3 px-4 text-white bg-red-400 font-semibold rounded-md absolute bottom-20 right-2 hover:bg-red-500 z-20"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 6h16M4 10h16M4 14h16M4 18h16M9 6V4a2 2 0 012-2h2a2 2 0 012 2v2m-7 4h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2z" />
                        </svg>
                      </button>
                    </>
                  )
              }
              <button
                className="py-3 px-4 text-white font-semibold rounded-md bg-emerald-600 w-full sm:1/3 hover:bg-emerald-800 mb-4"
                onClick={ onChangeFormVisibility }>
              { isFormVisible ? 'Cancel' : 'Edit' } </button>
            </div>
          )
          : (
            <div
              className="p-5 gap-y-8 flex-col items-start justify-center sm:w-2/3 mt-12 w-full h-full"
            >
              <h3
                className="text-lg font-bold text-gray-700 sm:text-2xl"
              > You don't have a page yet </h3>
              <p
                className="text-sm text-gray-700 sm:text-lg mt-4"
              > Create your page to show it to the world </p>
              {
                isFormVisible
                  && (
                    <AppearanceForm 
                      page={{
                        title: '',
                        description: '',
                        content: '',
                        profession: '',
                        headerColor: '#A02000',
                        headerImage: '',
                        bgColor: '#C000C0',
                        bgImage: '',
                      }}
                      onSubmitPage={ onCreatePage }
                    />
                  )
              }
              <button
                className="w-full p-3 text-white bg-orange-400 font-semibold rounded-md sm:w-full sm:mx-auto mb-4"
                onClick={ onChangeFormVisibility }
              > { isFormVisible ? 'Cancel' : 'Create Page' } </button>
            </div>
          )
      }
    </AccountLayout>
  );
};
