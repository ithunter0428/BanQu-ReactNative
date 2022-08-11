import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Image, Text, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import BroadcastForm from './BroadcastForm';


function PostContent({navigation, fadeOut}) {

    const route = useRoute();
    const [scaleAnim, setFadeAnim] = useState(new Animated.Value(1))
    const [moveAnim, setMoveAnim] = useState(new Animated.Value(1))

    useEffect(() => {
        Animated.timing(scaleAnim, {
            toValue: 0.1,
            duration: 2500,
            useNativeDriver: true
        }).start()
    })
    
    return (
        <Animated.View style={{
            transform: [
                {
                    scaleX: scaleAnim
                },
                {
                    scaleY: scaleAnim
                },
                {
                    translateX: scaleAnim.interpolate({
                        inputRange: [0.1, 0.99],
                        outputRange: [Dimensions.get('window').width *2 + 200, 0]
                    })
                },
                {
                    translateY: scaleAnim.interpolate({
                        inputRange: [0.1, 0.99],
                        outputRange: [-300, 0]
                    })
                }
            ]
        }}>
            <View style={{
                padding: 21,
                zIndex: 9999
            }}>
                <LinearGradient colors={['#FF9457', '#E96114']} {...deg(111.39)} style={{borderRadius: 12}}>
                {/* Contaibner */}
                    <View style={{
                        paddingRight: 21,
                        paddingLeft: 21,
                        paddingTop: 56,
                        paddingBottom: 56,
                }}>
                        <Text
                            style={{
                                // fontWeight: '600',
                                fontSize: 22,
                                lineHeight: 30,
                                color: '#FFFFFF',
                                textAlign: 'center',
                            }}
                        >
                                {route.params.content}
                            </Text>
                    </View>
                </LinearGradient>
            </View>
        </Animated.View>
    )
}

const BroadcastScreen: FunctionComponent = ({ navigation }) => {
    
    const [fadeOut, setfadeOut] = useState(false)
    const [scaleAnim, setFadeAnim] = useState(new Animated.Value(1))
    const route = useRoute()


    return (
        <View style={{ backgroundColor: '#000000', flex: 1, marginTop: 70 }}>
                <PostContent fadeOut={fadeOut} navigation={navigation} />
                <BroadcastForm navigation={navigation}/>
          </View>
    );
}

export default BroadcastScreen;