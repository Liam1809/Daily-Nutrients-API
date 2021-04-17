import React, { useState } from 'react'
// Hook
import { useDispatch, useSelector } from 'react-redux';

import { Box, Container, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Grid, Grow, Typography, Button, Tooltip, Divider } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

// import action
import { deleteHD } from '../../../actions/healthDetail.js';
// import style
import useStyles from './styles.js';

const HealthDetail = ({ user, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    // retrieve user's healthDetail
    const H = useSelector((state) => user ? state.healthDetails.find((h) => h.userID === user?.userInfo?._id || h.userID === user?.userInfo?.googleId) : null);
    // console.log(H);

    // check property of Health Data object
    const checkData = (given) => H?.hasOwnProperty(given) ? H[given] : 'N/A';

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container key={H?._id}>
            <div className={classes.mainOverlay}>
                <div className={classes.secondOverlay}>
                    <Typography variant='h4'>{user?.userInfo?.name}</Typography>
                </div>
                <div>
                    <Button size='small' onClick={handleClickOpen}><Tooltip title='infomation'><InfoIcon fontSize='large' /></Tooltip></Button>
                    <Dialog fullWidth maxWidth='sm' open={open} onClose={handleClose}>
                        <DialogTitle>Information About Health Statistics</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                - Age counted as in years unit (y)
                                <br />
                                <br />
                                - Weight counted as in kilogram unit (kg)
                                <br />
                                <br />
                                - Height counted as in centimeter unit (cm)
                                <br />
                                <br />
                                - BMI (Body Mass Index) a value derived from the mass and height of a person.
                                The formula is equal to Weight(kg) / (Height(cm) * Height(cm)), the normal figure ranging from 18.5 - 24.9
                                <br />
                                <br />
                                - BMR (Basal Metabolic Rate) is the number of calories required to keep your body functioning at rest.
                                <br />
                                The formula for men is 66.47 + (13.75 * weight in kilogram) + (5.003 * height in centimeter) − (6.755 * age in years)
                                <br />
                                The formula for women is 655.1 + (9.563 * weight in kilogram) + (1.85 * height in centimeter) - (4.676 * age in years)
                            </DialogContentText>
                            <DialogActions>
                                <Button variant='contained' color='primary' onClick={handleClose}>Close</Button>
                            </DialogActions>
                        </DialogContent>
                    </Dialog>
                </div>
                <div>
                    {H && (
                        <Button size="small" onClick={() => { setCurrentId(H._id) }}><Tooltip title='Update'><UpdateIcon fontSize="large" /></Tooltip></Button>
                    )}
                </div>
                <div style={{ paddingRight: 10 }}>
                    {H && (
                        <Button size="small" onClick={() => { dispatch(deleteHD(H._id)) }}><Tooltip title='Delete'><DeleteIcon fontSize="large" /></Tooltip></Button>
                    )}
                </div>
            </div>
            <Divider style={{ margin: '10px 20px', width: '30%' }} />
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
        </Container>
    );
}
export default HealthDetail;