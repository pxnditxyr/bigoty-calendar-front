import Swal from 'sweetalert2';
import { bigotyCalendarApi } from '../api';
import { formatErrors } from '../helpers';
import { IPage } from '../interfaces';
import { useAppDispatch, useAppSelector } from '../store'
import { onCreatePage, onDeletePage, onUpdatePage } from '../store/page';
import { onLoadingPage } from '../store/page';

export const usePageStore = () => {

  const dispatch = useAppDispatch();
  const { page } = useAppSelector( state => state.page );

  const startLoadingPage = async () => {
    try {
      const { data } = await bigotyCalendarApi.get( '/page' );
      dispatch( onLoadingPage({ ...data.page }) );
    } catch ( error : any ) {
      dispatch( onLoadingPage( {} ) );
    }
  }

  const startCreatingPage = async ( page : IPage ) => {
    try {
      const { data } = await bigotyCalendarApi.post( '/page/new-page', page );
      dispatch( onCreatePage({ ...data.page }) );
      return true;
    } catch ( error : any ) {
      dispatch( onLoadingPage( {} ) );
      Swal.fire( 'Error', formatErrors( error.response.data ), 'error' );
      return false;
    }
  }

  const startUpdatingPage = async ( page : IPage ) => {
    try {
      const { data } = await bigotyCalendarApi.put( `/page/update`, page );
      dispatch( onUpdatePage({ ...data.page }) );
      return true;
    } catch ( error : any ) {
      Swal.fire( 'Error', formatErrors( error.response.data ), 'error' );
      return false;
    }
  }

  const startDeletingPage = async () => {
    try {
      await bigotyCalendarApi.delete( `/page/delete` );
      dispatch( onDeletePage() );
      return true;
    } catch ( error : any ) {
      Swal.fire( 'Error', formatErrors( error.response.data ), 'error' );
      return false;
    }
  }

  return {
    page,
    startLoadingPage,
    startCreatingPage,
    startUpdatingPage,
    startDeletingPage,
  }

}
