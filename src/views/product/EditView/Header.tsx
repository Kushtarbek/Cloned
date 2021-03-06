import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Breadcrumbs, Button, Grid, Link, Typography, makeStyles } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

interface HeaderProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {},
}));

const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid className={clsx(classes.root, className)} container justify="space-between" spacing={3} {...rest}>
      <Grid item>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link variant="body1" color="inherit" to="/app" component={RouterLink}>
            Dashboard
          </Link>
          <Link variant="body1" color="inherit" to="/app/management/products" component={RouterLink}>
            Products
          </Link>
          <Typography variant="body1" color="textPrimary">
            Editing
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          Editing product
        </Typography>
      </Grid>
      {/* <Grid item>
        <Button component={RouterLink} to="/app/management/products">
          Discard
        </Button>
        <Button component={RouterLink} to="/app/management/products">
          Save
        </Button>
      </Grid> */}
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
