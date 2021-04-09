import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, CircularProgress, Container, Button, Tabs, Tab, Paper, AppBar, TextField, Typography, Divider } from '@material-ui/core';
import Foodcard from './Foodcard/Foodcard.js';
import useStyles from './styles.js';
import Carousel from 'react-elastic-carousel';
import SearchIcon from '@material-ui/icons/Search';

import { getNutrients } from '../../../actions/rawProduct.js';
import { getRecipesByIngredients } from '../../../actions/recipesIngredients.js';
import { setSnackBar } from '../../../actions/snackBar.js';
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

                <div>
                    {children}
                </div>
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


const Foodcards = ({ user }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [value, setValue] = useState(0);

    const [searchWord1, setSearchWord1] = useState("");
    const [recipesWord1, setRecipesWord1] = useState([]);

    const [searchWord2, setSearchWord2] = useState("");
    const [searchWord3, setSearchWord3] = useState("");
    const [searchWord4, setSearchWord4] = useState("");

    const [currentArray, setCurrentArray] = useState([]);
    const [recipesFound, setRecipesFound] = useState([]);

    const [countIngredients, setCountIngredients] = useState(0);

    const HD = useSelector((state) => user ? state.healthDetails.find((h) => h.userID === user?.userInfo?._id || h.googleId === user?.userInfo?._id) : null);

    useEffect(() => {
        if (value == 0) {
            setTimeout(() => dispatch(setSnackBar(true, "info", "RECOMMEND SELECTING MORE THAN 2 VEGETABLES")), 1000);

        } else if (value == 1) {
            setTimeout(() => dispatch(setSnackBar(true, "info", "RECOMMEND SELECTING MORE THAN 2 FRUITS")), 1000);
        } else if (value == 2) {
            setTimeout(() => dispatch(setSnackBar(true, "info", "RECOMMEND SELECTING NO MORE THAN 1 GRAIN")), 1000);
        } else if (value == 3) {
            setTimeout(() => dispatch(setSnackBar(true, "info", "RECOMMEND SELECTING NO MORE THAN 2 PROTEINS")), 1000);
        }
    }, [value]);

    let bP = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    const handleChangeSearch1 = async (e) => {
        setSearchWord1(e.target.value);
    };
    const handleChangeSearch2 = async (e) => {
        setSearchWord2(e.target.value);
    };
    const handleChangeSearch3 = async (e) => {
        setSearchWord3(e.target.value);
    };
    const handleChangeSearch4 = async (e) => {
        setSearchWord4(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchWord1 == "") {
            dispatch(setSnackBar(true, "error", "PLEASE SEARCH SOMETHING"));
        } else {
            // console.log(searchWord1);
            // console.log(getNutrients("4", searchWord1));
            getNutrients("4", searchWord1).then((data) => setRecipesWord1(data));
            setSearchWord1("");
        }
    };

    const stringConcentation1 = (arr) => {
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


    const handlleRecipes = (e) => {
        e.preventDefault();
        if (currentArray.length == 0) {
            dispatch(setSnackBar(true, "error", "PLEASE CHOOSE ANY INGREDIENTS BEFORE GENERATE RECIPES"));
        } else {
            console.log(currentArray);
            let meno = "";
            currentArray.map((value) => meno += value.replace(" ", "%20") + ',+');
            console.log(meno)
            let arrne = [];
            getRecipesByIngredients(meno);
            // console.log(arrne);
            // setRecipesFound(arrne);
        }
    }
    const clear = () => {
        setCountIngredients(0);
        setCurrentArray([]);
        window.location.reload();
    }

    const handleModel = (e) => {
        e.preventDefault();
        dispatch(setSnackBar(true, "error", "CANNOT ADD EMPTY RECIPES TO MODEL"));
    }
    return (
        <Container className={classes.mainContainer}>
            <div>{HD?.bmr}</div>
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
                            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                                <Grid container justify='center' alignItems='flex-start' spacing={1}>
                                    <Grid item xs={12} md={5}>
                                        <TextField name="searchWord1" type='text' variant="outlined" label="Search for ingredients, ex: carrot, tomato,..." fullWidth value={searchWord1} onChange={handleChangeSearch1} />
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                        <Button variant='contained' color="primary" size='large' type="submit" style={{ padding: '15px 30px' }}><SearchIcon /></Button>
                                    </Grid>
                                </Grid>
                            </form>

                            <Divider style={{ margin: '20px 0' }} />
                        </Container>
                        <div>
                            <Typography className={`${classes.text} ${classes.text2} ${classes.text21}`}>Raw Food Products</Typography>
                            <Carousel breakPoints={bP}>
                                {
                                    recipesWord1?.length ? (recipesWord1.map((cardi) => (
                                        <div
                                            key={cardi.id}>
                                            <Foodcard cardi={cardi} currentArray={currentArray} setCurrentArray={setCurrentArray} countIngredients={countIngredients} setCountIngredients={setCountIngredients} />
                                        </div>
                                    ))) : (Vegetables.map((cardi) => (
                                        <div
                                            key={cardi.id}>
                                            <Foodcard cardi={cardi} currentArray={currentArray} setCurrentArray={setCurrentArray} countIngredients={countIngredients} setCountIngredients={setCountIngredients} />
                                        </div>
                                    )))
                                }
                            </Carousel>
                            <Container>
                                <Grid container justify='flex-end' alignItems='center' spacing={3}>
                                    <Grid item>
                                        <Typography variant="h6">{countIngredients}&nbsp;Ingredients</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color='secondary' size='large' fullWidth onClick={clear}>Reset</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color='primary' size='large' fullWidth onClick={handlleRecipes}>Find Recipes</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        <div>
                            <Divider style={{ margin: '20px 0' }} />
                            <Typography className={`${classes.text} ${classes.text3} ${classes.text31}`}>Recipes With Chosen Ingredients</Typography>
                            {recipesFound?.length ? (
                                <Carousel breakPoints={bP}>
                                    {
                                        recipesFound.map((cardi) => (
                                            <div
                                                key={cardi.id}>
                                                <Foodcard cardi={cardi} />
                                            </div>
                                        ))
                                    }
                                </Carousel>) : null

                            }
                            <Container>
                                <Grid container justify='flex-end'>
                                    <Grid item>
                                        <Button variant="contained" color='secondary' size='large' fullWidth onClick={handleModel}>Add to Model</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Container className={classes.secondContainer}>
                        <Container>
                            <TextField type="text" variant="outlined" label="Search" fullWidth className={classes.searchBar} onChange={handleChangeSearch2} />
                            <Divider style={{ margin: '20px 0' }} />
                        </Container>
                        <div>
                            <Typography className={`${classes.text} ${classes.text2} ${classes.text22}`}>Raw Food Products</Typography>
                            {!Fruits.length ? <CircularProgress /> : (<Carousel breakPoints={bP}>
                                {
                                    Fruits.filter((cardi) => {
                                        if (searchWord2 == "") {
                                            return cardi
                                        } else if (cardi.name.toLowerCase().includes(searchWord2.toLowerCase())) {
                                            return cardi
                                        }
                                    }).map((cardi) => (
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
                            <TextField type="text" variant="outlined" label="Search" fullWidth className={classes.searchBar} onChange={handleChangeSearch3} />
                            <Divider style={{ margin: '20px 0' }} />
                        </Container>
                        <div>
                            <Typography className={`${classes.text} ${classes.text2} ${classes.text23}`}>Raw Food Products</Typography>
                            {!Grains.length ? <CircularProgress /> : (
                                <Carousel breakPoints={bP}>
                                    {
                                        Grains.filter((cardi) => {
                                            if (searchWord3 == "") {
                                                return cardi
                                            } else if (cardi.name.toLowerCase().includes(searchWord3.toLowerCase())) {
                                                return cardi
                                            }
                                        }).map((cardi) => (
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
                            <TextField type="text" variant="outlined" label="Search" fullWidth className={classes.searchBar} onChange={handleChangeSearch4} />
                            <Divider style={{ margin: '20px 0' }} />
                        </Container>
                        <div>
                            <Typography className={`${classes.text} ${classes.text2} ${classes.text24}`}>Raw Food Products</Typography>
                            {!Proteins.length ? <CircularProgress /> : (<Carousel breakPoints={bP}>
                                {
                                    Proteins.filter((cardi) => {
                                        if (searchWord4 == "") {
                                            return cardi
                                        } else if (cardi.name.toLowerCase().includes(searchWord4.toLowerCase())) {
                                            return cardi
                                        }
                                    }).map((cardi) => (
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
        </Container >
    )
}

export default Foodcards;
