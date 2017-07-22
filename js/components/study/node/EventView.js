'use strict';

import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import HelloEventEmitter from './events';

const routes = [
    {routeName: 'Node Events'},
];

/**
 * 使用方法参见如下链接.
 * http://nodejs.cn/api/events.html#events_emitter_addlistener_eventname_listener.
 * Created by william on 17-2-14.
 */
export default class EventView extends Component {


    static navigationOptions = {
        title: 'Node Events',
    };

    constructor(props) {
        super(props)
        this.state = {count: 0};
    }

    componentWillMount() {
        HelloEventEmitter.addListener('addCounter', () => {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });
        });
        HelloEventEmitter.addListener('reduceCounter', () => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount
            });
        });
    }

    render() {
        let {theme} = this.props.screenProps;
        return (
            <View style={[theme.bg, {justifyContent: 'center', alignItems: 'center'}]}>

                <Text style={{fontSize: 32, color: 'blue'}}>Count: {this.state.count}</Text>

                <TouchableOpacity
                    style={{marginTop: 80}}
                    onPress={() => {
                        HelloEventEmitter.emit('addCounter');
                    }}>
                    <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{color: 'white', fontSize: 18}}>Add</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{marginTop: 40}}
                    onPress={() => {
                        HelloEventEmitter.emit('reduceCounter');
                    }}>
                    <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{color: 'white', fontSize: 18}}>Reduce</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }

}
