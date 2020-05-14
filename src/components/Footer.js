import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHub from '@material-ui/icons/GitHub';
import Copyright from '@material-ui/icons/Copyright';

const useStyles = makeStyles((theme) => ({
    footer: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    title: {
        color: '#f5e0e6',
    },
    button: {
        marginLeft: theme.spacing(1),
        marginBottom: 4,
        color: '#f5e0e6',
    },
    icon:  {
        color: '#f5e0e6',
        position: 'relative',
        top: 4,
        marginRight: 3,
    }
  }));

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Copyright className={classes.icon} fontSize="small" />
            <Typography variant="inherit" className={classes.title}>2020 Anna Wojtunik</Typography>
            <IconButton className={classes.button} aria-label="github" href="https://github.com/annawojtunik/video-app">
                <GitHub />
            </IconButton>
        </div>
    );
}

export default Footer;