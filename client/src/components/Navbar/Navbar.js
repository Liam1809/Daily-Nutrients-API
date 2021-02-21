import React from 'react'
import { AppBar, Typography } from '@material-ui/core';

// import components
import DrawerNav from './DrawerNav/DrawerNav.js';

// import styles/images
import useStyles from './styles.js';
import doctor from '../../image/doctor.png';

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <img className={classes.image} src={doctor} alt="icon" height="100" />
            <Typography className={classes.heading} variant='h2' align='center'>Daily Nutrients</Typography>
            <DrawerNav />
        </AppBar>
    )
}

export default Navbar;
