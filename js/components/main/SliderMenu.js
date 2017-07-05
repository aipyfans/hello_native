/**
 * Created by william on 17-2-23.
 * 闪屏欢迎页面.
 */
import React, {Component}from 'react';
import {View, Image,Text} from 'react-native';
import {DrawerItems} from 'react-navigation';

const avatarUrl = "https://raw.githubusercontent.com/li-jun-bo/DreamImage/master/Avatar/avatar_one.jpg";

export default class SliderMenu extends Component {


    constructor() {
        super();
    }


    render() {
        let {theme} = this.props.screenProps;

        return (
            <View style={[theme.flex_one, theme.bg]}>
                <View style={[theme.columnV]}>
                    <Image style={theme.sm_avatar} source={{uri:avatarUrl}} />
                    <Text style={{marginBottom:8}}>静水流深</Text>
                </View>
                <DrawerItems {...this.props} />
            </View>
        );
    }

}
