import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import PublicRoute from './PublicRoute';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      {routes.map((route, i) => {
        return <PublicRoute key={i} {...route} />;
      })}
    </Switch>
  </Router>
);

export default Routes;
