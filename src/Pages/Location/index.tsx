import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Animated, Image, Text } from 'react-native'
import PostMessage from '../../Components/PostContent';
import BroadcastForm from './BroadcastForm';

const Location: FunctionComponent = ({navigation}) => {
    return (
        <View style={{backgroundColor: '#000000', flex: 1}}>
            <PostMessage />
            <BroadcastForm navigation={navigation} />
        </View>
    );
}

export default Location;