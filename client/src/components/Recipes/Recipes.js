import React, { useState } from 'react';
import { Container, Grow, Grid, Typography, Divider, TextField, Button, MenuItem } from '@material-ui/core';

import useStyles from './styles.js';
import { getRecipesSearch } from '../../actions/recipesIngredients.js';
import { RecipesArr } from '../Mealplan/Foodcards/Data/defaultData.js';
import RecipesCard from './RecipesCard/RecipesCard.js';

const Recipes = () => {
    const classes = useStyles();
    const [searchData, setSearchData] = useState({ search: '', region: '', typeDish: '', min: '', max: '' });
    const [recipesArray, setRecipesArray] = useState([{}]);
    const [flag, setFlag] = useState(false);

    const user = JSON.parse(localStorage.getItem('userProfile'));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchData);
        getRecipesSearch(searchData).then((data) => setRecipesArray(data));
        setFlag(true);
    };

    const clear = (e) => {
        e.preventDefault();
        setFlag(false);
        setSearchData({ search: '', region: '', typeDish: '', min: '', max: '' });
        setRecipesArray([]);
    };

    const onChange = (e) => setSearchData({ ...searchData, [e.target.name]: e.target.value });
    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Typography variant="h4" style={{ padding: '10px 0px 0px 50px' }}>Searching for Recipes</Typography>
                <Divider style={{ margin: 20 }} />
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Grid container justify='center' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField name='search' variant='outlined' label='Search For Recipes' fullWidth value={searchData.search} onChange={onChange} />
                            <Container style={{ padding: 20 }}>
                                <Grid container justify='center' alignItems='center' spacing={3}>
                                    <Grid item xs={12} md={3}>
                                        <TextField name="region" variant="outlined" label="Region" value={searchData.region} onChange={onChange} fullWidth select>
                                            <MenuItem value="African">African</MenuItem>
                                            <MenuItem value="American">American</MenuItem>
                                            <MenuItem value="Chinese">Chinese</MenuItem>
                                            <MenuItem value="European">European</MenuItem>
                                            <MenuItem value="French">French</MenuItem>
                                            <MenuItem value="German">German</MenuItem>
                                            <MenuItem value="Greek">Greek</MenuItem>
                                            <MenuItem value="Indian">Indian</MenuItem>
                                            <MenuItem value="Irish">Irish</MenuItem>
                                            <MenuItem value="Italian">Italian</MenuItem>
                                            <MenuItem value="Japanese">Japanese</MenuItem>
                                            <MenuItem value="Jewish">Jewish</MenuItem>
                                            <MenuItem value="Korean">Korean</MenuItem>
                                            <MenuItem value="Mexican">Mexican</MenuItem>
                                            <MenuItem value="Nordic">Nordic</MenuItem>
                                            <MenuItem value="Southern">Southern</MenuItem>
                                            <MenuItem value="Spanish">Spanish</MenuItem>
                                            <MenuItem value="Thai">Thai</MenuItem>
                                            <MenuItem value="Vietnamese">Vietnamese</MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <TextField name="typeDish" variant="outlined" label="Type" value={searchData.typeDish} onChange={onChange} fullWidth select>
                                            <MenuItem value="main course">Main Course</MenuItem>
                                            <MenuItem value="side dish">Side Dish</MenuItem>
                                            <MenuItem value="dessert">Dessert</MenuItem>
                                            <MenuItem value="appetizer">Appetizer</MenuItem>
                                            <MenuItem value="salad">Salad</MenuItem>
                                            <MenuItem value="bread">Bread</MenuItem>
                                            <MenuItem value="breakfast">Breakfast</MenuItem>
                                            <MenuItem value="soup">Soup</MenuItem>
                                            <MenuItem value="drink">Drink</MenuItem>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <TextField name='min' label='Min Calories' fullWidth variant='outlined' value={searchData.min} onChange={onChange} />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <TextField name='max' label='Max Calories' fullWidth variant='outlined' value={searchData.max} onChange={onChange} />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ paddingRight: 10 }}>
                                    <Button variant='contained' color='primary' size='large' style={{ padding: '15px 20px' }} type='submit'>Search</Button>
                                </div>
                                <div>
                                    <Button variant='contained' color='secondary' size='large' style={{ padding: '15px 20px' }} onClick={clear} >Reset</Button>
                                </div>
                            </div>
                        </Grid>
                        <Divider style={{ width: '80%', marginBottom: 30 }} />
                    </Grid>
                </form>
                <Container style={{ padding: 20 }}>
                    <Grid container justify='flex-start' alignItems='center' spacing={3}>
                        {
                            !flag ? (
                                RecipesArr?.map((item) => (
                                    <Grid item key={item.id} xs={12} md={4}>
                                        <RecipesCard item={item} />
                                    </Grid>
                                ))
                            ) : (
                                recipesArray?.map((item) => (
                                    <Grid item key={item.id} xs={12} md={4}>
                                        <RecipesCard item={item} />
                                    </Grid>
                                ))
                            )
                        }
                    </Grid>
                </Container>
            </Container>
        </Grow >
    );
}

export default Recipes;
