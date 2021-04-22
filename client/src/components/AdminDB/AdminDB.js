import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grow, Typography, Grid, Divider, TableRow, TableCell, Paper, TableContainer, Table, TableHead, TableBody, Button, Tooltip } from '@material-ui/core';
import useStyle from './styles.js';
import DeleteIcon from '@material-ui/icons/Delete';
import { getUser, deleteUser } from '../../actions/user.js';

const AdminDB = () => {
    const classes = useStyle();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('userProfile'));

    useEffect(() => {
        dispatch(getUser());
    }, []);

    const userArray = useSelector((state) => state?.USERS);

    return (
        <Grow in>
            {
                !user ? (
                    <Container className={classes.mainContainer}>
                        <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Admin Dashboard</Typography>
                        <Divider style={{ margin: 20 }} />
                        <Grid container justify="center" alignItems="center" spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5">YOU ARE NOT AUTHORIZED . . .</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                ) : (
                    user?.userInfo?.role === "USER" ? (
                        <Container className={classes.mainContainer}>
                            <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Admin Dashboard</Typography>
                            <Divider style={{ margin: 20 }} />
                            <Grid container justify="center" alignItems="center" spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h5">USER ARE NOT AUTHORIZED . . .</Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    ) : (
                        <Container className={classes.mainContainer}>
                            <Typography variant="h4" style={{ padding: '10px 0px 10px 50px' }}>Welcome to Admin Dashboard</Typography>
                            <Divider style={{ margin: 20 }} />
                            <Typography variant="h5" style={{ padding: '10px 0px 10px 50px' }}>Welcome Admin</Typography>
                            <Divider style={{ margin: '20px 20px 20px 50px', width: '200px' }} />
                            <Grid container justify="center" alignItems="center" spacing={3}>
                                <Grid item xs={12} md={8} sm={6}>
                                    <div style={{ height: '100%', width: '100%' }}>
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="center">Number</TableCell>
                                                        <TableCell align="left">Name</TableCell>
                                                        <TableCell align="left">Email</TableCell>
                                                        <TableCell align="left">Role</TableCell>
                                                        <TableCell align="center">Delete</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {userArray?.map((element) => (
                                                        <TableRow key={element._id}>
                                                            <TableCell component="th" scope="row" align="center">{userArray.indexOf(element) + 1}</TableCell>
                                                            <TableCell align="left">{element.name}</TableCell>
                                                            <TableCell align="left">{element.email}</TableCell>
                                                            <TableCell align="left">{element.role}</TableCell>
                                                            <TableCell align="center">
                                                                {
                                                                    element.role === "USER" && (
                                                                        <Button onClick={() => dispatch(deleteUser(element._id))}><Tooltip title="delete"><DeleteIcon fontSize='default' color='primary' /></Tooltip></Button>
                                                                    )
                                                                }
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    )
                )
            }
        </Grow>

    )
}

export default AdminDB;
