import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes, { oneOfType } from 'prop-types';
import { Grid, CircularProgress, Container, Button, Tabs, Tab, Paper, AppBar, TextField, Typography, Divider, Tooltip } from '@material-ui/core';
import Foodcard from './Foodcard/Foodcard.js';
import useStyles from './styles.js';
import Carousel from 'react-elastic-carousel';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';

import { getNutrients } from '../../../actions/rawProduct.js';
import { getRecipesByIngredients } from '../../../actions/recipesIngredients.js';
import { setSnackBar } from '../../../actions/snackBar.js';
import { Vegetables, Fruits, Grains, Proteins } from './Data/defaultData.js';
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


const Foodcards = ({ HD, user, mainFlag, setMainFlag, setVeggiesArray, setTotalVeggies, setFruitsArray, setTotalFruits, setGrainsArray, setTotalGrains, setProteinsArray, setTotalProteins }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [value, setValue] = useState(0);
    // flag to display recipes
    const [flag, setFlag] = useState(false);
    // flag to reset chosen ingredients/ products
    const [flag1, setFlag1] = useState(false);

    const one = "1";
    const two = "2";
    const three = "3";
    const four = "4";
    const text = "food";
    const text1 = "fruit";
    // search
    const [searchWord1, setSearchWord1] = useState("");
    const [searchWord2, setSearchWord2] = useState("");
    const [searchWord3, setSearchWord3] = useState("");
    const [searchWord4, setSearchWord4] = useState("");

    const [recipesWord1, setRecipesWord1] = useState([]);
    const [recipesWord2, setRecipesWord2] = useState([]);
    const [recipesWord3, setRecipesWord3] = useState([]);
    const [recipesWord4, setRecipesWord4] = useState([]);


    const [currentArray, setCurrentArray] = useState([]);
    const [currentArray1, setCurrentArray1] = useState([]);

    const [recipesFound1, setRecipesFound1] = useState([]);
    const [recipesFound2, setRecipesFound2] = useState([]);
    const [recipesFound3, setRecipesFound3] = useState([]);
    const [recipesFound4, setRecipesFound4] = useState([]);

    const [countRecipes, setCountRecipes] = useState(0);
    const [countIngredients, setCountIngredients] = useState(0);


    useEffect(() => {
        if (mainFlag == true) {
            clear();
            clear1();
            setMainFlag(false);
        }
        if (value == 0) {
            clear();
            clear1();
            setTimeout(() => dispatch(setSnackBar(true, "info", "RECOMMEND SELECTING MORE THAN 2 VEGETABLES")), 1000);
        } else if (value == 1) {
            clear();
            clear1();
            setTimeout(() => dispatch(setSnackBar(true, "info", "RECOMMEND SELECTING MORE THAN 2 FRUITS")), 1000);
        } else if (value == 2) {
            clear();
            clear1();
            setTimeout(() => dispatch(setSnackBar(true, "info", "RECOMMEND SELECTING NO MORE THAN 1 GRAIN")), 1000);
        } else if (value == 3) {
            clear();
            clear1();
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

    const handleChangeSearch = (e, string) => {
        switch (string) {
            case one:
                setSearchWord1(e.target.value);
                break;
            case two:
                setSearchWord2(e.target.value);
                break;
            case three:
                setSearchWord3(e.target.value);
                break;
            case four:
                setSearchWord4(e.target.value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = (e, string1, string2) => {
        e.preventDefault();
        if (string1 == "") {
            dispatch(setSnackBar(true, "error", "PLEASE SEARCH SOMETHING"));
        } else {
            switch (string2) {
                case one: // Vegetables
                    getNutrients("4", searchWord1).then((data) => setRecipesWord1(data));
                    setSearchWord1("");
                    break;
                case two: // Fruits
                    getNutrients("3", searchWord2).then((data) => setRecipesWord2(data));
                    setSearchWord2("");
                    break;
                case three: // Grains
                    getNutrients("5", searchWord3).then((data) => setRecipesWord3(data));
                    setSearchWord3("");
                    break;
                case four: // Proteins
                    getNutrients("2", searchWord4).then((data) => setRecipesWord4(data));
                    setSearchWord4("");
                    break;
                default:
                    return;
            }
        }
    };

    const handlleRecipes = (e, string) => {
        e.preventDefault();
        if (currentArray.length == 0) {
            dispatch(setSnackBar(true, "error", "PLEASE CHOOSE ANY INGREDIENTS BEFORE GENERATE RECIPES"));
        } else {
            console.log(currentArray);
            let str = "";
            currentArray.map((value) => str += value.title.replace(" ", "%20") + ',+');
            // console.log(str);
            switch (string) {
                case one:
                    getRecipesByIngredients(str).then((data) => setRecipesFound1(data));
                    break;
                case two:
                    getRecipesByIngredients(str).then((data) => setRecipesFound2(data));
                    break;
                case three:
                    getRecipesByIngredients(str).then((data) => setRecipesFound3(data));
                    break;
                case four:
                    getRecipesByIngredients(str).then((data) => setRecipesFound4(data));
                    break;
                default:
                    return;
            }
            setFlag(false);

        }
    };

    const clear = () => {
        setRecipesWord1([]);
        setRecipesWord2([]);
        setRecipesWord3([]);
        setRecipesWord4([]);
        setCountIngredients(0);
        setCurrentArray([]);
        setFlag(false);
        setFlag1(true);
    };

    const clear1 = () => {
        setCurrentArray1([]);
        setCountRecipes(0);
        setFlag1(true);
    };

    const handleModel = (e, string) => {
        e.preventDefault();
        if (string === two) {
            // if current array of fruits products is empty
            if (currentArray.length == 0) {
                dispatch(setSnackBar(true, "error", "CANNOT ADD EMPTY PRODUCTS TO MODEL"));
            } else {
                // fruit calories
                let total1 = 0;
                currentArray.map((item) => total1 += item.calories);
                if (total1 > (HD?.bmr * 20 / 100)) {
                    dispatch(setSnackBar(true, "error", "TOTAL CALORIES REACH OVER LIMIT, PLEASE RESELECT AGAIN"));
                } else {
                    // add to model
                    console.log("GOOD TO GO");
                    setFruitsArray(currentArray);
                    setTotalFruits(total1.toFixed(2));
                }
            }
        } else {
            // if current array of recipes is empty
            if (currentArray1.length == 0) {
                dispatch(setSnackBar(true, "error", "CANNOT ADD EMPTY RECIPES TO MODEL"));
            } else {
                // Recipes Calories
                let total = 0;
                currentArray1.map((item) => total += item.calories);
                switch (string) {
                    case one:
                        if (total > (HD?.bmr * 30 / 100)) {
                            dispatch(setSnackBar(true, "error", "TOTAL CALORIES REACH OVER LIMIT, PLEASE RESELECT AGAIN"));
                        } else {
                            // add to model
                            console.log("GOOD TO GO");
                            setVeggiesArray(currentArray1);
                            setTotalVeggies(total.toFixed(2));
                        }
                        break;
                    case three:
                        if (total > (HD?.bmr * 25 / 100)) {
                            dispatch(setSnackBar(true, "error", "TOTAL CALORIES REACH OVER LIMIT, PLEASE RESELECT AGAIN"));
                        } else {
                            console.log("GOOD TO GO");
                            setGrainsArray(currentArray1);
                            setTotalGrains(total.toFixed(2));
                        }
                        break;
                    case four:
                        if (total > (HD?.bmr * 25 / 100)) {
                            dispatch(setSnackBar(true, "error", "TOTAL CALORIES REACH OVER LIMIT, PLEASE RESELECT AGAIN"));
                        } else {
                            console.log("GOOD TO GO");
                            setProteinsArray(currentArray1);
                            setTotalProteins(total.toFixed(2));
                        }
                        break;
                    default:
                        return;
                }
            }
        }
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
                            <form autoComplete="off" noValidate onSubmit={(e) => handleSubmit(e, searchWord1, one)}>
                                <Grid container justify='center' alignItems='flex-start' spacing={1}>
                                    <Grid item xs={12} md={5}>
                                        <TextField name="searchWord1" type='text' variant="outlined" label="Search for ingredients" fullWidth value={searchWord1} onChange={(e) => handleChangeSearch(e, one)} />
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
                                            <Foodcard cardi={cardi} text={text} flag1={flag1} setFlag1={setFlag1} currentArray={currentArray} setCurrentArray={setCurrentArray} countIngredients={countIngredients} setCountIngredients={setCountIngredients} />
                                        </div>
                                    ))) : (Vegetables.map((cardi) => (
                                        <div
                                            key={cardi.id}>
                                            <Foodcard cardi={cardi} text={text} flag1={flag1} setFlag1={setFlag1} currentArray={currentArray} setCurrentArray={setCurrentArray} countIngredients={countIngredients} setCountIngredients={setCountIngredients} />
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
                                        <Button variant="contained" color='primary' size='large' fullWidth onClick={(e) => handlleRecipes(e, one)}>Find Recipes</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        <div>
                            <Divider style={{ margin: '20px 0' }} />
                            <Grid container justify='space-between'>
                                <Grid item xs={12} md={11}><Typography className={`${classes.text} ${classes.text3} ${classes.text31}`}>Recipes With Chosen Ingredients</Typography></Grid>
                                <Grid item xs={12} md={1}><Button onClick={(e) => {
                                    e.preventDefault();
                                    setFlag(true);
                                    if (recipesFound1.length <= 0) dispatch(setSnackBar(true, "error", "NO RECIPES WITH THOSE INGREDIENTS"));
                                }}><Tooltip title="Refresh"><RefreshIcon fontSize='large' /></Tooltip></Button></Grid>
                            </Grid>
                            <Carousel breakPoints={bP}>
                                {
                                    flag ? (
                                        recipesFound1?.length ? (
                                            recipesFound1.map((cardi) => (
                                                <div
                                                    key={cardi.id}>
                                                    <Foodcard cardi={cardi} flag1={flag1} setFlag1={setFlag1} currentArray1={currentArray1} setCurrentArray1={setCurrentArray1} countRecipes={countRecipes} setCountRecipes={setCountRecipes} />
                                                </div>
                                            ))
                                        ) : <div></div>
                                    ) : (
                                        <div>NO RECIPES SELECTED</div>
                                    )
                                }
                            </Carousel>
                            <Container>
                                <Grid container justify='flex-end' alignItems='center' spacing={3}>
                                    <Grid item>
                                        <Typography variant="h6">{countRecipes}&nbsp;Dishes</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color='secondary' size='large' fullWidth onClick={clear1}>Reset</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color='primary' size='large' fullWidth onClick={(e) => handleModel(e, one)}>Add to Model</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Container className={classes.secondContainer}>
                        <Container>
                            <form autoComplete="off" noValidate onSubmit={(e) => handleSubmit(e, searchWord2, two)}>
                                <Grid container justify='center' alignItems='flex-start' spacing={1}>
                                    <Grid item xs={12} md={5}>
                                        <TextField name="searchWord1" type='text' variant="outlined" label="Search for ingredients" fullWidth value={searchWord2} onChange={(e) => handleChangeSearch(e, two)} />
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
                                    recipesWord2?.length ? (recipesWord2.map((cardi) => (
                                        <div
                                            key={cardi.id}>
                                            <Foodcard cardi={cardi} text={text} text1={text1} flag1={flag1} setFlag1={setFlag1} currentArray={currentArray} setCurrentArray={setCurrentArray} countIngredients={countIngredients} setCountIngredients={setCountIngredients} />
                                        </div>
                                    ))) : (Fruits.map((cardi) => (
                                        <div
                                            key={cardi.id}>
                                            <Foodcard cardi={cardi} text={text} text1={text1} flag1={flag1} setFlag1={setFlag1} currentArray={currentArray} setCurrentArray={setCurrentArray} countIngredients={countIngredients} setCountIngredients={setCountIngredients} />
                                        </div>
                                    )))
                                }
                            </Carousel>
                            <Container>
                                <Grid container justify='flex-end' alignItems='center' spacing={3}>
                                    <Grid item>
                                        <Typography variant="h6">{countIngredients}&nbsp;Fruit Types</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color='secondary' size='large' fullWidth onClick={clear}>Reset</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color='primary' size='large' fullWidth onClick={(e) => handleModel(e, two)}>Add to Model</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Container className={classes.secondContainer}>
                        <Container>
                            <form autoComplete="off" noValidate onSubmit={(e) => handleSubmit(e, searchWord3, three)}>
                                <Grid container justify='center' alignItems='flex-start' spacing={1}>
                                    <Grid item xs={12} md={5}>
                                        <TextField name="searchWord3" type='text' variant="outlined" label="Search for ingredients" fullWidth value={searchWord3} onChange={(e) => handleChangeSearch(e, three)} />
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
                                    recipesWord3?.length ? (recipesWord3.map((cardi) => (
                                        <div
                                            key={cardi.id}>
                                            <Foodcard cardi={cardi} text={text} flag1={flag1} setFlag1={setFlag1} currentArray={currentArray} setCurrentArray={setCurrentArray} countIngredients={countIngredients} setCountIngredients={setCountIngredients} />
                                        </div>
                                    ))) : (Grains.map((cardi) => (
                                        <div
                                            key={cardi.id}>
                                            <Foodcard cardi={cardi} text={text} flag1={flag1} setFlag1={setFlag1} currentArray={currentArray} setCurrentArray={setCurrentArray} countIngredients={countIngredients} setCountIngredients={setCountIngredients} />
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
                                        <Button variant="contained" color='primary' size='large' fullWidth onClick={(e) => handlleRecipes(e, three)}>Find Recipes</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        <div>
                            <Divider style={{ margin: '20px 0' }} />
                            <Grid container justify='space-between'>
                                <Grid item xs={12} md={11}><Typography className={`${classes.text} ${classes.text3} ${classes.text31}`}>Recipes With Chosen Ingredients</Typography></Grid>
                                <Grid item xs={12} md={1}><Button onClick={(e) => {
                                    e.preventDefault();
                                    setFlag(true);
                                    if (recipesFound3.length <= 0) dispatch(setSnackBar(true, "error", "NO RECIPES WITH THOSE INGREDIENTS"));
                                }}><Tooltip title="Refresh"><RefreshIcon fontSize='large' /></Tooltip></Button></Grid>
                            </Grid>
                            <Carousel breakPoints={bP}>
                                {
                                    flag ? (
                                        recipesFound3?.length ? (
                                            recipesFound3.map((cardi) => (
                                                <div
                                                    key={cardi.id}>
                                                    <Foodcard cardi={cardi} flag1={flag1} setFlag1={setFlag1} currentArray1={currentArray1} setCurrentArray1={setCurrentArray1} countRecipes={countRecipes} setCountRecipes={setCountRecipes} />
                                                </div>
                                            ))
                                        ) : null
                                    ) : (
                                        <div>NO RECIPES SELECTED</div>
                                    )
                                }
                            </Carousel>
                            <Container>
                                <Grid container justify='flex-end' alignItems='center' spacing={3}>
                                    <Grid item>
                                        <Typography variant="h6">{countRecipes}&nbsp;Dishes</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color='secondary' size='large' fullWidth onClick={clear1}>Reset</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color='primary' size='large' fullWidth onClick={(e) => handleModel(e, three)}>Add to Model</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Container className={classes.secondContainer}>
                        <Container>
                            <form autoComplete="off" noValidate onSubmit={(e) => handleSubmit(e, searchWord4, four)}>
                                <Grid container justify='center' alignItems='flex-start' spacing={1}>
                                    <Grid item xs={12} md={5}>
                                        <TextField name="searchWord4" type='text' variant="outlined" label="Search for ingredients" fullWidth value={searchWord4} onChange={(e) => handleChangeSearch(e, four)} />
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
                                    recipesWord4?.length ? (recipesWord4.map((cardi) => (
                                        <div
                                            key={cardi.id}>
                                            <Foodcard cardi={cardi} text={text} flag1={flag1} setFlag1={setFlag1} currentArray={currentArray} setCurrentArray={setCurrentArray} countIngredients={countIngredients} setCountIngredients={setCountIngredients} />
                                        </div>
                                    ))) : (Proteins.map((cardi) => (
                                        <div
                                            key={cardi.id}>
                                            <Foodcard cardi={cardi} text={text} flag1={flag1} setFlag1={setFlag1} currentArray={currentArray} setCurrentArray={setCurrentArray} countIngredients={countIngredients} setCountIngredients={setCountIngredients} />
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
                                        <Button variant="contained" color='primary' size='large' fullWidth onClick={(e) => handlleRecipes(e, four)}>Find Recipes</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        <div>
                            <Divider style={{ margin: '20px 0' }} />
                            <Grid container justify='space-between'>
                                <Grid item xs={12} md={11}><Typography className={`${classes.text} ${classes.text3} ${classes.text31}`}>Recipes With Chosen Ingredients</Typography></Grid>
                                <Grid item xs={12} md={1}><Button onClick={(e) => {
                                    e.preventDefault();
                                    setFlag(true);
                                    if (recipesFound4.length <= 0) dispatch(setSnackBar(true, "error", "NO RECIPES WITH THOSE INGREDIENTS"));
                                }}><Tooltip title="Refresh"><RefreshIcon fontSize='large' /></Tooltip></Button></Grid>
                            </Grid>
                            <Carousel breakPoints={bP}>
                                {
                                    flag ? (
                                        recipesFound4?.length ? (
                                            recipesFound4.map((cardi) => (
                                                <div
                                                    key={cardi.id}>
                                                    <Foodcard cardi={cardi} flag1={flag1} setFlag1={setFlag1} currentArray1={currentArray1} setCurrentArray1={setCurrentArray1} countRecipes={countRecipes} setCountRecipes={setCountRecipes} />
                                                </div>
                                            ))
                                        ) : null
                                    ) : (
                                        <div>NO RECIPES SELECTED</div>
                                    )
                                }
                            </Carousel>
                            <Container>
                                <Grid container justify='flex-end' alignItems='center' spacing={3}>
                                    <Grid item>
                                        <Typography variant="h6">{countRecipes}&nbsp;Dishes</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color='secondary' size='large' fullWidth onClick={clear1}>Reset</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color='primary' size='large' fullWidth onClick={(e) => handleModel(e, four)}>Add to Model</Button>
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
