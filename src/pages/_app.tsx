import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../core/store/store';
import 'react-toastify/dist/ReactToastify.css';
import '../ui/style/_normalize.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default App;
