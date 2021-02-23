import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import useStyles from './styles.js';

const Recipes = () => {
    const classes = useStyles();

    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Grid container justify='center' alignItems='center' >
                    THIS IS  RECIPES HOMEPAGE
                </Grid>
            </Container>
        </Grow>
    );
}

export default Recipes;
