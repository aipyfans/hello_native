'use strict';

import React, {Component}from 'react';
import {View, Button,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';


/**
 * TODO.
 * Created by william on 17-2-14.
 */
class StudyView extends Component {


    static navigationOptions = {
        drawerLabel: '学习',
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-compass" size={24} color={tintColor} />
        ),
    };

    constructor(props) {
        super(props)
        this.toOther = this.toOther.bind(this);
    }

    toOther(action) {
        this.props.navigation.navigate(action)
    }

    render() {

        const {theme} = this.props.screenProps;

        return (
            <View style={[theme.bg]}>

            </View>

        );
    }

}


function mapStateToProps(state) {

    return {}

}

export default connect(mapStateToProps)(StudyView);