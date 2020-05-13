import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import withStyles from "@material-ui/styles/withStyles";
import {ThemeProvider} from '@material-ui/styles';
import Header from './components/Header';
import VideoList from './components/VideoList'

const theme = createMuiTheme();

const styles = () => ({
    app: {
        backgroundColor: '#7f7c86',
    },
});

class App extends React.Component {

    state = {
        videoData: []
    }

    componentDidMount() {
        fetch('https://annawojtunik.github.io/video-app/database.json')
        .then(response => response.json())
        .then(data => this.setState({ videoData: data }));
    }

    render() {
        const { classes } = this.props;
        const { videoData } = this.state;

        return (
            <div className={classes.app}>
                <ThemeProvider theme={theme}>
                    <Header />
                    <VideoList data={videoData} />
                </ThemeProvider>
            </div>
        );
    }
}

export default (withStyles(styles)(App));
