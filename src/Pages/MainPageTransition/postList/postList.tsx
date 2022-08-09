import { useRoute } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Image, Text } from 'react-native';
import { useSearchParams } from 'react-router-native';
import { useSelector } from 'react-redux';
import Post from './post';

export default function PostList({messages, onlyAnimation}) {
    
    const route = useRoute()
    const profile = useSelector(state => state)

    const [backColorList, setBackColorList] = useState([
        "linear-gradient(111.39deg, #FF9457 -7.95%, #E96114 64.07%)",
        "linear-gradient(111.39deg, #FF8AEC -7.95%, #B114E9 64.07%)",
        "linear-gradient(111.39deg, #CAC5C9 -7.95%, #918D90 64.07%)",
        "linear-gradient(111.39deg, #8CB5F2 -7.95%, #2A8DE8 64.07%)"
    ]) 

    const postList = () => {
        // Genearte a Post
        const newPost = {
            sender_name: profile.username,
            profile_img: profile.profile_img,
            tag: route.params.tags,
            content: route.params.content,
            comments: 0,
            likes: 0
        }
        let data = [newPost];

        if (Array.isArray(messages) && messages.length > 0)
            data = [newPost].concat(messages)
        // const data = Array.isArray(messages) == true ? messages : []
        return data.map((message, index) => {
            return (
                <Post backColor={backColorList[index % 4]} message={message} index={index} key={index} onlyAnimation={onlyAnimation} />
            )
        })
    }

    return (
        <View >
            {postList()}
        </View>
    ) 
}

const styles = StyleSheet.create({
    
    photo: {
        width: 24,
        height: 24,
        borderRadius: 22
    },

    username: {
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 18,
        marginLeft: 10,
        color: '#FFFFFF'
    },

    category: {
        height: 22,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderColor: '#FFFFFF',
        color: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 12,
        fontWeight: 500,
        fontSize: 14,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom:2,
    },

    content: {
        fontWeight: 600,
        fontSize: 17,
        lineHeight: 22.1,
        color: '#FFFFFF'
    },

    icon: {
        width: 17,
        height: 17,
        marginRight: 18.3,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },

    text: {
        fontWeight: 500,
        fontSize: 12,
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