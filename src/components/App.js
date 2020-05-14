import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import withStyles from "@material-ui/styles/withStyles";

import Header from './Header';
import VideoList from './VideoList'
import Footer from './Footer';

const theme = createMuiTheme();

const styles = () => ({
    app: {
        backgroundColor: '#7f7c86',
        width: '100%',
        minHeight: '100vh'
    },
});

class App extends React.Component {

    state = {
        videoData: [],
        loaded: false
    }

    componentDidMount() {
        fetch('https://annawojtunik.github.io/video-app/database.json')
        .then(response => response.json())
        .then(data => this.setState({
            videoData: data,
            loaded: true
        }));
    }

    render() {
        const { classes } = this.props;
        const { videoData, loaded } = this.state;

        return (
            <div className={classes.app}>
                <ThemeProvider theme={theme}>
                    <Header />
                    <VideoList data={videoData} loaded={loaded} />
                    <Footer />
                </ThemeProvider>
            </div>
        );
    }
}

export default (withStyles(styles)(App));
