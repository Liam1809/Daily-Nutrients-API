import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core';

import Foodcards from './Foodcards/Foodcards.js';
import useStyles from './styles.js';
// import actions
import { getHD, getHDbyId } from '../../actions/healthDetail.js';

const Mealplan = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getHD());
    }, [dispatch]);

    const user = JSON.parse(localStorage.getItem('userProfile'));

    const HD = useSelector((state) => user ? state.healthDetails.find((h) => h.userID === user?.userInfo?._id) : null);


    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Grid container justify='center' alignItems='center' >
                    <Foodcards />
                </Grid>
            </Container>
        </Grow>
    );
}

export default Mealplan;
