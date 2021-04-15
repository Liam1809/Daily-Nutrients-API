import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grow, Grid, Button, Typography, Divider } from '@material-ui/core';
import DietPost from './DietPost/DietPost.js';

import { getDietPost } from '../../actions/diet.js';
// import styles/images
import useStyles from './styles.js';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDietPost());
    }, []);

    const dietPosts = useSelector((state) => state.diets);

    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Home Page</Typography>
                <Divider style={{ margin: 20 }} />
                <Typography>NewsFeed</Typography>
                <Grid container justify='center' alignItems='center' >
                    <Grid item xs={12} md={12} justify='center'>
                        {
                            dietPosts.map((dietPost) => (
                                <div key={dietPost._id} style={{ display: 'inline-block', margin: '5% 2% 2% 7%' }}>
                                    <DietPost dietPost={dietPost} key={dietPost._id} />
                                </div>
                            ))
                        }
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;
