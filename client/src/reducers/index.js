import { combineReducers } from 'redux';

import healthDetails from './healthDetails.js';
import authentication from './authentication.js';
import snackbar from './snackbar.js';
import diets from './diets.js';
import USERS from './user.js';

export default combineReducers({ healthDetails, authentication, snackbar, diets, USERS });

