import React from 'react';
import { connect } from 'react-redux';
import { formUpdate, addItemAction } from '../actions/actions';

const mapStateToProps = state => ({
  // Fix: state name needs to match reducers
  currentItem: state.currentItem,
});

const mapDispatchToProps = dispatch => ({
  onChange: value => {
    formUpdate(value)(dispatch);
  },
  addItem: item => {
    addItemAction(item)(dispatch);
  }
});

const Form = (props) => (
  <div>
    <input type="text" id="addItem" onChange={(e) => props.onChange(e.target.value)}></input>
    <button onClick={() => props.addItem(props.currentItem)}>Add</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
