import { combineReducers } from 'redux';

import healthDetails from './healthDetails.js';
import authentication from './authentication.js';
import snackbar from './snackbar.js';

export default combineReducers({ healthDetails, authentication, snackbar });
