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
            <>
              {
                isFormVisible
                  ? <AppearanceForm
                      onSubmitPage={ onEditPage }
                      page={ page }
                    />
                  : (
                    <>
                      <AppearanceDisplay { ...page } />
                      <button onClick={ onClickDeletePage }> Delete My Page </button>
                    </>
                  )
              }
              <button onClick={ onChangeFormVisibility }> { isFormVisible ? 'Cancel' : 'Edit' } </button>
            </>
          )
          : (
            <>
              <h3> You don't have a page yet </h3>
              <p> Create your page to show it to the world </p>
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
              <button onClick={ onChangeFormVisibility }> { isFormVisible ? 'Cancel' : 'Create Page' } </button>
            </>
          )
      }
    </AccountLayout>
  );
};
