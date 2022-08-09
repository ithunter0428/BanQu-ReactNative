import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Animated, Image, Text, TouchableOpacity } from 'react-native'
import axios from 'axios';
import { useFonts } from 'expo-font';
import { BASE_URL } from '../../Constant'
import { useRoute } from '@react-navigation/native';
import { Feather, Entypo } from '@expo/vector-icons';
import Profile from "./profile";
import Search from "./search";
import Tag from '../../Components/TagList/tagList';
import PostList from "./postList";
import PostForm from '../Post/PostForm';
import BroadcastForm from '../Broadcast/BroadcastForm';
import Broadcast from '../Broadcast';
import BroadcastTransition from '../BroadcastTransition'

const MainPage: FunctionComponent = ({ navigation }) => {
    // Load Font
    const [loaded] = useFonts({
        IBMPlex: require('../../../assets/fonts/IBMPlexSans-Text.ttf'),
      });

    // State Variables
    const [postList, setPostListData] = useState([]);
    const [filteredPostList, setFilterPostList] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [tag, setTag] = useState('all');
    const [animflag, setAnimFlag] = useState(true)
    const [offset, setOffset] = useState(new Animated.Value(250)) // Animation
    const route = useRoute();
    
    // Get Post Data through API
    const getPostList = async() => {
        const { data } = await axios.get(BASE_URL + '/getAllPostList')
        const posts = Array.isArray(data.posts) ? data.posts : []
        setPostListData(posts)
        setFilterPostList(posts)
    }

    // 
    useEffect(() => {
        Animated.timing(offset, { toValue: 0, duration: 2000 }).start();
        getPostList()
    }, [route])

    // When user inputs Search keyword
    const onChangeKeyword = (key) => {
        setKeyword(key)
        onFileterPostList(key, tag)
    }

    // When user selects tag
    const onChangeTag = (tagParam) => {
        setTag(tagParam)
        onFileterPostList(keyword, tagParam)
    }

    // To filter post messages
    const onFileterPostList = (key, tagParam) => {
        setFilterPostList(
            postList.filter(msg => {
                const flag = tagParam == 'all' ? true : msg.tag == tagParam
                return (msg.sender_name.includes(key) || msg.content.includes(key)) && flag;
            })
        )
    }

    const FadeOutModal = () => {
        return <BroadCast />
    }

    const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(1));

    // Fadeout Animation for BackComponent
    const fadeOut = () => {
        Animated.timing(fadeAnimation, {
          toValue: 0,
          duration: 2500
        }).start(() => setAnimFlag(false));
      };

      useEffect(() => { fadeOut() }, []);
    
    return (
        <View style={{ flex: 1 }}>

            {/* Scroll View */}
            <ScrollView style={{ backgroundColor: '#0D0C13', padding: 21, fontFamily: 'IBMPlex' }}>
                <Profile/>
                <Search onChangeKeyword={onChangeKeyword} />
                <Tag onChangeTag={onChangeTag} onlyInterested={true} onlyAnimated={true} />
                <PostList messages={filteredPostList} />
            </ScrollView>
            
            {/* Animation Button */}
            <Animated.View style={{ transform: [{translateY: offset}] }}>
                <TouchableOpacity onPress={() => { navigation.navigate('editor') }} style={styles.footer}>
                    <Text style={styles.button}>
                        <Feather
                            name="plus"
                            size={20}
                            color="white"
                        />
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = {
    button: {
        width: 64,
        height: 64,
        zIndex: -1,
        borderRadius: 32,
        backgroundColor: '#FF7C24',
        color: '#FFFFFF',
        float: 'right',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 32,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center'
    }
}

export default MainPage;