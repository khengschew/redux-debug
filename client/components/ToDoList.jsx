import React from 'react';
import { connect } from 'react-redux';
import ToDoListItem from './ToDoListItem';
import { deleteItemAction } from '../actions/actions';

const mapStateToProps = state => ({
  list: state.items
});

const mapDispatchToProps = dispatch => ({
  deleteItem: item => {
    deleteItemAction(item)(dispatch);
  }
});

const ToDoList = (props) => (
  <div>
    <ul>
      {props.list.map((item, index) => <ToDoListItem item={item} deleteItem={props.deleteItem} key={index} />)}
    </ul>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
