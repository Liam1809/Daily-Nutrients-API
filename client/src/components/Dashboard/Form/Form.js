import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, ButtonGroup, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createHD, updateHD } from '../../../actions/healthDetail.js'

import useStyles from './styles.js';

const Form = ({ user, currentId, setCurrentId }) => {
    const [hdData, setHDData] = useState({ age: '', sex: '', weight: '', height: '' });
    const dispatch = useDispatch();
    const classes = useStyles();

    const HD = useSelector((state) => currentId ? state.healthDetails.find((h) => h._id === currentId) : null);

    const H = useSelector((state) => user ? state.healthDetails.find((h) => h.userID === user?.userInfo?._id || h.userID === user?.userInfo?.googleId) : null);


    useEffect(() => {
        if (HD) setHDData(HD);
    }, [HD]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId === 0) {
            dispatch(createHD(hdData));
        } else {
            dispatch(updateHD(currentId, hdData));
        }
        clear();
    };

    const onChange = (e) => setHDData({ ...hdData, [e.target.name]: e.target.value });

    const clear = () => {
        setCurrentId(0);
        setHDData({ age: '', sex: '', weight: '', height: '' });
    };
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Update' : 'Fill in'} Your Health Details</Typography>
                {
                    currentId ? (
                        <>
                            <TextField name="age" variant="outlined" label="Age" fullWidth value={hdData.age} onChange={onChange} />
                            <TextField name="sex" disabled variant="outlined" label="Gender" fullWidth value={hdData.sex} onChange={onChange} select>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </TextField>

                            <TextField name="weight" variant="outlined" label="Weight: kg" fullWidth value={hdData.weight} onChange={onChange} />
                            <TextField name="height" variant="outlined" label="Height: cm" fullWidth value={hdData.height} onChange={onChange} />
                        </>
                    ) : (
                        <>
                            <TextField name="age" variant="outlined" label="Age" fullWidth value={hdData.age} onChange={onChange} />
                            <TextField name="sex" variant="outlined" label="Gender" fullWidth value={hdData.sex} onChange={onChange} select>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </TextField>
                            <TextField name="weight" variant="outlined" label="Weight: kg" fullWidth value={hdData.weight} onChange={onChange} />
                            <TextField name="height" variant="outlined" label="Height: cm" fullWidth value={hdData.height} onChange={onChange} />
                        </>
                    )
                }
                {
                    !H ? (
                        <Button className={classes.buttonSubmit} variant='contained' color="primary" size='large' fullWidth type="submit" >Create</Button>
                    ) : null
                }
                {
                    currentId !== 0 ? (
                        <Button className={classes.buttonSubmit} variant='contained' color="primary" size='large' fullWidth type="submit" >Update</Button>
                    ) : null
                }
                <Button variant='contained' color="secondary" size='large' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
