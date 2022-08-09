import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Image, Text, Dimensions } from 'react-native';

export default function Post({backColor, message, index, onlyAnimation}) {
    
    const [offsetY, setOffsetY] = useState(new Animated.Value(index == 0 ? 0 : -150))
    const [offsetX, setOffsetX] = useState(new Animated.Value(index == 0 ? -Dimensions.get('window').width : 0))

    useEffect(() => {
        if (onlyAnimation == true) {
            Animated.timing(offsetY, { toValue: 0, duration: 1500 }).start();
            Animated.timing(offsetX, { toValue: 0, duration: 1500 }).start()
        }
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
        <View style={{
        background: backColor,
        borderRadius: 12,
        padding: 20,
        paddingTop: 0,
        marginBottom: 14,
        color: '#FFFFFF',
    }}>
        {/* Post Info */}
        <View style={styles.footer}>
            {/* Sender Name */}
            <View style={{ flexDirection: 'row', justifyContent:'flex-start' }}>
                <Image style={styles.photo} source = {{uri: message.profile_img}}></Image>
                <Text style={styles.username}>{message.sender_name}</Text>
            </View>

            {/* Tag Name */}
            <View style={{ flexDirection: 'row', justifyContent:'flex-end' }}>
                <Text style={styles.category}>{message.tag}</Text>
            </View>
        </View>

        {/* Content */}
        <View style={styles.footer}>
            <Text style={styles.content}>{message.content}</Text>
        </View>

        {/* Icons */}
        <View style={styles.footer}>
            <View style={{ flexDirection: 'row', justifyContent:'flex-start' }}>
                <Image style={styles.icon} source={require('../../../../../assets/Vector.png')}></Image>
                <Image style={styles.icon} source={require('../../../../../assets/Combined-Shape.png')}></Image>
                <Image style={styles.icon} source={require('../../../../../assets/send.png')}></Image>
            </View>

            {/* Comments and Likes */}
            <View style={{ flexDirection: 'row', justifyContent:'flex-end' }}>
                <Text style={styles.text}>{message.comments} Comments</Text>
                <Image style={styles.dot} source={require('../../../../../assets/Ellipse.png')}></Image>
                <Text style={styles.text}>{message.likes} likes</Text>
            </View>
        </View>

        </View>
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
        fontWeight: 500,
        fontSize: 14,
        fontFamiliy: 'IBMPlex',
        lineHeight: 18,
        marginLeft: 10,
        alignSelf: 'center',
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
        fontFamiliy: 'IBMPlex',
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