import React from 'react';
import Navigator from './navigation/Navigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import weatherReducer from './src/store/reducers/weatherReducer';

const mainReducer = combineReducers({
  weatherReducer: weatherReducer
});

const store = createStore(mainReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
