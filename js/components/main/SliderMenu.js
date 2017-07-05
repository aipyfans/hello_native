/**
 * Created by william on 17-2-23.
 * 闪屏欢迎页面.
 */
import React, {Component}from 'react';
import {View, Image} from 'react-native';
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
                <Image style={theme.sm_avatar} source={{uri:avatarUrl}} />
                <DrawerItems {...this.props} />
            </View>
        );
    }

}
