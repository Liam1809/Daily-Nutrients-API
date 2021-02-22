import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Mealplan from './components/Mealplan/Mealplan.js';
import Recipes from './components/Recipes/Recipes.js';
import Authentication from './components/Authentication/Authentication.js';

const App = () => {

    return (
        // Home: /
        // Dashboard: /dashboard
        // Meal: /mealplan
        // Recipes: recipes 
        // sign in / sign out: /authentication
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/dashboard' exact component={Dashboard} />
                    <Route path='/mealplan' exact component={Mealplan} />
                    <Route path='/recipes' exact component={Recipes} />
                    <Route path='/authentication' exact component={Authentication} />
                </Switch>
            </Container >
        </BrowserRouter>
    )
}

export default App;