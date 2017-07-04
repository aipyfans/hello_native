'use strict';

import {applyMiddleware, createStore} from 'redux';

import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from '../reducers';

/**
 * 配置中间件 ---> 设置Reducer ---> 创建Store.
 * @returns {Store<S>}
 */
export default function configureStore(onComplete: ?() => void) {
    const logger = createLogger();
    // const middleware = applyMiddleware(thunk, createLogger);
    const store = createStore(reducers, applyMiddleware(thunk, logger));
    return store;
}
