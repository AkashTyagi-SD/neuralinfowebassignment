import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "#fff",
  },
}));
export const Heading = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Grid container item xs={6} md={8} lg={12} justify="space-between">
              <Typography variant="h6" className={classes.menuButton}>
                Employee List
              </Typography>
              <Link to="/add">
                <Typography className={classes.title}>Add Employee</Typography>
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
};
