import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Animated, Image, Text } from 'react-native'
import PostMessage from '../../Components/PostContent';
import PostForm from './PostForm';

const Post: FunctionComponent = ({navigation}) => {
    return (
        <View style={styles.container}>
            <PostMessage fadeOut={false} navigation={navigation} />
            <PostForm navigation={navigation} />
        </View>
    );
}

const styles = {
    container: {
        backgroundColor: '#0D0C13',
        flex: 1,
    }
}

export default Post;