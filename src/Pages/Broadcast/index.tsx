import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import PostContent from '../../Components/PostContent';
import BroadcastForm from './BroadcastForm';

const BroadcastScreen: FunctionComponent = ({ navigation }) => {
    
    const [fadeOut, setfadeOut] = useState(false)
    const [fadeAnimation, setFadeAnim] = useState(new Animated.Value(1))
    const route = useRoute()

    const onFadePost = () => {
        // setfadeOut(true)
        navigation.navigate('DashboardTrans', route.params)
        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 800,
        }).start();
    }

    return (
        // <Animated.View style={{ opacity: fadeAnimation}}>
          <View style={{ backgroundColor: '#000000', flex: 1 }}>
                <PostContent fadeOut={fadeOut} navigation={navigation} />
                <BroadcastForm navigation={navigation} onFadePost={onFadePost}/>
          </View>
        // </Animated.View>
    );
}

export default BroadcastScreen;