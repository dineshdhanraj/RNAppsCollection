import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/Applications/EarthQuakeApplication/Reducers/reducers';
import { calls } from './src/Applications/EarthQuakeApplication/Sagas/sagas';
import MainScreen from './src/StackNavigation/main-screen-stacks';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  enhancers: [applyMiddleware(sagaMiddleware)],
});

sagaMiddleware.run(calls);

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen/>
    </Provider>
  );
}