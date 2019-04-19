import {
  ITEM_SETUP,
  FORM_UPDATE,
  ITEM_ADD,
  ITEM_DELETE,
} from './actionTypes';

// Fix: Async functions should dispatch when finished
const fetchData = () => dispatch => {
  fetch('http://localhost:8000/template.json')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: ITEM_SETUP,
        payload: data.items,
      });
      dispatch({
        type: FORM_UPDATE,
        payload: '',
      });
    });
};

const formUpdate = value => dispatch => {
  dispatch({
    type: FORM_UPDATE,
    payload: value,
  });
}

const addItemAction = item => dispatch => {
  // Fix: Payload format must be consistent
  dispatch({
    type: ITEM_ADD,
    payload: item,
  });
  dispatch({
    type: FORM_UPDATE,
    payload: '',
  });
  document.getElementById('addItem').value = '';
}

const deleteItemAction = item => dispatch => {
  dispatch({
    type: ITEM_DELETE,
    payload: item,
  });
}

export default fetchData;

export { formUpdate, addItemAction, deleteItemAction };
