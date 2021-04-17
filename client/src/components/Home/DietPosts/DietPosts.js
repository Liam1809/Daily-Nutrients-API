import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Container, Grid } from '@material-ui/core';
import DietPost from './DietPost/DietPost';

import useStyles from './styles.js';

const DietPosts = ({ user }) => {
    const classes = useStyles();

    const dietPosts = useSelector((state) => state.diets);
    // console.log(dietPosts);
    return (

        !dietPosts.length ? (
            <Container style={{ marginBottom: 50 }}>
                <Grid container justify='center' alignItems='center'>
                    <CircularProgress />
                </Grid>
            </Container>
        ) : (
            <Container style={{ marginBottom: 50 }}>
                <Grid container justify='center' alignItems='flex-start' spacing={10}>
                    {dietPosts.map((dietPost) => (
                        <Grid item key={dietPost._id}>
                            <DietPost user={user} dietPost={dietPost} />
                        </Grid>
                    ))}
                </Grid>
            </Container >
        )
    )
};

export default DietPosts;
