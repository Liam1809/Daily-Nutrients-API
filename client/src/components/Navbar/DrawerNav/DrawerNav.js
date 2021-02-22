import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button, Drawer, Tooltip, List, Divider, ListItem, ListItemIcon, ListItemText, Avatar } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Home, Dashboard, MealPlan, Recipes, AUTH, LOGOUT } from '../../../constants/constantTypes.js';
import useStyles from './styles.js';

const DrawerNav = () => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false });
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userProfile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('userProfile')));
    }, [location]);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown') return;

        setState({ [anchor]: open });
    };

    // navigate pages
    const navigation = (text) => {
        switch (text) {
            case Home:
                return '/';
            case Dashboard:
                return '/dashboard';
            case MealPlan:
                return '/mealplan';
            case Recipes:
                return '/recipes';
            case AUTH:
            case LOGOUT:
                return '/authentication';
            default:
                return '/';
        }
    };
    // toggle AUTH LOGOUT
    const logout = () => {
        dispatch({ type: LOGOUT });
        history.push('/authentication');
        setUser(null);
    };

    // check icon show
    const checkIcon = (text) => {
        switch (text) {
            case Home:
                return <HomeIcon fontSize='large' className={classes.setColor} />
            case Dashboard:
                return <DashboardIcon fontSize='large' className={classes.setColor} />
            case MealPlan:
                return <KitchenIcon fontSize='large' className={classes.setColor} />
            case Recipes:
                return <FastfoodIcon fontSize='large' className={classes.setColor} />
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
                        <List>
                            {[Home, Dashboard, MealPlan, Recipes].map((text) => (
                                <ListItem button key={text} component={Link} to={navigation(text)}>
                                    <ListItemIcon>{checkIcon(text)}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </>
                ) : (
                        <List>
                            {[Home].map((text) => (
                                <ListItem button key={text} component={Link} to={navigation(text)}>
                                    <ListItemIcon>{checkIcon(text)}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
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
                        <DehazeIcon fontSize='large' className={classes.icon} />
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
