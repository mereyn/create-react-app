import React, { Component } from 'react';
import logo from './logo.svg';
import './_home.css';

class HomePage extends Component {

  getEnvValues() {
    if (!process.env.REACT_APP_USER_ID || !process.env.REACT_APP_ID) {
      throw new Error('Please define `REACT_APP_USER_ID` and `REACT_APP_ID` in your .env file');
    }

    const userID = process.env.REACT_APP_USER_ID;
    const appID = process.env.REACT_APP_ID;

    return { userID, appID };
  }

  render() {

    const { userID, appID } = this.getEnvValues();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Neztek</h2>
        </div>
        <p className="App-intro">
           <b> Employee ID: { userID } </b><br/><br/>
           <b> Application ID: { appID } </b>
        </p>
      </div>
    );
  }
}

export default HomePage;
