import React from 'react';
import withStyles from "@material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const styles = () => ({
    cardContent: {
        minHeight: 120,
    },
    media: {
        height: 300,
        width: '100%',
        position: 'absolute',
        backgroundColor: '#f5f5f5',
    }
});

class VideoItem extends React.Component {

    state = {
        loaded: false
    };

    onImgLoaded = () => {
        this.setState({ loaded: true });
    };

    render() {
        const { video, openPlayer, classes } = this.props;
        const { loaded } = this.state;
        return (
            <Grid item xs={12} sm={6} md={4}>
                <Card onClick={() => openPlayer(video)}>
                    <CardActionArea>
                        { !loaded &&
                        <Skeleton animation="wave" variant="rect" className={classes.media} />
                        }
                        <CardMedia
                            component="img"
                            alt={video.title}
                            height="300"
                            image={'http://i3.ytimg.com/vi/'+ video.video_id +'/maxresdefault.jpg'}
                            onLoad={this.onImgLoaded}
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
}

export default (withStyles(styles)(VideoItem));