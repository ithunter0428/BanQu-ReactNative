import React, { Component} from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Image, TextInput } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

export default function Search({ onChangeKeyword }) {

    const [key, setKey] = useState('')
  
    return (
        <View style={styles.container}>
            {/* search Icon */}
            <Image
            style={styles.icon_search}
            source={require('../../../../assets/search.png')} />
            {/* Input field */}

            <TextInput
                style={[styles.input, ]}
                value={key}
                onChangeText={(text) => {
                  setKey(text)
                  onChangeKeyword(text)
                  }
                }
                placeholder="Search"
                placeholderTextColor="rgba(255,255,255,0.4)" 
          />
        
          <Image
            style={styles.mic}
            source={require('../../../../assets/mic.png')} />

        </View>
      
    )
}

// styles
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 20,  
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 54,
    borderRadius: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },

  mic: {
    width: 15,
    height: 20,
  },

  icon_search: {
    width: 24,
    height: 24,
  },
 
  input: {
    fontSize: 20,
    marginLeft: 10,
    // width: '92%',
    flexDirection: 'row',
    flex: 1,
    color: '#FFFFFF',
  },
});