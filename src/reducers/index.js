import {combineReducers} from 'redux';
import appReducer from './appReducer';

const reducer = combineReducers({
  app: appReducer,
});

export default reducer;
