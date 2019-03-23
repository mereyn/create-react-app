import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainContainer extends Component {

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

MainContainer.propTypes = {
  children: PropTypes.element,
};

export default MainContainer;
