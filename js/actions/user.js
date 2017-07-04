'use strict';

import BodyWrapper from '../config/body'
import * as Types from './types';
const Api = require('../config/api')

/**
 * 登录接口.
 * @param params
 * @returns {function(*, *)}
 */
export function loginAction(params) {


    return (dispatch) => {

        let bodyParams = new BodyWrapper();
        bodyParams.body = {name: params.username, password: "pwd"};
        bodyParams.secure = {pwd: params.password};

        dispatch(actionDoing());

        Api.post(Api.Uri.LOGIN, bodyParams)
            .then((respone) => {
                return respone.json();
            })
            .then((result) => {
                if ('200' == result.code && result.body.accessToken) {
                    dispatch(actionDone(true, result));
                } else {
                    dispatch(actionDone(false, null));
                    alert(result.message);
                }
            })
            .catch((err) => {
                dispatch(actionDone(false, null));
                alert(err.message);
            });
    }

}



function actionDoing() {
    return {
        type: Types.LOGIN_ING,
    }
}

function actionDone(isSuccess, userInfo) {
    return {
        type: Types.LOGIN_DONE,
        isSuccess: isSuccess,
        userInfo: userInfo
    }
}