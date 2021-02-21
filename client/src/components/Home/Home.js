import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

// import styles/images
import useStyles from './styles.js';
import HEP from '../../image/HEP.jpg';

const Home = () => {
    const classes = useStyles();

    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Grid container justify='center' alignItems='center' >
                    <img className={classes.image} src={HEP} alt="icon" />
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;
