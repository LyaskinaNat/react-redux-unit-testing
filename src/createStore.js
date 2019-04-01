import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

//pass the store our middleware by creating a function which create our Store and apply middlware
//however when we are going to create our tests we want to use the same middleware (instead of mocking it)
//to do that we need to create a separate array that contains just our middleware which will be passed to the Store

export const middlewares = [ReduxThunk] //array

//We are using spread operator to pass our middlewares because it is an array
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
//Creating our Store
export const store = createStoreWithMiddleware(RootReducer);
