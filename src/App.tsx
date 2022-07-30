import React from 'react';
import Router from './ui/boot/router';
import './ui/style/app.scss';
import { store } from './core/store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
