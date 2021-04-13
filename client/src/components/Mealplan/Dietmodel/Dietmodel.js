import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'date-fns';
import { Container, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Select, Avatar, Typography, Grid, Divider, Tooltip } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles.js';
import { setSnackBar } from '../../../actions/snackBar.js';

const Dietmodel = ({ user, veggiesArray, setVeggiesArray, fruitsArray, setFruitsArray, grainsArray, setGrainsArray, proteinsArray, setProteinsArray }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [flag, setFlag] = useState(false);
    const initial = { recipes: [{ title: '', img: '', calories: '', serving_qty: '' }], start: new Date(), end: new Date() };
    const [dietData, setDietData] = useState({ Vegetables: initial, Fruits: initial, Grains: initial, Proteins: initial });

    const HD = useSelector((state) => user ? state.healthDetails.find((h) => h.userID === user?.userInfo?._id || h.googleId === user?.userInfo?._id) : null);

    useEffect(() => {
        if (dietData) setDietData(dietData);
    }, [dietData]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setDietData({ Vegetables: initial, Fruits: initial, Grains: initial, Proteins: initial });
        setOpen(false);
    };

    // dispatch to create model
    const handleSubmit = (e) => {
        e.preventDefault();
        if (dietData.Vegetables.recipes[0].title == "") {
            dispatch(setSnackBar(true, "error", "PLEASE SET TIME BEFORE CREATE MODEL"));
        } else {
            if (dietData.Vegetables.start.getDate() > new Date().getDate()) {
                dispatch(setSnackBar(true, "error", "DIET PLAN FOR TODAY ALREADY CREATED"));
            } else {
                console.log(dietData);
            }
        }

    }

    return (
        <Container>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Total Calories: 0 / {HD?.bmr} Kcal</Button>
            <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
                <DialogTitle>Total Calories: 0 / {HD?.bmr} Kcal</DialogTitle>
                <DialogContent>
                    <form noValidate onSubmit={handleSubmit}>
                        <DialogContentText className={`${classes.text} ${classes.vegies}`}>Vegetales Group: {veggiesArray.map} / {HD?.bmr * 30 / 100} Kcal</DialogContentText>
                        <Container>
                            <Grid container justify='flex-start'>
                                {
                                    veggiesArray?.map((k) => (
                                        <>
                                            <Grid item container justify='flex-start' alignItems='center' xs={12} md={5} style={{ paddingBottom: 20 }}>
                                                <Grid item xs={12} md={3}>
                                                    <Avatar src={k.img} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Typography variant="subtitle1">{k.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="subtitle1">{k.calories} Kcal</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item container xs={12} md={7} justify='center' alignItems='stretch' style={{ paddingTop: 2 }}>
                                                <Grid item xs={12} md={12}>
                                                    <Button onClick={(e) => {
                                                        // fix here
                                                        let index = veggiesArray.indexOf(k);
                                                        if (index != -1) {
                                                            veggiesArray.splice(index, 1);
                                                            setFlag(!flag);
                                                        }

                                                    }}><Tooltip title="delete"><DeleteIcon fontSize='default' /></Tooltip></Button>
                                                </Grid>
                                            </Grid>
                                        </>
                                    ))
                                }
                            </Grid>
                            <Grid container justify="flex-start" alignItems="center" spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="subtitle1">set up time to eat vegetables:</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardTimePicker label="Start Time" value={dietData.Vegetables.start} onChange={(e) => setDietData({ ...dietData, Vegetables: { start: e } })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardTimePicker label="End Time" value={dietData.Vegetables.end} onChange={(e) => setDietData({ ...dietData, Vegetables: { recipes: veggiesArray, start: dietData.Vegetables.start, end: e } })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        </Container>
                        <Divider style={{ margin: '20px 2px' }} />
                        <DialogContentText className={`${classes.text} ${classes.fruits}`}>Fruits Group: 0 / {HD?.bmr * 20 / 100} Kcal</DialogContentText>
                        <Container>
                            <Grid container justify='flex-start'>
                                {
                                    fruitsArray?.map((k) => (
                                        <>
                                            <Grid item container justify='flex-start' alignItems='center' xs={12} md={5} style={{ paddingBottom: 20 }}>
                                                <Grid item xs={12} md={3}>
                                                    <Avatar src={k.img} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Typography variant="subtitle1">{k.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="subtitle1">{k.calories} Kcal</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item container xs={12} md={7} justify='center' alignItems='stretch' style={{ paddingTop: 2 }}>
                                                <Grid item xs={12} md={12}>
                                                    <Button onClick={(e) => {

                                                        let index = fruitsArray.indexOf(k);
                                                        if (index != -1) {
                                                            fruitsArray.splice(index, 1);
                                                            setFlag(!flag);
                                                        }

                                                    }}><Tooltip title="delete"><DeleteIcon fontSize='default' /></Tooltip></Button>
                                                </Grid>
                                            </Grid>
                                        </>
                                    ))
                                }
                            </Grid>
                            <Grid container justify="flex-start" alignItems="center" spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="subtitle1">set up time to eat fruits:</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardTimePicker label="Start Time" value={dietData.Fruits.start} onChange={(e) => setDietData({ ...dietData, Fruits: { start: e } })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardTimePicker label="End Time" value={dietData.Fruits.end} onChange={(e) => setDietData({ ...dietData, Fruits: { recipes: fruitsArray, start: dietData.Fruits.start, end: e } })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        </Container>
                        <Divider style={{ margin: '20px 2px' }} />
                        <DialogContentText className={`${classes.text} ${classes.grains}`}>Whole Grains Group: 0 / {HD?.bmr * 25 / 100} Kcal</DialogContentText>
                        <Container>
                            <Grid container justify='flex-start'>
                                {
                                    grainsArray?.map((k) => (
                                        <>
                                            <Grid item container justify='flex-start' alignItems='center' xs={12} md={5} style={{ paddingBottom: 20 }}>
                                                <Grid item xs={12} md={3}>
                                                    <Avatar src={k.img} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Typography variant="subtitle1">{k.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="subtitle1">{k.calories} Kcal</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item container xs={12} md={7} justify='center' alignItems='stretch' style={{ paddingTop: 2 }}>
                                                <Grid item xs={12} md={12}>
                                                    <Button onClick={(e) => {

                                                        let index = grainsArray.indexOf(k);
                                                        if (index != -1) {
                                                            grainsArray.splice(index, 1);
                                                            setFlag(!flag);
                                                        }

                                                    }}><Tooltip title="delete"><DeleteIcon fontSize='default' /></Tooltip></Button>
                                                </Grid>
                                            </Grid>
                                        </>
                                    ))
                                }
                            </Grid>
                            <Grid container justify="flex-start" alignItems="center" spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="subtitle1">set up time to eat grains:</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardTimePicker label="Start Time" value={dietData.Grains.start} onChange={(e) => setDietData({ ...dietData, Grains: { start: e } })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardTimePicker label="End Time" value={dietData.Grains.end} onChange={(e) => setDietData({ ...dietData, Grains: { recipes: grainsArray, start: dietData.Grains.start, end: e } })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        </Container>
                        <Divider style={{ margin: '20px 2px' }} />
                        <DialogContentText className={`${classes.text} ${classes.proteins}`}>Healthy Proteins Group: 0 / {HD?.bmr * 25 / 100} Kcal</DialogContentText>
                        <Container>
                            <Grid container justify='flex-start'>
                                {
                                    proteinsArray?.map((k) => (
                                        <>
                                            <Grid item container justify='flex-start' alignItems='center' xs={12} md={5} style={{ paddingBottom: 20 }}>
                                                <Grid item xs={12} md={3}>
                                                    <Avatar src={k.img} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Typography variant="subtitle1">{k.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="subtitle1">{k.calories} Kcal</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item container xs={12} md={7} justify='center' alignItems='stretch' style={{ paddingTop: 2 }}>
                                                <Grid item xs={12} md={12}>
                                                    <Button onClick={(e) => {

                                                        let index = proteinsArray.indexOf(k);
                                                        if (index != -1) {
                                                            proteinsArray.splice(index, 1);
                                                            setFlag(!flag);
                                                        }

                                                    }}><Tooltip title="delete"><DeleteIcon fontSize='default' /></Tooltip></Button>
                                                </Grid>
                                            </Grid>
                                        </>
                                    ))
                                }
                            </Grid>
                            <Grid container justify="flex-start" alignItems="center" spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="subtitle1">set up time to eat proteins:</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardTimePicker label="Start Time" value={dietData.Proteins.start} onChange={(e) => setDietData({ ...dietData, Proteins: { start: e } })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardTimePicker label="End Time" value={dietData.Proteins.end} onChange={(e) => setDietData({ ...dietData, Proteins: { recipes: grainsArray, start: dietData.Proteins.start, end: e } })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        </Container>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" variant='contained' color='primary' onClick={handleSubmit}>Create</Button>
                    <Button variant='contained' onClick={handleClose} color="secondary">Close</Button>
                </DialogActions>
            </Dialog>
        </Container >
    )
}

export default Dietmodel;