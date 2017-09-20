import React from 'react'
import FilterLink from '../containers/FilterLink'
import './App.css';

import { setVisibilityFilter } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

const Footer = ({setVisibilityFilter}) => {
  return (
    <div className='filterBox'>
      Show:
      {" "}
      <FilterLink
        filter="SHOW_ALL"
        onClick={() => setVisibilityFilter(filter)}
        >
        All
      </FilterLink>
      {", "}
      <FilterLink
        filter="SHOW_ACTIVE"
        onClick={() => setVisibilityFilter(filter)}
        >
        Active
      </FilterLink>
      {", "}
      <FilterLink
        filter="SHOW_COMPLETED"
        onClick={() => setVisibilityFilter(filter)}
        >
        Completed
      </FilterLink>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setVisibilityFilter }, dispatch);
}

export default connect(null, mapDispatchToProps)(Footer);
