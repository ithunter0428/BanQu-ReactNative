import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Image, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import * as Font from 'expo-font'

export default function Post({backColor, message, index, onlyAnimation}) {
    
    const [offsetY, setOffsetY] = useState(new Animated.Value(index == 0 ? 0 : -150))
    const [offsetX, setOffsetX] = useState(new Animated.Value(index == 0 ? -Dimensions.get('window').width : 0))
    const [fontLoaded, setFontLoaded] = useState(false)
    const loadFont = async() => {
        await Font.loadAsync({
          'IBMPlex': require('../../../../../assets/fonts/IBMPlexSans-Text.ttf'),
        })
        setFontLoaded(true);

    }
    
    useEffect(() => {
        if (onlyAnimation == true) {
            Animated.timing(offsetY, { toValue: 0, duration: 1500 , useNativeDriver: true}).start();
            Animated.timing(offsetX, { toValue: 0, duration: 1500 , useNativeDriver: true}).start()
        }
        loadFont();
    })

    return (
        // Aniation
        <Animated.View
            style={{
                transform: [
                    { translateY: offsetY },
                    { translateX: offsetX }
                ],
                zIndex: index == 0 ? 9999 : -1

            }}>
            {fontLoaded ?
                <LinearGradient colors={backColor} {...deg(111.39)} style={{ borderRadius: 12, marginBottom: 16 }}>

                    <View style={styles.box}>
                        
                        <View style={styles.footer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Image style={styles.photo} source={{ uri: message.profile_img }}></Image>
                                <Text style={styles.username}>{message.sender_name}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Text style={styles.category}>{message.tag}</Text>
                            </View>
                        </View>

                        <View style={styles.footer}>
                            <Text style={styles.content}>{message.content}</Text>
                        </View>

                        <View style={styles.footer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Image style={styles.icon} source={require('../../../../../assets/Vector.png')}></Image>
                                <Image style={styles.icon} source={require('../../../../../assets/Combined-Shape.png')}></Image>
                                <Image style={styles.icon} source={require('../../../../../assets/send.png')}></Image>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Text style={styles.text}>{message.comments} Comments</Text>
                                <Image style={styles.dot} source={require('../../../../../assets/Ellipse.png')}></Image>
                                <Text style={styles.text}>{message.likes} likes</Text>
                            </View>
                        </View>

                    </View>
                </LinearGradient>
                : <></>
            }
    </Animated.View>
    )

}

const styles = StyleSheet.create({
    
    photo: {
        width: 24,
        height: 24,
        borderRadius: 22
    },

    username: {
        //fontWeight: 500,
        fontSize: 14,
        // fontFamily: 'IBMPlex',
        lineHeight: 18,
        marginLeft: 10,
        alignSelf: 'center',
        color: '#FFFFFF'
    },

    box: {
        borderRadius: 12,
        padding: 20,
        paddingTop: 0,
        // color: '#FFFFFF',
    },

    category: {
        height: 22,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderColor: '#FFFFFF',
        color: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 12,
        //fontWeight: 500,
        fontSize: 14,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom:2,
    },

    content: {
        //fontWeight: 600,
        fontSize: 17,
        lineHeight: 22.1,
        color: '#FFFFFF'
    },

    icon: {
        width: 19,
        height: 17,
        marginRight: 18.3,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },

    text: {
        //fontWeight: 500,
        fontSize: 12,
        // fontFamily: 'IBMPlex',
        color: '#FFFFFF'
    },

    dot: {
        marginLeft: 6,
        marginRight: 6,
        width: 3,
        height: 3,
        marginTop: 7
    }

})