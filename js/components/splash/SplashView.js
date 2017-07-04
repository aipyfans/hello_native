/**
 * Created by william on 17-2-23.
 * 闪屏欢迎页面.
 */
import React, {Component}from 'react';
import {View, Text} from 'react-native';

import { NavigationActions } from 'react-navigation'

export default class SplashView extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor() {
        super();
        this.state = {
            hello: 'world'
        }
    }


    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.navigation.dispatch({type:'Login'});
        }, 2000);
    }


    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);
    }


    render() {

        let {theme} = this.props.screenProps;

        return (
            <View style={[theme.bg, theme.splash_root]}>
                <Text style={theme.s1c3}>William, Dream...</Text>
                <Text style={theme.s1c3}>为了梦, 追梦...</Text>
            </View>
        );
    }

}
