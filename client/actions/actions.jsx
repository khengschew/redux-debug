import {
  ITEM_SETUP,
  FORM_UPDATE,
  ITEM_ADD,
  ITEM_DELETE,
} from './actionTypes';

const fetchData = () => dispatch => {
  const data = fetch('http://localhost:8000/template.json')
    .then(res => res.json())
    .then(data => data);
  dispatch({
    type: ITEM_SETUP,
    payload: data.items,
  });
};

const formUpdate = value => dispatch => {
  dispatch({
    type: FORM_UPDATE,
    payload: value,
  });
}

const addItemAction = item => dispatch => {
  dispatch({
    type: ITEM_ADD,
    payload: {
      item,
      currentItem: '',
    }
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
