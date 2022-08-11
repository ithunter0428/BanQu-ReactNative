import React, { Component, useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Image, Text} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';

export default function PostContent({navigation, fadeOut}) {

    const route = useRoute();
    const [offset, setOffset] = useState(new Animated.Value(-56))

    // Text Animation Function
    useEffect(() => {
        Animated.timing(offset, { toValue: 0, duration: 1500 , useNativeDriver: true }).start();
    })

    return (

        <View style={{
            padding: 21,
        }}>
            <LinearGradient colors={['#FF9457', '#E96114']} {...deg(111.39)} style={{borderRadius: 12}}>
            {/* Contaibner */}
                <View style={{
                    paddingRight: 21,
                    paddingLeft: 21,
                    paddingTop: 56,
                    paddingBottom: 56,
            }}>
                {/* Text Animation */}
                    <Animated.View
                        style={{
                            transform: [
                                {
                                    translateY: offset.interpolate({
                                        inputRange: [-56, 0],
                                        outputRange: [-60, 0]
                                    })
                                },
                                {
                                    translateX: offset.interpolate({
                                        inputRange: [-56, 0],
                                        outputRange: [-20, 0]
                                    })
                                },
                            ]
                    }}>
                    <Text
                        style={{
                            // fontWeight: 'bold',
                            fontSize: 22,
                            lineHeight: 30,
                            color: '#FFFFFF',
                            textAlign: 'center',
                        }}
                    >
                            {route.params.content}
                        </Text>
                    </Animated.View>
                </View>
            </LinearGradient>
        </View>
    )
}
