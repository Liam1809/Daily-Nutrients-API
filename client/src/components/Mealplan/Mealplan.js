import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Grow, Grid, Divider, Typography } from '@material-ui/core';

import Foodcards from './Foodcards/Foodcards.js';
import Dietmodel from './Dietmodel/Dietmodel.js';
import Pievisual from './Pievisual/Pievisual.js';
import useStyles from './styles.js';
// import actions
import { getHD } from '../../actions/healthDetail.js';

const Mealplan = () => {
    const [currentId, setCurrentId] = useState(0);
    const [BMR, setBMR] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('userProfile'));

    const HD = useSelector((state) => user ? state.healthDetails.find((h) => h.userID === user?.userInfo?._id || h.googleId === user?.userInfo?._id) : null);


    useEffect(() => {
        setBMR(HD?.bmr);
        dispatch(getHD());
    }, [user]);

    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Grid container justify='center' alignItems='center' >
                    <Foodcards user={user} />
                </Grid>
                <Grid container justify='space-around' alignItems='center' spacing={5} className={classes.secondContainer}>
                    <Grid item xs={12} md={6}>
                        <div style={{ display: 'flex' }}>
                            <div className={`${classes.shape} ${classes.shape1}`}>30% Vegetables</div>
                            <div className={`${classes.shape} ${classes.shape2}`}>20% Fruits</div>
                            <div className={`${classes.shape} ${classes.shape3}`}>25% Whole Grains</div>
                            <div className={`${classes.shape} ${classes.shape4}`}>25% Healthy Proteins</div>
                        </div>
                        <Divider style={{ margin: '30px 0 0 0', width: '80%' }} />
                        <div style={{ marginLeft: 50 }}>
                            <Pievisual />
                            <Typography variant='body1' className={classes.text}>Your Healthy Eating Plate Model</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Dietmodel BMR={BMR} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Mealplan;
