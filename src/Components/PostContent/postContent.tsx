import React, { Component, useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Image, Text} from 'react-native'
import { useRoute } from '@react-navigation/native';

export default function PostContent({navigation, fadeOut}) {

    const route = useRoute();
    const [offset, setOffset] = useState(new Animated.Value(-56))

    // Text Animation Function
    useEffect(() => {
        Animated.timing(offset, { toValue: 0, duration: 1500 }).start();
    })

    return (

        <View style={{
            padding: 21,
        }}>
            {/* Contaibner */}
                <View style={{
                background: 'linear-gradient(111.39deg, #FF9457 -7.95%, #E96114 64.07%)',
                paddingRight: 21,
                paddingLeft: 21,
                paddingTop: 56,
                paddingBottom: 56,
                marginBottom: 27,
                borderRadius: 12,
                border: 'border: 1px solid rgba(255, 255, 255, 0.19)',

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
                            fontWeight: 600,
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
        </View>
    )
}
