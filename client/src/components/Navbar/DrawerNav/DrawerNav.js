// import hook
import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import { setSnackBar } from '../../../actions/snackBar.js';
// import tools & icons from material ui
import { Button, Drawer, Tooltip, List, Divider, ListItem, ListItemIcon, ListItemText, Avatar } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

// import constants, styles, image
import { AdminDB, Home, Dashboard, MealPlan, Recipes, Schedule, AUTH, LOGOUT } from '../../../constants/constantTypes.js';
import useStyles from './styles.js';

const DrawerNav = () => {

    const classes = useStyles();

    const [state, setState] = useState({ right: false });
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userProfile')));
    // console.log(user);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        // auto log out
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            // Custom token
            if (token.length < 500) {
                if (decodedToken.exp * 1000 < new Date().getTime()) {
                    logout();
                }
                // Google Token
            } else {
                // testing auto logout
                // decodedToken.exp * 1000 - 2000000: expire in 25mins
                // decodedToken.exp * 1000 - 3000000: expire in 10mins
                // decodedToken.exp * 1000 - 3500000: expire in a few mins

                if (decodedToken.exp * 1000 - 2000000 < new Date().getTime()) {
                    logout();
                }
            }
        }
        setUser(JSON.parse(localStorage.getItem('userProfile')));
    }, [location]);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown') return;

        setState({ [anchor]: open });
    };

    // navigate pages
    const navigation = (text) => {
        switch (text) {
            case AdminDB:
                return '/admin';
            case Home:
                return '/';
            case Dashboard:
                return '/dashboard';
            case MealPlan:
                return '/mealplan';
            case Recipes:
                return '/recipes';
            case Schedule:
                return '/schedule';
            case AUTH:
            case LOGOUT:
                return '/authentication';
            default:
                return;
        }
    };
    // toggle AUTH LOGOUT
    const logout = () => {
        dispatch({ type: LOGOUT });
        history.push('/authentication');
        dispatch(setSnackBar(true, "success", "SUCCESSFULLY LOGGED OUT"));
        setUser(null);
    };

    // check icon show
    const checkIcon = (text) => {
        switch (text) {
            case AdminDB:
                return <SupervisorAccountIcon fontSize='large' className={classes.setColor} />
            case Home:
                return <HomeIcon fontSize='large' className={classes.setColor} />
            case Dashboard:
                return <DashboardIcon fontSize='large' className={classes.setColor} />
            case MealPlan:
                return <KitchenIcon fontSize='large' className={classes.setColor} />
            case Recipes:
                return <FastfoodIcon fontSize='large' className={classes.setColor} />
            case Schedule:
                return <ScheduleIcon fontSize='large' className={classes.setColor} />
            case AUTH:
                return <VpnKeyIcon fontSize='large' className={classes.setColor} />
            case LOGOUT:
                return <ExitToAppIcon fontSize='large' className={classes.setColor} />
            case 'User':
                return <AccountCircleIcon fontSize='large' className={classes.setColor} />
            default:
                return;
        }
    }

    const list = (anchor) => (
        <div
            onClick={toggleDrawer(anchor, false)}
            className={classes.list}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {
                user ? (
                    <>
                        <List>
                            <ListItem button component={Link} to={navigation(Dashboard)}>
                                <ListItemIcon>
                                    <Avatar className={`${classes.purple} ${classes.img}`} alt={user?.userInfo.name} src={user?.userInfo.imageUrl}>{user?.userInfo.name.charAt(0)}</Avatar>
                                </ListItemIcon>
                                <ListItemText primary={user?.userInfo.name} className={classes.text} />
                            </ListItem>
                        </List>
                        <Divider />
                        {
                            user?.userInfo?.role === "USER" ? (
                                <>
                                    <List>
                                        {[Home, Dashboard, MealPlan, Recipes, Schedule].map((text) => (
                                            <ListItem button key={text} component={Link} to={navigation(text)}>
                                                <ListItemIcon>{checkIcon(text)}</ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </>
                            ) : (
                                <>
                                    <List>
                                        {[Home, AdminDB].map((text) => (
                                            <ListItem button key={text} component={Link} to={navigation(text)}>
                                                <ListItemIcon>{checkIcon(text)}</ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </>
                            )
                        }
                    </>
                ) : (
                    <>
                        <List>
                            {[Home].map((text) => (
                                <ListItem button key={text} component={Link} to={navigation(text)}>
                                    <ListItemIcon>{checkIcon(text)}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </>
                )
            }
            <Divider />
            {
                user ? (
                    // LOGOUT BUTTON
                    <List>
                        <ListItem button component={Link} to={navigation(LOGOUT)} onClick={logout}>
                            <ListItemIcon>{checkIcon(LOGOUT)}</ListItemIcon>
                            <ListItemText primary={LOGOUT} />
                        </ListItem>
                    </List>

                ) : (
                    // SIGN IN BUTTON
                    <List>
                        <ListItem button key={AUTH} component={Link} to={navigation(AUTH)}>
                            <ListItemIcon>{checkIcon(AUTH)}</ListItemIcon>
                            <ListItemText primary={AUTH} />
                        </ListItem>
                    </List>
                )
            }
        </div >
    );

    return (
        <div>
            <Fragment key={'right'}>
                <Button onClick={toggleDrawer('right', true)}>
                    <Tooltip title="Navigation">
                        <DehazeIcon className={classes.fontIcon} />

                    </Tooltip>
                </Button>
                <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                    {list('right')}
                    <footer className={classes.footer}>Copyright &copy; 2021 by Lam Ha.</footer>
                </Drawer>
            </Fragment>
        </div>
    );
}

export default DrawerNav;
