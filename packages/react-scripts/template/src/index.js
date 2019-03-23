/**
 * Next, we will create a fresh React application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig'; // eslint-disable-line import/default
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ThemeDefault from './theme/default';

const store = storeConfig();

const App = () => (
  <MuiThemeProvider theme={ThemeDefault}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
