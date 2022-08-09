import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Button, TouchableOpacity, TextInput } from 'react-native'
import { useRoute } from '@react-navigation/native';
import axios from 'axios'
import { BASE_URL } from '../../../Constant';

export default function BroadcastForm({ navigation}) {
    const route = useRoute();

    // Send Post to API
    const broadcastPost = () => {
        axios.post(BASE_URL + "/sendPost", route.params)
            .then(function (response) {
                if (response.data.code == 0)
                {
                    navigation.push('DashboardTrans', {...route.params, transition: true})
                }
            })
    }

    return (
        <View style={styles.container}>

            {/* Border */}
            <View style={styles.border}></View>
            
            {/* Broadcast Image */}
            <Image style={styles.img} source={require('../../../../assets/Frame.png')} />

            {/* Description */}
            <Text style={styles.text}>
                This message is going to be broadcasted out!
            </Text>

            {/* Buttons */}
            <TouchableOpacity onPress={broadcastPost}>
                <Text style={styles.button}>
                    Just do it!
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.back_button}>
                    Back
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        // Left: 21,
        backgroundColor: '#212027',
        // flex: 1,
    },

    border: {
        width: 28.5,
        borderBottomWidth: 3,
        borderColor: '#FFFFFF',
        alignSelf: 'center',
        marginTop: 12,
        borderRadius: 1
    },

    img: {
        width: 245.17,
        height: 158.58,
        alignSelf: 'center',
        marginTop: 88,
        // marginLeft: 51.17,
        marginBottom:28.62,
    },

    text: {
        width: 306,
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        // alignItems: 'stretch',
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 26,
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 33,
    },

    button: {
        backgroundColor: '#FF7C24',
        borderRadius: 12,
        paddingBottom: 19,
        paddingTop: 18,
        marginBottom: 12,
        fontSize: 18,
        fontWeight: 600,
        color: '#FFFFFF',
        textAlign: 'center',
    },

    back_button: {
        fontSize: 18,
        color: "rgba(255,255,255,0.35)",
        textAlign: 'center',
        marginBottom: 20,
    }
})