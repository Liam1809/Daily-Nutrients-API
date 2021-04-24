import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Divider, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

// import componentss
import HealthDetail from './HealthDetail/HealthDetail.js';
import Form from './Form/Form.js';

// import actions
import { getHD } from '../../actions/healthDetail.js';

// import styles
import useStyles from './styles.js';

const Dashboard = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    const user = JSON.parse(localStorage.getItem('userProfile'));

    useEffect(() => {
        dispatch(getHD());
    }, [currentId]);

    return (
        <Grow in>
            {
                !user ? (
                    <Container className={classes.mainContainer}>
                        <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Dashboard</Typography>
                        <Divider style={{ margin: 20 }} />
                        <Grid container justify="center" alignItems="center" spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5">YOU ARE NOT AUTHORIZED . . .</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                ) : (
                    user?.userInfo?.role !== "ADMIN" ? (
                        <Container className={classes.mainContainer}>
                            <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Dashboard</Typography>
                            <Divider style={{ margin: 20 }} />
                            <Grid container justify="space-between" alignItems="center" spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <HealthDetail user={user} setCurrentId={setCurrentId} />
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Form user={user} currentId={currentId} setCurrentId={setCurrentId} />
                                </Grid>
                            </Grid>
                        </Container>
                    ) : (
                        <Container className={classes.mainContainer}>
                            <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Dashboard</Typography>
                            <Divider style={{ margin: 20 }} />
                            <Grid container justify="center" alignItems="center" spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5">ADMIN ARE NOT AUTHORIZED . . .</Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    )
                )
            }
        </Grow>
    );
}

export default Dashboard;
