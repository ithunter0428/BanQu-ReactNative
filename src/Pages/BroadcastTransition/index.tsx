import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Image, Text, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BroadcastForm from './BroadcastForm';


function PostContent({navigation, fadeOut}) {

    const route = useRoute();
    const [scaleAnim, setFadeAnim] = useState(new Animated.Value(1))
    const [moveAnim, setMoveAnim] = useState(new Animated.Value(1))

    useEffect(() => {
        Animated.timing(scaleAnim, {
            toValue: 0.1,
            duration: 2500
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
            <View style={{padding: 21, zIndex: 9999}}>
                <Text style={{
                    background: 'linear-gradient(111.39deg, #FF9457 -7.95%, #E96114 64.07%)',
                    paddingRight: 21,
                    paddingLeft: 21,
                    paddingTop: 56,
                    paddingBottom: 56,
                    marginBottom: 27,
                    borderRadius: 12,
                    border: 'border: 1px solid rgba(255, 255, 255, 0.19)',
                    fontWeight: 600,
                    fontSize: 22,
                    lineHeight: 30,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    }}>
                    {route.params.content}
                </Text>
            </View>
        </Animated.View>
    )
}

const BroadcastScreen: FunctionComponent = ({ navigation }) => {
    
    const [fadeOut, setfadeOut] = useState(false)
    const [scaleAnim, setFadeAnim] = useState(new Animated.Value(1))
    const route = useRoute()


    return (
          <View style={{ backgroundColor: '#000000', flex: 1 }}>
                <PostContent fadeOut={fadeOut} navigation={navigation} />
                <BroadcastForm navigation={navigation}/>
          </View>
    );
}

export default BroadcastScreen;