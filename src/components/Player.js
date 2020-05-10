import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Video from './Video';

const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: 0,
  },
  description: {
    paddingTop: theme.spacing(2),
  },
}));

function Player({open, close, video}) {
    const classes = useStyles();
    return (
      <React.Fragment>
        { video &&
        <Dialog
          open={open}
          onClose={close}
        >
          <DialogTitle>{video.title}</DialogTitle>
          <DialogContent className={classes.content}>
            <Video sources={video.sources} />
            <DialogContentText className={classes.description}>
              {video.description}
            </DialogContentText>
          </DialogContent>
        </Dialog>
        }
      </React.Fragment>
    );
}

export default Player;