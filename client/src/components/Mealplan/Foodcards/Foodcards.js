import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, CircularProgress, Container, Button, Tabs, Tab, Paper, AppBar, TextField, Typography, Divider } from '@material-ui/core';
import Foodcard from './Foodcard/Foodcard.js';
import useStyles from './styles.js';
import Carousel from 'react-elastic-carousel';
import SearchIcon from '@material-ui/icons/Search';

import { getItems, getNutrients } from '../../../actions/rawProduct.js';

import { Vegetables, Fruits, Grains, Proteins } from './defaultData.js';
import "./styles.css";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            style={{ width: '100%' }}
        >
            {value === index && (

                <Container>
                    {children}
                </Container>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const Foodcards = () => {
    const [value, setValue] = useState(0);
    const [current, setCurrent] = useState(0);
    const classes = useStyles();

    let bP = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const stringConcentation = (arr) => {
        let string = "";
        for (let i = 0; i < arr.length; i++) {
            if (i >= arr.length - 1) {
                string += arr[i].name;
            } else {
                string += arr[i].name + ", ";
            }
        }
        return string;
    }

    const h = (e) => {
        e.preventDefault();
        getNutrients(stringConcentation(Proteins));
    };

    return (
        <Container className={classes.mainContainer}>
            <Typography variant="h4" className={`${classes.text} ${classes.text1}`}>Welcome to Meal Plan</Typography>
            <Divider />
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs"
                    className={classes.tabs}
                >
                    <Tab label="Vegetables" {...a11yProps(0)} style={{ background: '#98ddca' }} />
                    <Tab label="Fruits" {...a11yProps(1)} style={{ background: '#d5ecc2' }} />
                    <Tab label="Whole Grains" {...a11yProps(2)} style={{ background: '#ffd3b4' }} />
                    <Tab label="Healthy Proteins" {...a11yProps(3)} style={{ background: '#ffaaa7' }} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Container className={classes.secondContainer}>
                        <Container>
                            <TextField name="age" variant="outlined" label="Search" fullWidth className={classes.searchBar} />
                            <Divider style={{ margin: '20px 0' }} />
                        </Container>
                        <div>
                            <Typography className={`${classes.text} ${classes.text2} ${classes.text21}`}>Raw Food Products</Typography>
                            {!Vegetables.length ? <CircularProgress /> : (<Carousel breakPoints={bP}>
                                {
                                    Vegetables.map((cardi) => (
                                        <div
                                            key={cardi.id}>

                                            <Foodcard cardi={cardi} />
                                        </div>
                                    ))
                                }
                            </Carousel>
                            )}
                            <Container>
                                <Grid container justify='flex-end'>
                                    <Grid item>
                                        <Button variant="contained" color='primary' size='large' fullWidth>Find Recipes</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        <div>
                            <Divider style={{ margin: '20px 0' }} />
                            <Typography className={`${classes.text} ${classes.text3} ${classes.text31}`}>Recipes With Chosen Ingredients</Typography>
                            {!Vegetables.length ? <CircularProgress /> : (
                                <Carousel breakPoints={bP}>
                                    {
                                        Vegetables.map((cardi) => (
                                            <div
                                                key={cardi.id}>

                                                <Foodcard cardi={cardi} />
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            )}
                            <Container>
                                <Grid container justify='flex-end'>
                                    <Grid item>
                                        <Button variant="contained" color='secondary' size='large' fullWidth>Add to Model</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Container className={classes.secondContainer}>
                        <Container>
                            <TextField name="age" variant="outlined" label="Search" fullWidth className={classes.searchBar} />
                            <Divider style={{ margin: '20px 0' }} />
                        </Container>
                        <div>
                            <Typography className={`${classes.text} ${classes.text2} ${classes.text22}`}>Raw Food Products</Typography>
                            {!Fruits.length ? <CircularProgress /> : (<Carousel breakPoints={bP}>
                                {
                                    Fruits.map((cardi) => (
                                        <div
                                            key={cardi.id}>

                                            <Foodcard cardi={cardi} />
                                        </div>
                                    ))
                                }
                            </Carousel>
                            )}
                            <Container>
                                <Grid container justify='flex-end'>
                                    <Grid item>
                                        <Button variant="contained" color='primary' size='large' fullWidth>Find Recipes</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        <div>
                            <Divider style={{ margin: '20px 0' }} />
                            <Typography className={`${classes.text} ${classes.text3} ${classes.text32}`}>Recipes With Chosen Ingredients</Typography>
                            {!Fruits.length ? <CircularProgress /> : (
                                <Carousel breakPoints={bP}>
                                    {
                                        Fruits.map((cardi) => (
                                            <div
                                                key={cardi.id}>

                                                <Foodcard cardi={cardi} />
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            )}
                            <Container>
                                <Grid container justify='flex-end'>
                                    <Grid item>
                                        <Button variant="contained" color='secondary' size='large' fullWidth>Add to Model</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Container className={classes.secondContainer}>
                        <Container>
                            <TextField name="age" variant="outlined" label="Search" fullWidth className={classes.searchBar} />
                            <Divider style={{ margin: '20px 0' }} />
                        </Container>
                        <div>
                            <Typography className={`${classes.text} ${classes.text2} ${classes.text23}`}>Raw Food Products</Typography>
                            {!Grains.length ? <CircularProgress /> : (<Carousel breakPoints={bP}>
                                {
                                    Grains.map((cardi) => (
                                        <div
                                            key={cardi.id}>

                                            <Foodcard cardi={cardi} />
                                        </div>
                                    ))
                                }
                            </Carousel>
                            )}
                            <Container>
                                <Grid container justify='flex-end'>
                                    <Grid item>
                                        <Button variant="contained" color='primary' size='large' fullWidth>Find Recipes</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        <div>
                            <Divider style={{ margin: '20px 0' }} />
                            <Typography className={`${classes.text} ${classes.text3} ${classes.text33}`}>Recipes With Chosen Ingredients</Typography>
                            {!Grains.length ? <CircularProgress /> : (
                                <Carousel breakPoints={bP}>
                                    {
                                        Grains.map((cardi) => (
                                            <div
                                                key={cardi.id}>

                                                <Foodcard cardi={cardi} />
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            )}
                            <Container>
                                <Grid container justify='flex-end'>
                                    <Grid item>
                                        <Button variant="contained" color='secondary' size='large' fullWidth>Add to Model</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Container className={classes.secondContainer}>
                        <Container>
                            <TextField name="age" variant="outlined" label="Search" fullWidth className={classes.searchBar} />
                            <Divider style={{ margin: '20px 0' }} />
                        </Container>
                        <div>
                            <Typography className={`${classes.text} ${classes.text2} ${classes.text24}`}>Raw Food Products</Typography>
                            {!Proteins.length ? <CircularProgress /> : (<Carousel breakPoints={bP}>
                                {
                                    Proteins.map((cardi) => (
                                        <div
                                            key={cardi.id}>

                                            <Foodcard cardi={cardi} />
                                        </div>
                                    ))
                                }
                            </Carousel>
                            )}
                            <Container>
                                <Grid container justify='flex-end'>
                                    <Grid item>
                                        <Button variant="contained" color='primary' size='large' fullWidth>Find Recipes</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        <div>
                            <Divider style={{ margin: '20px 0' }} />
                            <Typography className={`${classes.text} ${classes.text3} ${classes.text34}`}>Recipes With Chosen Ingredients</Typography>
                            {!Proteins.length ? <CircularProgress /> : (
                                <Carousel breakPoints={bP}>
                                    {
                                        Proteins.map((cardi) => (
                                            <div
                                                key={cardi.id}>

                                                <Foodcard cardi={cardi} />
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            )}
                            <Container>
                                <Grid container justify='flex-end'>
                                    <Grid item>
                                        <Button variant="contained" color='secondary' size='large' fullWidth>Add to Model</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Container>
                </TabPanel>
            </div>
            <Divider />
            <Button onClick={getItems}>Clickme</Button>
            <Button onClick={h}>Clickme2</Button>

        </Container >
    )
}

export default Foodcards;
