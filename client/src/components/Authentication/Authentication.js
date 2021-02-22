import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { GoogleLogin } from 'react-google-login';

// 
import Input from './Input/Input.js';
import Icon from './Icon/Icon.js';

import useStyles from './styles.js';

const Authentication = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setisSignUp] = useState(false);
    const classes = useStyles();

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };
    const switchMode = () => {
        setisSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const googleSuccess = (res) => {
        console.log(res);
    };

    const googleFailure = () => {
        console.log("Google Sign in is not gooodd");
    };
    return (

        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={isSignUp ? classes.avatar1 : classes.avatar2}>
                    <LockIcon />
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp ? (
                                <>
                                    <Input name="firstName" label="First Name" onChange={handleChange} half />
                                    <Input name="lastName" label="Last Name" onChange={handleChange} half />
                                </>
                            ) : null
                        }
                        <Input name="email" label="Email Address" onChange={handleChange} type="email" />
                        <Input name="password" label="Password" onChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? 'text' : 'password'} />
                        {
                            isSignUp ? (
                                <Input name='confirmPassword' label="Repeat Password" onChange={handleChange} handleShowPassword={handleShowPassword} type='password' />
                            ) : null
                        }
                    </Grid>
                    <Button className={classes.submit} type="submit" fullWidth variant='contained' color={isSignUp ? 'primary' : 'secondary'}>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                    <GoogleLogin
                        clientId=""
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color={isSignUp ? 'secondary' : 'primary'}
                                fullWidth
                                variant="contained"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                            >
                                {isSignUp ? "GOOGLE SIGN IN" : "GOOGLE SIGN UP"}
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Authentication;
