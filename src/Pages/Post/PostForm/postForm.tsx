import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Button, TouchableOpacity, Switch, Picker, Animated, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Tag from '../../../Components/TagList';


export default function PostForm({navigation}) {

    const route = useRoute();
    const profile = useSelector(state => state)

    const [online, setOnline] = useState(true);
    const [tag, setTag] = useState('all');
    const [location, setLocation] = useState('Beijing')
    const [animType, setAnimType] = useState(true) //Boolean Animation goes up or down
    const [borderColor, setBorderColor] = useState('#909090')

    // Animation Offset
    const [offset1, setOffset1] = useState(new Animated.Value(20))
    const [offset2, setOffset2] = useState(new Animated.Value(10))
    const [offset3, setOffset3] = useState(new Animated.Value(15))
    const [offset4, setOffset4] = useState(new Animated.Value(15))
    const [offset5, setOffset5] = useState(new Animated.Value(20))
    const [offset6, setOffset6] = useState(new Animated.Value(10))
    const [offset7, setOffset7] = useState(new Animated.Value(30))
    const [offset8, setOffset8] = useState(new Animated.Value(70))

    const offsetArray:number[] = [20, 10, 15, 15, 20 ,10, 30, 70]

    useEffect(() => {

    })
    // Navigate to Broadcast Form
    const toBroadCast = () => {
        navigation.navigate('broadcast', {
            user_id: profile.user_id,
            content: route.params.content,
            tags: tag,
            location: location,
            onlineOnly: online,
        })
    }
    
    // When you click tag
    const onChangeTag = (newTag: string) => {
        setTag(newTag)
    }

    // Execute Animation
    const doAnimation = () => {
        setAnimType(!animType)
        setBorderColor(animType == false ? '#909090' : '#FFFFFF')
        Animated.timing(offset1, { toValue: animType == true ? 0 : offsetArray[0], duration: 1500 }).start();
        Animated.timing(offset2, { toValue: animType == true ? 0 : offsetArray[1], duration: 1500 }).start();
        Animated.timing(offset3, { toValue: animType == true ? 0 : offsetArray[2], duration: 1500 }).start();
        Animated.timing(offset4, { toValue: animType == true ? 0 : offsetArray[3], duration: 1500 }).start();
        Animated.timing(offset5, { toValue: animType == true ? 0 : offsetArray[4], duration: 1500 }).start();
        Animated.timing(offset6, { toValue: animType == true ? 0 : offsetArray[5], duration: 1500 }).start();
        Animated.timing(offset7, { toValue: animType == true ? 0 : offsetArray[6], duration: 1500 }).start();
        Animated.timing(offset8, { toValue: animType == true ? 0 : offsetArray[7], duration: 1500 }).start();
    }

    return (
        <View style={styles.container}>
            {/* Border */}
            <Animated.View style={{ transform: [{ translateY: offset1 }] }}>
                <TouchableOpacity onPress={doAnimation}>
                    <View style={[styles.border, {borderColor: borderColor}]}></View>
                </TouchableOpacity>
            </Animated.View>
            
            {/* Location Label */}
            <Animated.View style={{ transform: [{ translateY: offset2 }] }}>
                <Text style={styles.label} >Location</Text>
            </Animated.View>

            <Animated.View style={{ transform: [{ translateY: offset3 }] }}>
                <TouchableOpacity onPress={() => {navigation.navigate('location')}}>
                    <Picker style={styles.input} itemStyle={{color: 'white'}}>
                        <Picker.Item color="white" label="Beijing" value="bj" />
                    </Picker>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ transform: [{ translateY: offset4 }] }}>
                <Text style={styles.label}>Status</Text>
            </Animated.View>    
            
            <Animated.View style={{ transform: [{ translateY: offset5 }] }}>
                <View style={styles.input}>
                    <Text style={{ color: 'white' }}>{online == true ? 'Online' : 'Offline'}</Text>
                    <Switch
                        value={online}
                        onValueChange={() => { setOnline(!online)}}
                    />
                </View>
            </Animated.View>

            <Animated.View style={{ transform: [{ translateY: offset6 }] }}>
                <Text style={styles.label}>Interested</Text>
            </Animated.View>

            <Animated.View style={{ transform: [{ translateY: offset7 }] }}>
                <Tag onChangeTag={onChangeTag} onlyInterested={false} onlyAnimated={false} />
            </Animated.View>
            
            <Animated.View style={{ transform: [{ translateY: offset8 }] }}>
                <TouchableOpacity onPress={toBroadCast}>
                    <Text style={styles.button}>
                    Next
                    </Text>
                </TouchableOpacity>
            </Animated.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        padding: 21,
        paddingTop: 0,
        backgroundColor: '#212027'
    },

    border: {
        width: 28.5,
        borderBottomWidth: 3,
        alignSelf: 'center',
        marginTop: 12,
        borderRadius: 1,
        borderColor: '#909090',
    },

    button: {
        backgroundColor: '#FF7C24',
        borderRadius: 12,
        paddingTop: 18,
        paddingBottom: 18,
        marginBottom: 70,
        textAlign: 'center',
        fontSize: 18,
        color: '#FFFFFF'
    },

    label: {
        fontSize: 16,
        lineHeight: 21,
        marginTop: 24,
        marginBottom: 11,
        alignItems: 'center',
        color: '#FFFFFF'
    },

    input: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: 'white',
        borderRadius: 12,
        paddingLeft: 21,
        paddingRight: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 54,
        alignItems: 'center',
    },

    category_active: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        fontWeight: 600,
        borderRadius: 14,
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 6,
      },
      category_normal: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: '#FFFFFF',
        fontWeight: 500,
        borderRadius: 14,
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 6,
      }

})