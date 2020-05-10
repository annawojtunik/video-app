import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    header: {
        flexGrow: 1,
        textAlign: 'center',
        padding: theme.spacing(2),
        backgroundColor: '#7f7c86',
    },
    title: {
        fontWeight: 300,
        color: '#000',
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