import React from 'react';
import RouterComponent from './src/screens/Router';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './src/reducers/index';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
};

export default App;
