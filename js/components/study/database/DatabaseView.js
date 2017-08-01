'use strict';

import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Realm from 'realm';
import {StudentSchema} from './StudentSchema';

/**
 *
 */
export default class DatabaseView extends Component {

    id = '521';

    // obj = {id: '521', name: 'William', sex: 'boy', age: 32, grade: '18'};
    obj = {"id": "521", "name": "William", "sex": "boy", "age": 32, "grade": "18"};

    static navigationOptions = {
        title: 'DatabaseView',
    };

    constructor(props) {
        super(props);

        this.state = {
            dataStrs: "init",
        };

        this.realm = new Realm({schema: [StudentSchema]});
    }

    componentWillMount() {

    }

    add() {
        try {
            this.realm.write(() => {
                this.realm.create(StudentSchema.name, this.obj, true);
                this.query();
            });
        } catch (e) {
            alert(e.message);
        }
    }

    delete() {
        try {
            this.realm.write(() => {
                let student = this.realm.objectForPrimaryKey(StudentSchema.name, this.id);
                if (student) this.realm.delete(student);
                this.query();
            });
        } catch (e) {
            alert(e.message);
        }
    }

    update() {
        try {
            this.realm.write(() => {
                let student = this.realm.objectForPrimaryKey(StudentSchema.name, this.id);
                if(student){
                    student.name = 'Dream';
                    this.query();
                }
            });
        } catch (e) {
            alert(e.message);
        }
    }

    query() {
        let student = this.realm.objectForPrimaryKey(StudentSchema.name, this.id);
        if (student) {
            this.setState({
                dataStrs: JSON.stringify(student)
            });
        } else {
            this.setState({
                dataStrs: 'init'
            });
        }
    }

    render() {
        let {theme} = this.props.screenProps;
        return (
            <View style={[theme.bg]}>

                <View style={{flex: 9}}>
                    <Text>{this.state.dataStrs}</Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>

                    <TouchableOpacity
                        onPress={this.add.bind(this)}
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
                        <Text>add</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.delete.bind(this)}
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
                        <Text>delete</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.update.bind(this)}
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
                        <Text>update</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.query.bind(this)}
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
                        <Text>query</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
            ;
    }

}
