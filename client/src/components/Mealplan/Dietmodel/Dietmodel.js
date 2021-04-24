import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'date-fns';
import { Container, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Select, Avatar, Typography, Grid, Divider, Tooltip } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles.js';
import moment from 'moment';
import { setSnackBar } from '../../../actions/snackBar.js';
import { getDietPost, createDietPost } from '../../../actions/diet.js';
import { CREATE } from '../../../constants/constantTypes.js';
import { getHD } from '../../../actions/healthDetail.js';

const Dietmodel = ({ HD, user, setMainFlag, veggiesArray, setVeggiesArray, totalVeggies, setTotalVeggies, fruitsArray, setFruitsArray, totalFruits, setTotalFruits, grainsArray, setGrainsArray, totalGrains, setTotalGrains, proteinsArray, setProteinsArray, totalProteins, setTotalProteins }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [flag, setFlag] = useState(false);
    const [newFlag, setNewFlag] = useState(false);
    const initial = { recipes: [{ title: '', img: '', calories: '', serving_qty: '' }], start: new Date(), end: new Date() };
    const [dietData, setDietData] = useState({ Vegetables: initial, Fruits: initial, Grains: initial, Proteins: initial });

    useEffect(() => {
        dispatch(getDietPost());
    }, []);

    const DBDietPost = useSelector((state) => state.diets.filter((diet) => diet.ID === user?.userInfo?._id || diet.ID === user?.userInfo?.googleId));
    // console.log(DBDietPost);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setDietData({ Vegetables: initial, Fruits: initial, Grains: initial, Proteins: initial });
        setOpen(false);
    };

    // dispatch to create model
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (dietData.Vegetables.recipes[0].title == "") {
            dispatch(setSnackBar(true, "error", "PLEASE ADD PRODUCTS OR SET TIME BEFORE CREATE MODEL"));
        } else {
            // constraint user to create one post per day
            const today = new Date();
            const post = DBDietPost.find((post) => moment(post?.createdAt).format("L") === moment(today).format("L"));

            // console.log(post);

            if (post) {
                dispatch(setSnackBar(true, "error", "DIET PLAN CREATED FOR TODAY"));
            } else {
                console.log(dietData);
                dispatch(createDietPost(dietData));
                setVeggiesArray([]);
                setFruitsArray([]);
                setGrainsArray([]);
                setProteinsArray([]);
                setMainFlag(true);
            }
        }
    };

    return (
        <Container>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Total Calories: {HD?.bmr} Kcal</Button>
            <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
                <DialogTitle>Total Calories: {HD?.bmr} Kcal</DialogTitle>
                <DialogContent>
                    <form noValidate onSubmit={handleSubmit}>
                        <DialogContentText className={`${classes.text} ${classes.vegies}`}>Vegetales Group: {totalVeggies} / {HD?.bmr * 30 / 100} Kcal</DialogContentText>
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
                                                            let total = 0;
                                                            // console.log(veggiesArray);
                                                            veggiesArray.map((item) => total += item.calories);
                                                            setTotalVeggies(total);
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
                        <DialogContentText className={`${classes.text} ${classes.fruits}`}>Fruits Group: {totalFruits} / {HD?.bmr * 20 / 100} Kcal</DialogContentText>
                        <Container>
                            <Grid container justify='flex-start'>
                                {
                                    fruitsArray?.map((k) => (
                                        <>
                                            <Grid item container justify='flex-start' alignItems='center' xs={12} md={5} style={{ paddingBottom: 20 }}>
                                                <Grid item xs={12} md={3}>
                                                    <Avatar src={k.img} />
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="subtitle1">{k.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="subtitle1">{k.serving_qty} units</Typography>
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
                                                            let total = 0;
                                                            // console.log(fruitsArray);
                                                            fruitsArray.map((item) => total += item.calories);
                                                            setTotalFruits(total);
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
                        <DialogContentText className={`${classes.text} ${classes.grains}`}>Whole Grains Group: {totalGrains} / {HD?.bmr * 25 / 100} Kcal</DialogContentText>
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
                                                            let total = 0;
                                                            // console.log(grainsArray);
                                                            grainsArray.map((item) => total += item.calories);
                                                            setTotalGrains(total);
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
                        <DialogContentText className={`${classes.text} ${classes.proteins}`}>Healthy Proteins Group: {totalProteins} / {HD?.bmr * 25 / 100} Kcal</DialogContentText>
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
                                                            let total = 0;
                                                            // console.log(proteinsArray);
                                                            proteinsArray.map((item) => total += item.calories);
                                                            setTotalProteins(total);
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
                                        <KeyboardTimePicker label="End Time" value={dietData.Proteins.end} onChange={(e) => setDietData({ ...dietData, Proteins: { recipes: proteinsArray, start: dietData.Proteins.start, end: e } })} />
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