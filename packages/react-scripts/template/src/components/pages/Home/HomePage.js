import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Footer from "../../common/Footer";
import Header from "../../common/Header";

class HomePage extends Component {
  render () {
    const { classes } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <Header />
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Home
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" component={Link} to="/sign-in">
                      Sign in
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
            <Footer />
          </div>
        </main>

      </Fragment>
    );
  }

}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
