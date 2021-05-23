import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '10vh',
        flex: 1,
        backgroundColor: '#1E90FF',
        color: 'white',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    },
}));
function Header ({ title }) {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Typography className={classes.title}>{title}</Typography>
        </Grid>
    );
}

export default Header;
