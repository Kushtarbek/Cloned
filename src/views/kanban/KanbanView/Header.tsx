import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Breadcrumbs, Typography, Link, makeStyles } from '@material-ui/core';
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
    <div className={clsx(classes.root, className)} {...rest}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link variant="body1" color="inherit" to="/app" component={RouterLink}>
          Dashboard
        </Link>
        <Typography variant="body1" color="textPrimary">
          Kanban
        </Typography>
      </Breadcrumbs>
      <Typography variant="h3" color="textPrimary">
        Board
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
