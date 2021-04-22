import React from 'react';
import { Container, Grow, Grid, Typography, Divider } from '@material-ui/core';

// import styles/images
import useStyles from './styles.js';

const Schedule = () => {
    const classes = useStyles();

    const user = JSON.parse(localStorage.getItem('userProfile'));

    return (
        <Grow in>
            {
                !user ? (
                    <Container className={classes.mainContainer}>
                        <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Schedule</Typography>
                        <Divider style={{ margin: 20 }} />
                        <Grid container justify="center" alignItems="center" spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5">YOU ARE NOT AUTHORIZED . . .</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                ) : (
                    user?.userInfo?.role === "USER" ? (
                        <Container className={classes.mainContainer}>
                            <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Schedule</Typography>
                            <Divider style={{ margin: 20 }} />
                            <Grid container justify="space-between" alignItems="center" spacing={3}>
                                THIS IS SCHEDULE PAGE
                            </Grid>
                        </Container>
                    ) : (
                        <Container className={classes.mainContainer}>
                            <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Schedule</Typography>
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

    )
}

export default Schedule;
