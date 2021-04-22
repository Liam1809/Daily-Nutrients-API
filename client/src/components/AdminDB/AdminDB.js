import React from 'react';
import { Container, Grow, Typography, Grid, Divider } from '@material-ui/core';
import useStyle from './styles.js';


const AdminDB = () => {
    const classes = useStyle();
    const user = JSON.parse(localStorage.getItem('userProfile'));

    return (
        <Grow in>
            {
                !user ? (
                    <Container className={classes.mainContainer}>
                        <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Admin Dashboard</Typography>
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
                            <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Dashboard</Typography>
                            <Divider style={{ margin: 20 }} />
                            <Grid container justify="center" alignItems="center" spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5">USER ARE NOT AUTHORIZED . . .</Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    ) : (
                        <Container className={classes.mainContainer}>
                            <div>
                                THIS IS ADMIN DB
        </div>
                        </Container>
                    )
                )
            }
        </Grow>

    )
}

export default AdminDB;
