import { combineReducers } from 'redux';
import { items, currentItem } from './reducers';

const rootReducer = combineReducers({
  items,
  currentItem,
});

export default rootReducer;
