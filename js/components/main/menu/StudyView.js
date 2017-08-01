'use strict';

import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

const routes = [
    {componentName: 'Node Events', routeName: 'Event'},
    {componentName: 'Database Realm', routeName: 'Database'},
];

/**
 * TODO.
 * Created by william on 17-2-14.
 */
class StudyView extends Component {


    static navigationOptions = {
        drawerLabel: '学习',
        drawerIcon: ({tintColor}) => (
            <Icon name="ios-compass" size={24} color={tintColor}/>
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
        let {theme} = this.props.screenProps;
        return (
            <ScrollView style={[theme.bg]}>
                {
                    routes.map((route) => {
                        return (
                            <TouchableOpacity
                                style={theme.btn}
                                activeOpacity={0.75}
                                onPress={() => this.toOther(route.routeName)}>
                                <Text style={{color: 'white'}}>{route.componentName}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        );
    }

}


function mapStateToProps(state) {

    return {}

}

export default connect(mapStateToProps)(StudyView);