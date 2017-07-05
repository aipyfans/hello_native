'use strict';

import React, {Component}from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * ActionBar.
 * Created by william on 17-2-14.
 */
export default class MainBar extends Component {


    static propTypes = {
        ...View.propTypes,
        title: React.PropTypes.string,
    }

    constructor(props) {
        super(props)

    }

    onMenu() {
        this.props.navigation.navigate('DrawerOpen'); // 打开抽屉导航器
    }

    render() {

        const {theme} = this.props.screenProps;

        return (
            <View style={[theme.ab_bar, theme.rowV]}>
                <TouchableOpacity style={[theme.ab_menu]} onPress={this.onMenu.bind(this)}>
                    <Icon name="ios-menu" size={32} color='white'/>
                </TouchableOpacity>
                <Text style={[theme.flex_one,theme.s1c1]}>{this.props.title}</Text>
            </View>

        );
    }

}

