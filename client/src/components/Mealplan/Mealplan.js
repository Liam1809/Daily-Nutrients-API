import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Grow, Grid, Divider, Typography } from '@material-ui/core';

import Foodcards from './Foodcards/Foodcards.js';
import Dietmodel from './Dietmodel/Dietmodel.js';
import Pievisual from './Pievisual/Pievisual.js';
import arrow from '../../image/arrow-gif.gif';
import useStyles from './styles.js';
// import actions
import { getHD } from '../../actions/healthDetail.js';
const Mealplan = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    const [veggiesArray, setVeggiesArray] = useState([]);
    const [fruitsArray, setFruitsArray] = useState([]);
    const [grainsArray, setGrainsArray] = useState([]);
    const [proteinsArray, setProteinsArray] = useState([]);

    const user = JSON.parse(localStorage.getItem('userProfile'));

    const HD = useSelector((state) => user ? state.healthDetails.find((h) => h.userID === user?.userInfo?._id || h.googleId === user?.userInfo?._id) : null);


    useEffect(() => {
        dispatch(getHD());
    }, [veggiesArray, fruitsArray, grainsArray, proteinsArray]);

    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Grid container justify='center' alignItems='center' >
                    <Foodcards user={user} setVeggiesArray={setVeggiesArray} setFruitsArray={setFruitsArray} setGrainsArray={setGrainsArray} setProteinsArray={setProteinsArray} />
                </Grid>
                <Grid container justify='center' alignItems='center' className={classes.secondContainer}>
                    <Grid item xs={12} md={12} container justify='center' alignItems='center' spacing={3}>
                        <Grid item xs={12} md={2} className={`${classes.shape} ${classes.shape1}`}>Vegetables: {HD?.bmr * 30 / 100} Kcal</Grid>
                        <Grid item xs={12} md={2} className={`${classes.shape} ${classes.shape2}`} >Fruits: {HD?.bmr * 20 / 100} Kcal</Grid>
                        <Grid item xs={12} md={2} className={`${classes.shape} ${classes.shape3}`}>Whole Grains: {HD?.bmr * 25 / 100} Kcal</Grid>
                        <Grid item xs={12} md={2} className={`${classes.shape} ${classes.shape4}`}>Healthy Proteins: {HD?.bmr * 25 / 100} Kcal</Grid>
                    </Grid>
                    <Divider style={{ margin: '30px 0 0 0', width: '80%' }} />
                    <Grid item xs={12} md={12} container justify='center' alignItems='center'>
                        <Grid item xs={12} md={3}>
                            <Dietmodel user={user} veggiesArray={veggiesArray} setVeggiesArray={setVeggiesArray} fruitsArray={fruitsArray} setFruitsArray={setFruitsArray} grainsArray={grainsArray} setGrainsArray={setGrainsArray} proteinsArray={proteinsArray} setProteinsArray={setProteinsArray} />
                            <img src={arrow} className={classes.image} />
                            <Typography variant="h6" className={classes.position}>Create Model Here</Typography>

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Pievisual />
                            <Typography variant='body1' className={classes.text}>Your Healthy Eating Plate Model</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grow >
    );
}

export default Mealplan;
