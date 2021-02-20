import React from 'react';
import { Box, Container, Grid, Grow, Typography, Button, Tooltip } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';

import useStyles from './styles.js';

const HD = ({ H, setCurrentId }) => {
    const classes = useStyles();

    const checkData = (given) => H.hasOwnProperty(given) ? H[given] : 'null';

    return (
        <Container className={classes.container}>
            <div className={classes.overlay1}>
                <Typography variant='h4'>Welcome {checkData('name')} ✌️</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button size="small" onClick={() => { setCurrentId(H._id) }}><Tooltip title='Update'><UpdateIcon fontSize="large" /></Tooltip></Button>
            </div>
            <Grid container justify='space-between' alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={2}>
                    <Typography variant='h6' className={classes.text1}>Age</Typography>
                    <Typography variant='h6' className={classes.text}>{checkData('age')}</Typography>
                    <Box borderRadius="50%" className={`${classes.Round} ${classes.Round1}`} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant='h6' className={classes.text2}>Weight</Typography>
                    <Typography variant='h6' className={classes.text}>{checkData('weight')}</Typography>
                    <Box borderRadius="50%" className={`${classes.Round} ${classes.Round1}`} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant='h6' className={classes.text2}>Height</Typography>
                    <Typography variant='h6' className={classes.text}>{checkData('height')}</Typography>
                    <Box borderRadius="50%" className={`${classes.Round} ${classes.Round1}`} />
                </Grid>
            </Grid>

            <Grid container justify='space-evenly' alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={2}>
                    <Typography variant='h6' className={classes.text1}>BMI</Typography>
                    <Typography variant='h6' className={classes.text}>{checkData('bmi')}</Typography>
                    <Box borderRadius="50%" className={`${classes.Round} ${classes.Round2}`} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant='h6' className={classes.text1}>BMR</Typography>
                    <Typography variant='h6' className={classes.text}>{checkData('bmr')}</Typography>
                    <Box borderRadius="50%" className={`${classes.Round} ${classes.Round2}`} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default HD;
