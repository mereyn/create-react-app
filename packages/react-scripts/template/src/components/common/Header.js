import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import headerStyles from './_headerStyle';

class Header extends Component {

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Neztek
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyles)(Header);
