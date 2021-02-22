import { combineReducers } from 'redux';

import healthDetails from './healthDetails.js';
import authentication from './authentication.js';

export default combineReducers({ healthDetails, authentication });
