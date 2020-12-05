import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Bugs from './components/Bugs';
import AddButton from './components/AddButton';
import RemoveButton from './components/RemoveButton';
import './App.module.scss';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AddButton />
      <RemoveButton />
      <Bugs />
    </Provider>
  );
}

export default App;
