/**
 * Created by william on 5/25/17.
 */

import {NavigationActions} from 'react-navigation';
import AppNavigator from '../navigators/AppNavigator';

const mainAction = AppNavigator.router.getActionForPathAndParams('Main');
const mainNavState = AppNavigator.router.getStateForAction(mainAction);

const loginAction = AppNavigator.router.getActionForPathAndParams('Login');
const loginNavState = AppNavigator.router.getStateForAction(loginAction, mainNavState);

const splashAction = AppNavigator.router.getActionForPathAndParams('Splash');
const splashNavState = AppNavigator.router.getStateForAction(splashAction, loginNavState);


export default function navigator(state = splashNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
            break;
        case 'Main':
            nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}




