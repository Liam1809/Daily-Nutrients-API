import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, } from '@material-ui/core';
import { useDispatch } from 'react-redux';

// import componentss
import HealthDetail from './HealthDetail/HealthDetail.js';
import Form from './Form/Form.js';

// import actions
import { getHD } from '../../actions/healthDetail.js';

// import styles
import useStyles from './styles.js';

const Dashboard = () => {
    const [currentId, setCurrentId] = useState(0);
    const [flag, setFlag] = useState(true);
    const dispatch = useDispatch();
    const classes = useStyles();

    // retrieve user from localStorage
    const user = JSON.parse(localStorage.getItem('userProfile'));
    // console.log('Current User', user);

    useEffect(() => {
        dispatch(getHD());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <HealthDetail user={user} setCurrentId={setCurrentId} flag={flag} setFlag={setFlag} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Form user={user} currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Dashboard;
