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
        <AppBar className={classes.appBar} position='sticky' color='inherit'>
            <Grid container justify='flex-start' alignItems='center' spacing={3}>
                <Grid item container justify='flex-start' xs={12} md={1}>
                    <img className={classes.icon} src={doctor} alt="icon" height="100" />
                </Grid>
            </Grid>
            <Grid item xs={12} md={10} container justify='center' alignItems='center' >

                <Typography className={classes.heading} component={Link} to='/' variant='h4' align='center'>DAILY NUTRIENTS</Typography>
            </Grid>
            <Grid item xs={12} md={10} container justify='flex-end' alignItems='center' >
                <Grid item container justify='flex-end' xs={12} md={1}>
                    <DrawerNav />
                </Grid>
            </Grid>

        </AppBar >
    )
}

export default Navbar;
