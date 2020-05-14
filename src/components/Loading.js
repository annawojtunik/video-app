import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(() => ({
    media: {
        height: 300,
    },
    cardContent: {
        minHeight: 112,
    },
}));

function Loading() {
    const classes = useStyles();
    let array = [];
    for(let i = 0; i < 6; i++) {
        array.push(
        <Grid key={i} item xs={12} sm={6} md={4}>
            <Card>
                <Skeleton animation="wave" variant="rect" className={classes.media} />
                <CardContent className={classes.cardContent}>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 24, marginTop: 12 }} width="40%" />
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                </CardContent>
            </Card>
        </Grid>
        );
    }

    return (
        <React.Fragment>
            {array}
        </React.Fragment>
  );
}

export default Loading;