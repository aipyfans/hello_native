'use strict';

import * as Types from '../actions/types';

const initialState = {status: 'init', isSuccess: false, userInfo: null};

/**
 *
 * 用户相关.
 * @param state
 * @param action
 * @returns {{state: string, isSuccess: boolean, userInfo: null}}
 */
export default function user(state = initialState, action) {

    switch (action.type){

        case Types.LOGIN_ING:
            return Object.assign({}, state, {status:'doing',isSuccess: action.isSuccess });

        case Types.LOGIN_DONE :
            return Object.assign({}, state, {status:'done', isSuccess: action.isSuccess, userInfo: action.userInfo });

        default:
            return state;
    }

}
