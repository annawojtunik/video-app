import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    title: {
        fontWeight: 300,
        color: '#f5e0e6',
        [theme.breakpoints.down('xs')]: {
            fontSize: 30,
        },
    },
  }));

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <Typography variant="h3" className={classes.title}>Discover Twelve Planets</Typography>
        </div>
    );
}

export default Header;