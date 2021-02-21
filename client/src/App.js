import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, } from '@material-ui/core';
import { useDispatch } from 'react-redux';

// import components
import Navbar from './components/Navbar/Navbar';
import HealthDetail from './components/HealthDetail/HealthDetail.js';
import Form from './components/Form/Form.js';

// import actions
import { getHD } from './actions/healthDetail.js';

// import styles
import useStyles from './styles.js';


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        dispatch(getHD());
    }, [currentId, dispatch]);


    return (
        // Home Dashboard Meal recipe sign in(logout)
        <Container maxWidth='lg'>
            <Navbar />
            <Grow in>
                <Container className={classes.mainContainer}>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <HealthDetail setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>

            </Grow>
        </Container >
    )
}

export default App;