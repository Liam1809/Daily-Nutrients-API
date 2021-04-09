import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import styles/images
import useStyles from './styles.js';
import HEP from '../../image/HEP.jpg';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();


    return (

        <Grow in>
            <Container className={classes.mainContainer}>
                <Grid container justify='center' alignItems='center' >
                    <img className={classes.image} src={HEP} alt="icon" />
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;
