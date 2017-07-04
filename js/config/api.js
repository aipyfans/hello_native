/**
 * Created by mickey on 17-2-7.
 */
import {format as formatUrl} from 'url'
import {serverURL}  from './env';

const Uri = {
    LOGIN: '/trainer/login',
    REGISTER: '/trainer/activate',
    LOGOUT: '/trainer/logout',
}

const get = (uri, data, options) => fetchApi('get', uri, data, options)
const post = (uri, data, options) => fetchApi('post', uri, data, options)
const update = (uri, data, options) => updateApi(uri, data, options)


const fetchApi = function (method, uri, data, options) {
    data = data || {}
    options = options || {}
    if (!uri.match(/^(http(s)?:)?\/\//)) {
        uri = serverURL + uri
    }

    return fetch(method == 'get' ? uri + formatUrl({query: data}) : uri,
        {
            method: method.toUpperCase(),
            headers: {
                'Content-Type': 'application/json'
            },
            body: method == 'get' ? undefined : JSON.stringify(data)
        });
}


const updateApi = function (uri, data, options) {
    data = data || {}
    options = options || {}
    if (!uri.match(/^(http(s)?:)?\/\//)) {
        uri = serverURL + uri
    }

    return fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: data,
    });
}


export {Uri, get, post, update}