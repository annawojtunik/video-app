import React from 'react';
import withStyles from "@material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import VideoItem from './VideoItem';
import Player from './Player';

const styles = () => ({
    root: {
        flexGrow: 1,
    },
});

class VideoList extends React.Component {

    constructor(props) {
        super(props);
        this.handleVideo = this.handleVideo.bind(this);

        this.state = {
            video: undefined,
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
        const { classes, data } = this.props;
        const { video } = this.state;

        return (
            <Container>
                <Grid container className={classes.root} spacing={3}>
                    {data.map((tile, index) => (
                        <VideoItem key={`video-${index}`} openPlayer={this.handleVideo} video={tile} />
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