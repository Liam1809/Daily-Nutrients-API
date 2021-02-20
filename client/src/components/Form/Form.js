import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, ButtonGroup } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { createHD } from '../../actions/healthDetail.js';

import useStyles from './styles.js';

const Form = ({ currentId, setCurrentId }) => {
    const [hdData, setHDData] = useState({ name: '', age: '', sex: '', weight: '', height: '' });
    const dispatch = useDispatch();

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createHD(hdData));
    };

    const onChange = (e) => setHDData({ ...hdData, [e.target.name]: e.target.value });

    const clear = () => {
        setHDData({ name: '', age: '', sex: '', weight: '', height: '' });
    };
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Update Your Health Details</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={hdData.name} onChange={onChange} />
                <TextField name="age" variant="outlined" label="Age" fullWidth value={hdData.age} onChange={onChange} />
                <TextField name="sex" variant="outlined" label="Sex" fullWidth value={hdData.sex} onChange={onChange} />
                <TextField name="weight" variant="outlined" label="Weight" fullWidth value={hdData.weight} onChange={onChange} />
                <TextField name="height" variant="outlined" label="Height" fullWidth value={hdData.height} onChange={onChange} />
                <Button className={classes.buttonSubmit} variant='contained' color="primary" size='large' fullWidth type="submit">Submit</Button>
                <Button variant='contained' color="secondary" size='large' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
