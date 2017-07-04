'use strict';

import React, {Component}from 'react';
import {View, Button,} from 'react-native';

import * as Actions from '../../actions';
import {connect} from 'react-redux';


/**
 * 用户登录页面.
 * Created by william on 17-2-14.
 */
class MainView extends Component {


    static navigationOptions = {
        title: 'Dream',
    }


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

                <View style={{height:8}}/>

                <Button onPress={() => this.toOther("Study")} title="学习"/>


            </View>

        );
    }

}


function mapStateToProps(state) {

    return {}

}

export default connect(mapStateToProps)(MainView);