import HomeworkContainer from './Homework';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../common/store';

export default function App() {
  return (
    <Provider store={store}>
      <HomeworkContainer />
    </Provider>
  );
}
