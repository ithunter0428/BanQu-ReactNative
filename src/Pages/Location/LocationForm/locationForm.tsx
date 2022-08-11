import React, { Component, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Button, TouchableOpacity, TextInput } from 'react-native'
import { useRoute } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

export default function LocationForm({ navigation }) {
    const route = useRoute();
    useEffect(() => {
        // Geolocation.getCurrentPosition(
        //     (position) => {

        //         Geocoder.init("AIzaSyBSWy092eLYdH8YjjhmlkC8F1s9oa3Hs2A");
        //         Geocoder.from(position.coords.latitude, position.coords.longitude)
        //             .then(json => {
        //             })
        //     }
        // )        
    })

    return (
        <View style={styles.container}>

            <View style={styles.border}></View>
            <Text style={styles.label}>Pick Your Location</Text>
            <TextInput style={styles.input} selectionColor='#FF7C24'></TextInput>
            <View style={{ flexDirection: 'row', justifyContent:'flex-start' }}>
                <Image style={styles.img} source={require('../../../../assets/location.png')} />
                <Text style={styles.text}>Current Location</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 21,
        flex: 1,
        backgroundColor: '#212027'
    },


    input: {
        marginBottom: 27,
        marginTop: 9,
        backgroundColor: "rgba(255,255,255,0.1)",
        height: 54,
        borderRadius: 12,
        color: '#FFFFFF',
        // selectionColor: '#FF7C24',
        // caretColor: '#FF7C24',
        fontSize: 18,
        paddingLeft: 15,
    },

    img: {
        width: 23.8,
        height: 34,
    },

    text: {
        // fontWeight: '500',
        fontSize: 20,
        lineHeight: 26,
        marginLeft: 15.2,
        color: '#FFFFFF'

    },

    label: {
        // fontWeight: 500,
        fontSize: 20,
        lineHeight: 26,
        marginTop: 25,
        color: '#FFFFFF'
    },

    border: {
        width: 28.5,
        borderBottomWidth: 3,
        borderColor: '#FFFFFF',
        alignSelf: 'center',
        marginTop: 12,
        borderRadius: 1
    },

})