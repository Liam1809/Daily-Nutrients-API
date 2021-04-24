import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grow, Grid, Button, Typography, Divider } from '@material-ui/core';
import DietPosts from './DietPosts/DietPosts.js';

import { getDietPost } from '../../actions/diet.js';
// import styles/images
import useStyles from './styles.js';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDietPost());
    }, []);

    const user = JSON.parse(localStorage.getItem('userProfile'));

    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Home Page</Typography>
                <Divider style={{ margin: 20 }} />
                <Typography variant="h5" style={{ padding: '10px 0px 10px 50px' }}>NewsFeed</Typography>
                <Divider style={{ margin: 20, width: '300px' }} />
                <Grid container justify='center' alignItems='baseline' >
                    <Grid item xs={12} md={12}>
                        <DietPosts user={user} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;
