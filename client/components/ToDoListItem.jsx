import React from 'react';
import PropTypes from 'prop-types';

// Fix: onClick handlers should be function that calls props.deleteItem with the item as an argument to trigger for only that item
const ToDoListItem = (props) => (
    <li onClick={() => props.deleteItem(props.item)}>
      {props.item}
    </li>
);

ToDoListItem.propTypes = {
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ToDoListItem;
