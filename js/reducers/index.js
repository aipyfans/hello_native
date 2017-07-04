'use strict';

import {combineReducers} from 'redux';

import navigator from './navigator';
import user from './user';

/**
 * 合并reducer.
 * @type {Reducer<S>}
 */
const reducers = combineReducers(
    {
        navigator, user,
    }
);

export default reducers;
