import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import Header from './components/Header';
import VideoList from './components/VideoList'

const theme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
    app: {
        backgroundColor: '#7f7c86',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <ThemeProvider theme={theme}>
                <Header />
                <VideoList />
            </ThemeProvider>
        </div>
    );
}

export default App;
