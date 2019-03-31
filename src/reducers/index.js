import { combineReducers } from 'redux';
import users from './users';
import event from './event';
import wisata from './wisata';
import auth from './auth';
import history from './history';

export default combineReducers({
    event,
    users,
    wisata,
    auth,
    history
});