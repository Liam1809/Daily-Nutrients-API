import React from 'react';
import { Container, Grow, Grid, Typography } from '@material-ui/core';

import useStyles from './styles.js';

const Recipes = () => {
    const classes = useStyles();

    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Grid container justify='center' alignItems='center' >
                    <Typography variant="h4">Searching for Recipes</Typography>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Recipes;
