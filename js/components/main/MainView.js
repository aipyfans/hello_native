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
        title: 'MainView',
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

                <Button onPress={() => this.toOther("Sign")} title="签到"/>

                <View style={{height:8}}/>

                <Button onPress={() => this.toOther("Profile")} title="个人资料"/>

                <View style={{height:8}}/>

                <Button onPress={() => this.toOther("Community")} title="社区"/>

                <View style={{height:8}}/>

                <Button onPress={() => this.toOther("Feedback")} title="意见反馈"/>

                <View style={{height:8}}/>

                <Button onPress={() => this.toOther("District")} title="我的小区"/>

                <View style={{height: 8}}/>

                <Button onPress={() => this.toOther("Posting")} title="发帖"/>

                <View style={{height: 8}}/>

                <Button onPress={() => this.toOther("Contact")} title="通讯录"/>

            </View>

        );
    }

}


function mapStateToProps(state) {

    return {}

}

export default connect(mapStateToProps)(MainView);