import React from 'react'
import { AppBar, Button, Toolbar, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import components
import DrawerNav from './DrawerNav/DrawerNav.js';

// import styles/images
import useStyles from './styles.js';
import doctor from '../../image/doctor.png';

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Grid container alignItems='center'>
                <Grid item container justify='flex-start' xs={4}>
                    <DrawerNav />
                </Grid>
                <Grid item>
                    <img className={classes.image} src={doctor} alt="icon" height="100" />
                </Grid>
                <Grid item>
                    <Typography className={classes.heading} component={Link} to='/' variant='h2' align='center'>Daily Nutrients</Typography>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Navbar;
