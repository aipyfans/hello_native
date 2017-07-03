import React, {Component}from 'react';
import {BackAndroid} from 'react-native';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import {addNavigationHelpers} from 'react-navigation';

// 导航路由器
import AppNavigator from './AppNavigator';

// 主题
import Theme from '../theme/default/index';


class AppWithNavigationState extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        navigator: PropTypes.object.isRequired,
    };

    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            const {dispatch, navigator} = this.props;
            if (navigator.index === 0) {
                return false;
            }
            dispatch({type: 'Back'})
            return true;
        });
    }


    componentWillUnMount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    render() {
        return (

            <AppNavigator
                screenProps={{theme: Theme}}
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.navigator,
                })}
            />

        );
    }

}


function mapStateToProps(state) {

    const {navigator} = state;

    return {
        navigator: navigator
    }

}

export default connect(mapStateToProps)(AppWithNavigationState);
