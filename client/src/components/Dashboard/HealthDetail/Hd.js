import React from 'react';
import { Box, Container, Grid, Grow, Typography, Button, Tooltip } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
// import Hook
import { useDispatch } from 'react-redux';
// import action
import { deleteHD } from '../../../actions/healthDetail.js';
// import style
import useStyles from './styles.js';

const Hd = ({ user, H, setCurrentId }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    // check property of Health Data object
    const checkData = (given) => H.hasOwnProperty(given) ? H[given] : 'null';

    return (
        <Container className={classes.container}>
            <div className={`${classes.mainOverlay} ${classes.overlay1}`}>
                <Typography variant='h4'>Welcome {user?.userInfo?.name}</Typography>
            </div>
            <div className={`${classes.mainOverlay} ${classes.overlay2}`}>
                <Button size="small" onClick={() => { setCurrentId(H._id) }}><Tooltip title='Update'><UpdateIcon fontSize="large" /></Tooltip></Button>
            </div>
            <Grid container justify='space-between' alignItems="stretch" spacing={4}>
                <Grid item xs={12} sm={1}>
                    <Typography variant='h6' className={`${classes.mainText} ${classes.text1}`}>Age</Typography>
                    <Typography variant='h6' className={`${classes.mainText} ${classes.text}`}>{checkData('age')}</Typography>
                    <Box borderRadius="50%" className={`${classes.Round} ${classes.Round1}`} />
                </Grid>
                <Grid item xs={12} sm={1}>
                    <Typography variant='h6' className={`${classes.mainText} ${classes.text2}`}>Weight</Typography>
                    <Typography variant='h6' className={`${classes.mainText} ${classes.text}`}>{checkData('weight')}</Typography>
                    <Box borderRadius="50%" className={`${classes.Round} ${classes.Round1}`} />
                </Grid>
                <Grid item xs={12} sm={1}>
                    <Typography variant='h6' className={`${classes.mainText} ${classes.text2}`}>Height</Typography>
                    <Typography variant='h6' className={`${classes.mainText} ${classes.text}`}>{checkData('height')}</Typography>
                    <Box borderRadius="50%" className={`${classes.Round} ${classes.Round1}`} />
                </Grid>
            </Grid>

            <Grid container justify='space-around' alignItems="stretch" spacing={3}>
                <Grid item xs={6} md={1}>
                    <Typography variant='h6' className={`${classes.mainText} ${classes.text1}`}>BMI</Typography>
                    <Typography variant='h6' className={`${classes.mainText} ${classes.text}`}>{checkData('bmi')}</Typography>
                    <Box borderRadius="50%" className={`${classes.Round} ${classes.Round2}`} />
                </Grid>

                <Grid item xs={6} md={1}>
                    <Typography variant='h6' className={`${classes.mainText} ${classes.text1}`}>BMR</Typography>
                    <Typography variant='h6' className={`${classes.mainText} ${classes.text}`}>{checkData('bmr')}</Typography>
                    <Box borderRadius="50%" className={`${classes.Round} ${classes.Round2}`} />
                </Grid>
            </Grid>
            <div className={`${classes.mainOverlay} ${classes.overlay3}`}>
                <Button size="small" onClick={() => { dispatch(deleteHD(H._id)) }}><Tooltip title='Delete'><DeleteIcon fontSize="large" /></Tooltip></Button>
            </div>
        </Container >
    )
}

export default Hd;