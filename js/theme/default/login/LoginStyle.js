/**
 * Created by william on 2017-05-19.
 * 局部的Style.
 */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    login_root: {
        flex: 1,
        paddingHorizontal: 46,
        justifyContent: 'center',
        alignItems: 'center',
    },

    login_row: {
        height: 56,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray'
    },

    login_ti: {
        flex: 1,
    },

    login_btn: {
        height: 36,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#2691f9',
        borderWidth: 1,
        alignSelf: 'stretch',
        borderRadius: 2,
        backgroundColor: '#2691f9',
        marginTop: 24,
    },

    login_btn_text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16,
    },

});