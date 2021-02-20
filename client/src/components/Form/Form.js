import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, ButtonGroup } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createHD, updateHD } from '../../actions/healthDetail.js';

import useStyles from './styles.js';

const Form = ({ currentId, setCurrentId }) => {
    const [hdData, setHDData] = useState({ name: '', age: '', sex: '', weight: '', height: '' });
    const dispatch = useDispatch();
    const HD = useSelector((state) => currentId ? state.healthDetails.find((h) => h._id === currentId) : null);

    const classes = useStyles();

    useEffect(() => {
        if (HD) setHDData(HD);
    }, [HD]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(currentId);

        if (currentId === 0) {
            dispatch(createHD(hdData));
            clear();
        } else {
            dispatch(updateHD(currentId, hdData));
            clear();
        }
    };
    const handleDisabled = () => {
        // neu aarray > 1 thi disable
    };
    // first create HD -> disable submit button
    // click update HD -> undisable submit button, 'submit'  -> 'update',  disable submit button

    const onChange = (e) => setHDData({ ...hdData, [e.target.name]: e.target.value });

    const clear = () => {
        setCurrentId(0);
        setHDData({ name: '', age: '', sex: '', weight: '', height: '' });
    };
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Update' : 'Fill in'} Your Health Details</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={hdData.name} onChange={onChange} />
                <TextField name="age" variant="outlined" label="Age" fullWidth value={hdData.age} onChange={onChange} />
                <TextField name="sex" variant="outlined" label="Sex" fullWidth value={hdData.sex} onChange={onChange} />
                <TextField name="weight" variant="outlined" label="Weight" fullWidth value={hdData.weight} onChange={onChange} />
                <TextField name="height" variant="outlined" label="Height" fullWidth value={hdData.height} onChange={onChange} />
                <Button
                    className={classes.buttonSubmit}
                    variant='contained'
                    color="primary"
                    size='large'
                    fullWidth
                    type="submit"
                >Submit</Button>
                <Button variant='contained' color="secondary" size='large' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
