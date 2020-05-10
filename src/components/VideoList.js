import React from 'react';
import withStyles from "@material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import data from '../database.json';
import Container from '@material-ui/core/Container';
import VideoItem from './VideoItem';
import Player from './Player';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        backgroundColor: '#7f7c86',
    },
});

class VideoList extends React.Component {

    constructor(props) {
        super(props);
        this.closePlayer = this.closePlayer.bind(this);
        this.handleVideo = this.handleVideo.bind(this);

        this.state = {
            showPlayer: false,
            video: undefined,
            sources: {
                type: 'video',
                sources: [{
                        src: '347187416',
                        provider: 'vimeo',
                },],
            }
        }
    }

    closePlayer = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                video: undefined
            }
        })
    };

    handleVideo(tile) {
        const videoData = {
            title: tile.title,
            id: tile.video_id,
            description: tile.description,
            sources: {
                type: 'video',
                sources: [{
                        src: tile.video_id,
                        provider: 'youtube',
                },],
            }
        };
        this.setState(prevState => (
            {
                ...prevState,
                video: videoData,
            }
        ))
    }

    render() {
        const { classes } = this.props;
        const { video } = this.state;

        return (
            <Container className={classes.container}>
                <Grid container className={classes.root} spacing={3}>
                    {data.map((tile, index) => (
                        <VideoItem key={index} openPlayer={this.handleVideo} video={tile} />
                    ))}
                </Grid>
                <Player
                    open={Boolean(video)}
                    close={this.closePlayer}
                    video={video}
                />
            </Container>
        );
    }
}

export default (withStyles(styles)(VideoList));