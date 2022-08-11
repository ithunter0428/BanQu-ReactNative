import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Image, Text, TouchableOpacity } from 'react-native'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useFonts } from 'expo-font';
import { BASE_URL, MockUser } from '../../../Constant'
import { SET_USER_PROFILE } from '../../../Redux/Actions/action';
import * as Font from 'expo-font';

export default function Profile({ navigation }) {
    
    const [profile, setProfile] = useState({})
    
    const dispatch = useDispatch()

    // // Load Font
    const [fontLoaded, setFontLoaded] = useState(false)
    const loadFont = async () => {
        await Font.loadAsync({
            'IBMPlex': require('../../../../assets/fonts/IBMPlexSans-Text.ttf'),
        })
        setFontLoaded(true);

    }

  
    
    const saveProfileToRedux = () => {
        dispatch({ type: SET_USER_PROFILE, data: profile })
    }

    
    const getProfile = async () => {
        const { data } = await axios.get(BASE_URL + "/getUserInfo")
        setProfile(data)
    }

    useEffect(() => {
        getProfile();
        loadFont();
    }, [])

    return (
        <View>
        {fontLoaded ?
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View>
                    <Image style={styles.photo} source = {{uri: profile.profile_img}} />
                    <Image style={styles.badge} source={require('../../../../assets/badge.png')} />
                </View>
                <Text style={styles.username}>{profile.username}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity>
                    <View style={styles.rect}>
                        <Image style={styles.icon} source={require('../../../../assets/email.png')} />
                    </View>
                </TouchableOpacity>
                </View>
        </View>: <></>}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0D0C13',
        marginBottom: 21,
        // paddingTop: 21,
        // paddingLeft: 21,
        // paddingRight: 21
    },

    photo: {
        width: 40,
        height: 40,
        borderRadius: 22
    },
    
    badge: {
        width: 14,
        height: 14,
        position: 'absolute',
        left: 28,
        top: 26,
    },

    rect: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255 , 0.1)',
        borderRadius: 22,
        padding: 10,
    },

    icon: {
        width: 20,
        height: 20,
    },

    username: {
        marginLeft: 16,
        fontSize: 20,
        //fontWeight: 700,
        // fontFamily: 'IBMPlex',
        alignSelf: 'center',
        color: '#F5F5F5'
    }
})