// AddComponent.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../actions';
import { bindActionCreators } from 'redux';

class AddCounter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span>
        <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); this.props.dispatch(addCounter()) }}> Add </button>
      </span>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addCounter, dispatch) }
}
export default connect(mapDispatchToProps)(AddCounter);