/**
 * Created by william on 17-2-23.
 * React Native Base.
 */
import React, {Component}from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const routes = [
    {routeName: 'William'},
    {routeName: 'Dream'},
];

export default class TabBase extends Component {

    static navigationOptions = ({navigation, screenProps}) => {
        let {theme} = screenProps;
        return {
            tabBarLabel: 'Base',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-analytics-outline"
                    style={[theme.tb_icon]}
                    color={tintColor}/>
            ),
            showIcon: true,
        }
    };

    constructor(props) {
        super(props);
    }


    render() {
        let {theme} = this.props.screenProps;
        return (
            <ScrollView style={[theme.bg]}>
                {
                    routes.map((route) => {
                        return (
                            <TouchableOpacity activeOpacity={0.75} style={theme.btn}>
                                <Text style={{color:'white'}}>{route.routeName}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        );
    }

}
