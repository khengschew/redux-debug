import {
  ITEM_SETUP,
  FORM_UPDATE,
  ITEM_ADD,
  ITEM_DELETE,
} from '../actions/actionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case ITEM_SETUP:
      return action.payload;

    case ITEM_ADD:
      return state.concat([action.payload]);

    case ITEM_DELETE:
      // Fix: Filter tests need to return boolean
      return state.filter(value => value !== action.payload);

    default:
      return state;
  }
}

const currentItem = (state = '', action) => {
  switch (action.type) {
    case FORM_UPDATE:
      return action.payload;
    
    default:
      return state;
  }
}

export { items, currentItem };
