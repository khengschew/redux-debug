import React from 'react';
import PropTypes from 'prop-types';

// Add error where onclick is just props.deleteItem
const ToDoListItem = (props) => (
    <li onClick={props.deleteItem}>
      {props.item}
    </li>
);

ToDoListItem.propTypes = {
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ToDoListItem;
