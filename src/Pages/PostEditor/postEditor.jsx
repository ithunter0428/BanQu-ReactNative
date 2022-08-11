import React, { FunctionComponent, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View, Animated, Image } from "react-native";
import { ScreenStackHeaderRightView } from 'react-native-screens';
import { Feather, Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

export default function PostEditor({navigation}) {

    const [text, onChangeText] = React.useState("");
    const [offset, setOffset] = useState(new Animated.Value(-40)) // Animation
    const route = useRoute()

    // Move Button
    useEffect(() => {
        Animated.timing(offset, { toValue: 0, duration: 800 , useNativeDriver: true}).start();
        onChangeText(route.params.text)
    }, [route])

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, ]}
                onChangeText={onChangeText}
                autoFocus={true}
                value={text.slice(0, 99)}
                selectionColor='#FF7C24'
                multiline={true}
                placeholder="Wanna talk about..."
            />

            <Animated.View style={{ transform: [{translateX: offset}] }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    
                    <Text style={styles.letterCount}>
                        {text.length}/100
                    </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('post', {content: text})}>
                        <Text style={styles.button}>
                            <Image
                                style={styles.icon_search}
                                source={require('../../../assets/arrow.png')} />
                        {/* <Feather
                            name="arrow-right"
                            size={20}
                            color="white"
                            style={{ marginLeft: 1 }}
                        /> */}
                        </Text>
                    </TouchableOpacity>


                </View>
            </Animated.View>
        
        </View >
    )
}

// Styles for Components
const styles = StyleSheet.create({
    container: {
        padding: 21,
        backgroundColor: '#0D0C13',
        flex: 1
    },

    input: {
        color: '#fff',
        //fontWeight: 400,
        fontSize: 22,
        lineHeight: 30,
        paddingLeft: 14,
        paddingRight: 14,
        marginBottom: 20,

        // selectionColor: '#FF7C24',
        // caretColor: '#FF7C24',
        textAlignVertical: 'top',
        flex: 1,
    },  

    button: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#FF7C24',
        shadowColor: "rgba(0, 0, 0, 0.45)",
        shadowOffset: {width:0, height: 4}, 
        shadowOpacity: 0.45,
        shadowRadius: 4,
        padding: 25,
        // alignItems: 'flex-end',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 32,
    },

    letterCount: {
        textAlign: 'center',
        //fontWeight: 500,
        fontSize: 14,
        lineHeight: 24,
        color: 'rgba(255,255,255,0.35)',
        marginRight: 22,
        marginTop: 20
    },

    icon: {
        width: 13.55,
        height: 16.5
    }

})