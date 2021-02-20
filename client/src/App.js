import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, FormControlLabel, Switch } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useDispatch } from 'react-redux';

// import components
import HealthDetail from './components/HealthDetail/HealthDetail.js';
import Form from './components/Form/Form.js';
import { getHD } from './actions/healthDetail.js';

// import styles/images
import useStyles from './styles.js';
import doctor from './image/doctor.png';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);
    // const [isHealthData, setIsHealthData] = useState(true);

    useEffect(() => {
        dispatch(getHD());
    }, [dispatch]);

    // const handleToggle = () => {
    //     setIsHealthData((prevMode) => !prevMode);
    // };

    return (
        // home  recipe sign in(logout)
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <img className={classes.image} src={doctor} alt="icon" height="100" />
                <Typography className={classes.heading} variant='h2' align='center'>Daily Nutrients</Typography>
            </AppBar>
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
