import React from 'react';
import { TextField, Button, Typography, Paper, ButtonGroup } from '@material-ui/core';

import useStyles from './styles.js';

const Form = () => {
    const classes = useStyles();

    const handleSubmit = () => { };

    const onChange = () => { };

    const clear = () => { };
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Update Your Health Details</Typography>
                <TextField name="weight" variant="outlined" label="Weight" fullWidth />
                <TextField name="height" variant="outlined" label="Height" fullWidth />
                <Button className={classes.buttonSubmit} variant='contained' color="primary" size='large' fullWidth type="submit">Submit</Button>
                <Button variant='contained' color="secondary" size='large' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
