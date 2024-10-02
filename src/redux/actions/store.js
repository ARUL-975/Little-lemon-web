import { createStore, applyMiddleware } from 'redux';
import { specialsReducer } from './reducers/specialsReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(specialsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;