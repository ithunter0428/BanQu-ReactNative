import React, { Component, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Button, TouchableOpacity, TextInput, Animated } from 'react-native'
import { useRoute } from '@react-navigation/native';
import axios from 'axios'
import { BASE_URL } from '../../../Constant';

export default function BroadcastForm({ navigation }) {
    const route = useRoute();

    // Animation Offset
    const [animType, setAnimType] = useState(true) //Boolean Animation goes up or down
    const [borderColor, setBorderColor] = useState('#909090')

    const offsetArray:number[] = [20, 10, 15, 15, 15]
    const [offset1, setOffset1] = useState(new Animated.Value(20))
    const [offset2, setOffset2] = useState(new Animated.Value(10))
    const [offset3, setOffset3] = useState(new Animated.Value(15))
    const [offset4, setOffset4] = useState(new Animated.Value(15))
    const [offset5, setOffset5] = useState(new Animated.Value(15))
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

       // Execute Animation
       const doAnimation = () => {
        setAnimType(!animType)
        setBorderColor(animType == false ? '#909090' : '#FFFFFF')
        Animated.timing(offset1, { toValue: animType == true ? 0 : offsetArray[0], duration: 1500 }).start();
        Animated.timing(offset2, { toValue: animType == true ? 0 : offsetArray[1], duration: 1500 }).start();
        Animated.timing(offset3, { toValue: animType == true ? 0 : offsetArray[2], duration: 1500 }).start();
        Animated.timing(offset4, { toValue: animType == true ? 0 : offsetArray[3], duration: 1500 }).start();
        Animated.timing(offset5, { toValue: animType == true ? 0 : offsetArray[4], duration: 1500 }).start();
    }

    return (
        <View style={styles.container}>
            
            {/*  */}
            <Animated.View style={{ transform: [{ translateY: offset1 }] }}>
                <TouchableOpacity onPress={doAnimation}>
                    <View style={[styles.border, {borderColor: borderColor}]}></View>
                </TouchableOpacity>
            </Animated.View>

            {/* Broadcast Image */}
            <Animated.View style={{ transform: [{ translateY: offset3 }] }}>
                    <Image style={styles.img} source={require('../../../../assets/Frame.png')} />
            </Animated.View>

            {/* Description */}
            <Animated.View style={{ transform: [{ translateY: offset4 }] }}>
                <Text style={styles.text}>
                    This message is going to be broadcasted out!
                </Text>
            </Animated.View>

            {/* Buttons */}
            <Animated.View style={{ transform: [{ translateY: offset5 }] }}>
                <TouchableOpacity onPress={broadcastPost}>
                    <Text style={styles.button}>
                        Just do it!
                    </Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ transform: [{ translateY: offset2 }] }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.back_button}>
                        Back
                    </Text>
                </TouchableOpacity>
            </Animated.View>

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
        marginTop: 88,
        alignSelf: 'center',
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