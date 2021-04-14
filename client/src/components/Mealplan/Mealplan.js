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

    const [totalVeggies, setTotalVeggies] = useState(0);
    const [totalFruits, setTotalFruits] = useState(0);
    const [totalGrains, setTotalGrains] = useState(0);
    const [totalProteins, setTotalProteins] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    const [veggiesArray, setVeggiesArray] = useState([]);
    const [fruitsArray, setFruitsArray] = useState([]);
    const [grainsArray, setGrainsArray] = useState([]);
    const [proteinsArray, setProteinsArray] = useState([]);

    const user = JSON.parse(localStorage.getItem('userProfile'));

    const HD = useSelector((state) => user ? state.healthDetails.find((h) => h.userID === user?.userInfo?._id || h.googleId === user?.userInfo?._id) : null);


    useEffect(() => {
        dispatch(getHD());
        let TOTAL = 0;
        veggiesArray.map((item) => TOTAL += item.calories);
        fruitsArray.map((item) => TOTAL += item.calories);
        grainsArray.map((item) => TOTAL += item.calories);
        proteinsArray.map((item) => TOTAL += item.calories);

        setTotalCalories(TOTAL.toFixed(2));

        if (veggiesArray.length != 0) {
            let total = 0;
            veggiesArray.map((item) => total += item.calories);
            setTotalVeggies(total.toFixed(2));
        }
        if (fruitsArray.length != 0) {
            let total = 0;
            fruitsArray.map((item) => total += item.calories);
            setTotalFruits(total.toFixed(2));
        }
        if (grainsArray.length != 0) {
            let total = 0;
            grainsArray.map((item) => total += item.calories);
            setTotalGrains(total.toFixed(2));
        }
        if (proteinsArray.length != 0) {
            let total = 0;
            proteinsArray.map((item) => total += item.calories);
            setTotalProteins(total.toFixed(2));
        }

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
                            <Dietmodel
                                user={user}
                                totalCalories={totalCalories}
                                veggiesArray={veggiesArray}
                                setVeggiesArray={setVeggiesArray}
                                totalVeggies={totalVeggies}
                                fruitsArray={fruitsArray}
                                setFruitsArray={setFruitsArray}
                                totalFruits={totalFruits}
                                grainsArray={grainsArray}
                                setGrainsArray={setGrainsArray}
                                totalGrains={totalGrains}
                                proteinsArray={proteinsArray}
                                setProteinsArray={setProteinsArray}
                                totalProteins={totalProteins}
                            />
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
