import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
}));

const Dietmodel = ({ BMR }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Container>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Calories:0/{BMR}Kcal</Button>
            <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
                <DialogTitle>Vegetables:0/{BMR * 30 / 100}Kcal</DialogTitle>
                <DialogContent>
                    <DialogContentText>Vegetables Group Recipes</DialogContentText>
                    <form className={classes.form} noValidate>

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Done</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default Dietmodel;
{/* <div>Vegetables:0/{BMR * 30 / 100}Kcal</div>
            <div>Fruits:0/{BMR * 20 / 100}Kcal</div>
            <div>Whole Grains:0/{BMR * 25 / 100}Kcal</div>
            <div>Healthy Proteins:0/{BMR * 25 / 100}Kcal</div> */}