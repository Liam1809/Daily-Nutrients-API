import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer, Tooltip, List, Divider, ListItem, ListItemIcon, ListItemText, Avatar } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Home, Dashboard, MealPlan, Recipes, Signin, Signout } from '../../../constants/constantTypes.js';
import useStyles from './styles.js';
import doctor from '../../../image/doctor.png';

const DrawerNav = () => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false });
    const [user, setUser] = useState(false);



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
            case Signin:
                return '/auth';
            case Signout:
                return '/';
            default:
                return '/';
        }
    };
    // toggle signin signout
    const clear = () => {
        setUser((prevUser) => !prevUser);
        setState({ 'right': true });
    }


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
            case Signin:
                return <VpnKeyIcon fontSize='large' className={classes.setColor} />
            case Signout:
                return <ExitToAppIcon fontSize='large' className={classes.setColor} />
            case 'User':
                return <AccountCircleIcon fontSize='large' className={classes.setColor} />
            default:
                return;
        }
    }

    const list = (anchor) => (
        <div
            className={classes.list}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            {
                user ? (
                    <>
                        <List>
                            <ListItem button component={Link} to={navigation(Dashboard)} onClick={toggleDrawer(anchor, false)}>
                                <ListItemIcon>
                                    <Avatar className={`${classes.purple} ${classes.img}`} alt='doctor' src={doctor}>L</Avatar>
                                    {/* <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
                                </ListItemIcon>
                                <ListItemText primary={'Liam Ha'} className={classes.text} />
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            {[Home, Dashboard, MealPlan, Recipes].map((text) => (
                                <ListItem button key={text} component={Link} to={navigation(text)} onClick={toggleDrawer(anchor, false)}>
                                    <ListItemIcon>{checkIcon(text)}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </>
                ) : (
                        <List>
                            {[Home].map((text) => (
                                <ListItem button key={text} component={Link} to={navigation(text)} onClick={toggleDrawer(anchor, false)}>
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
                    <List>
                        <ListItem button component={Link} to={navigation(Signout)} onClick={clear}>
                            <ListItemIcon>{checkIcon(Signout)}</ListItemIcon>
                            <ListItemText primary={Signout} />
                        </ListItem>
                    </List>

                ) : (
                        <List>
                            <ListItem button key={Signin} component={Link} to={navigation(Signin)} onClick={clear}>
                                <ListItemIcon>{checkIcon(Signin)}</ListItemIcon>
                                <ListItemText primary={Signin} />
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
