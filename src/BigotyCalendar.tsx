import { Provider } from 'react-redux';
import { AppRouter } from './router';
import { store } from './store';

export const BigotyCalendar = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  );
};
