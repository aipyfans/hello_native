'use strict';

import React, {Component}from 'react';
import {View, WebView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';


/**
 * 博客.
 * Created by william on 17-2-14.
 */
class BlogView extends Component {


    static navigationOptions = {
        drawerLabel: '博客',
        drawerIcon: ({tintColor}) => (
            <Icon name="ios-globe" size={24} color={tintColor}/>
        ),
    };

    constructor(props) {
        super(props);
    }

    render() {

        const {theme} = this.props.screenProps;

        return (
            <WebView style={[theme.bg]}
                     automaticallyAdjustContentInsets={false}
                     source={{uri: "http://blog.lijunbo.com/"}}
                     javaScriptEnabled={true}
                     domStorageEnabled={true}
                     decelerationRate="normal"
                     startInLoadingState={true}
            />
        );
    }

}


function mapStateToProps(state) {

    return {}

}

export default connect(mapStateToProps)(BlogView);