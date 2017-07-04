'use strict';

import React , {Component} from 'react';
import {Provider} from 'react-redux';

import configureStore from '../store/configureStore';
import AppWithNavigationState from '../navigators/AppWithNavigationState';

export default function setup(): ReactClass<{}> {

    console.disableYellowBox = true;

    class Root extends Component {

        state: {
            // isLoading: boolean;
            store: any;
        };

        constructor() {
            super();
            this.state = {
                // isLoading: true,
                store: configureStore(/*() => this.setState({isLoading: false})*/),
            };
        }

        render() {
            // if (this.state.isLoading) {
            //     return null;
            // }

            return (
                <Provider store={this.state.store}>
                    <AppWithNavigationState />
                </Provider>
            );
        }
    }

    return Root;
}

global.LOG = (...args) => {
    console.log('/------------------------------\\');
    console.log(...args);
    console.log('\\------------------------------/');
    return args[args.length - 1];
};
