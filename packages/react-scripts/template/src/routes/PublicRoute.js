import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Main from '../components/containers/Main';

const PublicRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => (
    <Main>
      <Component {...props}/>
    </Main>
  )}/>
}

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default (PublicRoute)
