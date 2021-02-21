import React, { useState, Fragment } from 'react';
import { Button, Drawer, Tooltip, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import useStyles from './styles.js';

const DrawerNav = () => {
    const classes = useStyles();
    const [state, setState] = useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown') return;

        setState({ [anchor]: open });
    };

    const navigation = () => {
        // navigate pages
    };

    const checkIcon = (text) => {
        switch (text) {
            case 'Home':
                return <HomeIcon fontSize='large' className={classes.setColor} />
            case 'DashBoard':
                return <DashboardIcon fontSize='large' className={classes.setColor} />
            case 'Meal Plan':
                return <KitchenIcon fontSize='large' className={classes.setColor} />
            case 'Recipes':
                return <FastfoodIcon fontSize='large' className={classes.setColor} />
            case 'Sign Out':
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
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon>{checkIcon('User')}</ListItemIcon>
                    <ListItemText primary={'Liam Ha'} />
                </ListItem>

            </List>
            <Divider />
            <List>
                {['Home', 'DashBoard', 'Meal Plan', 'Recipes'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{checkIcon(text)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Sign Out'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{checkIcon(text)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div >
    );

    return (
        <div>
            <Fragment key={'left'}>
                <Button onClick={toggleDrawer('left', true)}>
                    <Tooltip title="Navigation">
                        <DehazeIcon fontSize='large' />
                    </Tooltip>
                </Button>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                </Drawer>
            </Fragment>

        </div>
    );
}

export default DrawerNav;
