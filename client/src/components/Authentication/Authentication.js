import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { GoogleLogin } from 'react-google-login';

// import actions
import { signup, signin } from '../../actions/authentication.js';

// import components & constants & Styles
import Input from './Input/Input.js';
import Icon from './Icon/Icon.js';
import { AUTH } from '../../constants/constantTypes.js';
import useStyles from './styles.js';

const Authentication = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setisSignUp] = useState(false);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' })
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(formData, history));
            setisSignUp(false);
        } else {
            dispatch(signin(formData, history));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // toggle to change mode between sign up and sign in form
    const switchMode = () => {
        setisSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };

    // toggle show password in password text field
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);


    const googleSuccess = async (res) => {
        const userInfo = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: AUTH, payload: { userInfo, token } });
            history.push('/dashboard');
        } catch (error) {
            console.log(error);
        }

    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was not successful. Try Again Please.");
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
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            ) : null
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? 'text' : 'password'} />
                        {
                            isSignUp ? (
                                <Input name='confirmPassword' label="Repeat Password" handleChange={handleChange} handleShowPassword={handleShowPassword} type='password' />
                            ) : null
                        }
                    </Grid>
                    <Button className={classes.submit} type="submit" fullWidth variant='contained' color={isSignUp ? 'primary' : 'secondary'}>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                    <GoogleLogin
                        clientId="28630541311-ocrl8r6bsa51rvl0r2umdrdkq1l4i9ia.apps.googleusercontent.com"
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
                                {isSignUp ? "GOOGLE SIGN UP" : "GOOGLE SIGN IN"}
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
