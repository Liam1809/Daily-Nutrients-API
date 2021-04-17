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
    const [mainFlag, setMainFlag] = useState(false);

    const [totalVeggies, setTotalVeggies] = useState(0);
    const [totalFruits, setTotalFruits] = useState(0);
    const [totalGrains, setTotalGrains] = useState(0);
    const [totalProteins, setTotalProteins] = useState(0);

    const [veggiesArray, setVeggiesArray] = useState([]);
    const [fruitsArray, setFruitsArray] = useState([]);
    const [grainsArray, setGrainsArray] = useState([]);
    const [proteinsArray, setProteinsArray] = useState([]);

    const user = JSON.parse(localStorage.getItem('userProfile'));

    const HD = useSelector((state) => user ? state.healthDetails.find((h) => h.userID === user?.userInfo?._id || h.userID === user?.userInfo?.googleId) : null);

    let bP = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]

    useEffect(() => {
        dispatch(getHD());
    }, [dispatch]);


    return (
        <Grow in>
            {
                !user ? (
                    <Container className={classes.mainContainer}>
                        <Grid container justify='center' alignItems='center' >
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5">YOU ARE NOT AUTHORIZED . . .</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                ) : (
                    <Container className={classes.mainContainer}>
                        <Grid container justify='center' alignItems='center' >
                            <Foodcards
                                user={user}
                                mainFlag={mainFlag}
                                setMainFlag={setMainFlag}
                                setVeggiesArray={setVeggiesArray}
                                setTotalVeggies={setTotalVeggies}
                                setFruitsArray={setFruitsArray}
                                setTotalFruits={setTotalFruits}
                                setGrainsArray={setGrainsArray}
                                setTotalGrains={setTotalGrains}
                                setProteinsArray={setProteinsArray}
                                setTotalProteins={setTotalProteins}
                            />
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
                                        setMainFlag={setMainFlag}
                                        veggiesArray={veggiesArray}
                                        setVeggiesArray={setVeggiesArray}
                                        totalVeggies={totalVeggies}
                                        setTotalVeggies={setTotalVeggies}
                                        fruitsArray={fruitsArray}
                                        setFruitsArray={setFruitsArray}
                                        totalFruits={totalFruits}
                                        setTotalFruits={setTotalFruits}
                                        grainsArray={grainsArray}
                                        setGrainsArray={setGrainsArray}
                                        totalGrains={totalGrains}
                                        setTotalGrains={setTotalGrains}
                                        proteinsArray={proteinsArray}
                                        setProteinsArray={setProteinsArray}
                                        totalProteins={totalProteins}
                                        setTotalProteins={setTotalProteins}
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
                )
            }
        </Grow >
    );
}

export default Mealplan;
