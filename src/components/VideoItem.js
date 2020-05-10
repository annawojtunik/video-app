import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    cardContent: {
        minHeight: 120,
    },
}));

function VideoItem({video, openPlayer}) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card onClick={() => openPlayer(video)}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={video.title}
                        height="300"
                        image={'http://i3.ytimg.com/vi/'+ video.video_id +'/maxresdefault.jpg'}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {video.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {video.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default VideoItem;