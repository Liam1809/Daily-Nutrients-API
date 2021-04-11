import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'date-fns';
import { Container, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Select, Avatar, Typography, Tooltip, Grid, Divider } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles.js';

const ok = [
    {
        title: '1',
        img: '11',
        calories: '111'
    },
    {
        title: '2',
        img: '22',
        calories: '222'
    }
];
const ok1 = [
    {
        title: '3',
        img: '33',
        calories: '333'
    },
    {
        title: '4',
        img: '44',
        calories: '444'
    }
];
const ok2 = [
    {
        title: '5',
        img: '55',
        calories: '555'
    },
    {
        title: '6',
        img: '66',
        calories: '666'
    }
];
const ok3 = [
    {
        title: '7',
        img: '77',
        calories: '777'
    },
    {
        title: '8',
        img: '88',
        calories: '888'
    }
];

const Dietmodel = ({ BMR }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [flag, setFlag] = useState(false);
    const [vegies, setVegies] = useState({ recipes: [{ title: '', img: '', calories: '' }], start: new Date(), end: new Date() });
    const [fruits, setFruits] = useState({ recipes: [{ title: '', img: '', calories: '' }], start: new Date(), end: new Date() });
    const [grains, setGrains] = useState({ recipes: [{ title: '', img: '', calories: '' }], start: new Date(), end: new Date() });
    const [proteins, setProteins] = useState({ recipes: [{ title: '', img: '', calories: '' }], start: new Date(), end: new Date() });
    const [dietData, setDietData] = useState({ Vegetables: vegies, Fruits: fruits, Grains: grains, Proteins: proteins });

    useEffect(() => {

    }, [ok]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const clickme = (e) => {
        console.log(vegies);
    }


    const deletene = (value, e) => {
        let index = ok.indexOf(value);
        ok.splice(index, 1);
    }
    return (
        <Container>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Calories:0/{BMR}Kcal</Button>
            <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
                <DialogTitle>Total Calories:0/{BMR}Kcal</DialogTitle>
                <DialogContent>
                    <form noValidate>
                        <DialogContentText >Vegetales Group Recipes</DialogContentText>
                        <Container>
                            <Grid container justify='flex-start'>
                                {
                                    ok.map((k) => (
                                        <>
                                            <Grid item container justify='flex-start' alignItems='baseline' xs={12} md={5} style={{ paddingBottom: 20 }}>
                                                <Grid item xs={12} md={3}>
                                                    <Avatar>{k.img}</Avatar>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="h6">{k.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="h6">{k.calories}</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item container xs={12} md={7} justify='center' alignItems='stretch' style={{ paddingTop: 2 }}>
                                                <Grid item xs={12} md={12}>
                                                    <Button onClick={(e) => {

                                                        let index = ok.indexOf(k);
                                                        if (index != -1) {
                                                            ok.splice(index, 1);
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
                                        <TimePicker label="Start Time" value={vegies.start} onChange={(e) => setVegies({ ...vegies, recipes: ok, start: e })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <TimePicker label="End Time" value={vegies.end} onChange={(e) => setVegies({ ...vegies, end: e })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        </Container>
                        <Divider style={{ margin: '20px 2px' }} />
                        <DialogContentText>Fruits Group Recipes</DialogContentText>
                        <Container>
                            <Grid container justify='flex-start'>
                                {
                                    ok1.map((k) => (
                                        <>
                                            <Grid item container justify='flex-start' alignItems='baseline' xs={12} md={5} style={{ paddingBottom: 20 }}>
                                                <Grid item xs={12} md={3}>
                                                    <Avatar>{k.img}</Avatar>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="h6">{k.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="h6">{k.calories}</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item container xs={12} md={7} justify='center' alignItems='stretch' style={{ paddingTop: 2 }}>
                                                <Grid item xs={12} md={12}>
                                                    <Button onClick={(e) => {

                                                        let index = ok1.indexOf(k);
                                                        if (index != -1) {
                                                            ok1.splice(index, 1);
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
                                        <TimePicker label="Start Time" value={fruits.start} onChange={(e) => setFruits({ ...fruits, recipes: ok1, start: e })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <TimePicker label="End Time" value={fruits.end} onChange={(e) => setFruits({ ...fruits, end: e })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        </Container>
                        <Divider style={{ margin: '20px 2px' }} />
                        <DialogContentText>Whole Grains Group Recipes</DialogContentText>
                        <Container>
                            <Grid container justify='flex-start'>
                                {
                                    ok2.map((k) => (
                                        <>
                                            <Grid item container justify='flex-start' alignItems='baseline' xs={12} md={5} style={{ paddingBottom: 20 }}>
                                                <Grid item xs={12} md={3}>
                                                    <Avatar>{k.img}</Avatar>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="h6">{k.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="h6">{k.calories}</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item container xs={12} md={7} justify='center' alignItems='stretch' style={{ paddingTop: 2 }}>
                                                <Grid item xs={12} md={12}>
                                                    <Button onClick={(e) => {

                                                        let index = ok2.indexOf(k);
                                                        if (index != -1) {
                                                            ok2.splice(index, 1);
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
                                        <TimePicker label="Start Time" value={grains.start} onChange={(e) => setGrains({ ...grains, recipes: ok2, start: e })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <TimePicker label="End Time" value={grains.end} onChange={(e) => setGrains({ ...grains, end: e })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        </Container>
                        <Divider style={{ margin: '20px 2px' }} />
                        <DialogContentText>Healthy Proteins Group Recipes</DialogContentText>
                        <Container>
                            <Grid container justify='flex-start'>
                                {
                                    ok3.map((k) => (
                                        <>
                                            <Grid item container justify='flex-start' alignItems='baseline' xs={12} md={5} style={{ paddingBottom: 20 }}>
                                                <Grid item xs={12} md={3}>
                                                    <Avatar>{k.img}</Avatar>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="h6">{k.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="h6">{k.calories}</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item container xs={12} md={7} justify='center' alignItems='stretch' style={{ paddingTop: 2 }}>
                                                <Grid item xs={12} md={12}>
                                                    <Button onClick={(e) => {

                                                        let index = ok3.indexOf(k);
                                                        if (index != -1) {
                                                            ok3.splice(index, 1);
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
                                        <TimePicker label="Start Time" value={proteins.start} onChange={(e) => setProteins({ ...proteins, recipes: ok3, start: e })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <TimePicker label="End Time" value={proteins.end} onChange={(e) => setProteins({ ...proteins, end: e })} />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        </Container>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='primary' onClick={clickme}>Create</Button>
                    <Button variant='contained' onClick={handleClose} color="secondary">Close</Button>
                </DialogActions>
            </Dialog>
        </Container >
    )
}

export default Dietmodel;