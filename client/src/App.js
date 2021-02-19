import React, { useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid, FormControlLabel, Switch } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import components
import HealthDetail from './components/HealthDetail/HealthDetail.js';
import Form from './components/Form/Form.js';

// import styles/images
import useStyles from './styles.js';
import doctor from './image/doctor.png';

const App = () => {
    const classes = useStyles();
    const [isHealthData, setIsHealthData] = useState(false);

    const handleToggle = () => {
        setIsHealthData((prevMode) => !prevMode);
    };

    return (
        // home  recipe sign in(logout)
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <img className={classes.image} src={doctor} alt="icon" height="100" />
                <Typography className={classes.heading} variant='h2' align='center'>Daily Nutrients</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6} style={{ background: 'pink' }}>
                            okok
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <div className={classes.container}>
                                <div>
                                    <FormControlLabel control={<Switch color='primary' onChange={handleToggle} />} labelPlacement="start" label={isHealthData ? 'Form' : 'Health Data'} />
                                </div>
                            </div>
                            {isHealthData ? (
                                <HealthDetail />
                            ) : (
                                    <Form />
                                )}

                        </Grid>
                    </Grid>
                </Container>

            </Grow>
        </Container >
    )
}

export default App;
