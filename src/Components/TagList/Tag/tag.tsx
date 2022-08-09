import React, { Component } from 'react';
import { View, StyleSheet, Animated, Image, TextInput, TouchableOpacity, Text, TouchableOpacityBase } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Tag({ onChangeTag, setCurrentTag, content, currentTag, index, onlyAnimated}) {

  const [offset, setOffset] = useState(new Animated.Value(onlyAnimated == true ? -30 + 5 * index : 0))
    useEffect(() => {
        Animated.timing(offset, { toValue: 0, duration: 1000 }).start();
    })
  return (
    <Animated.View style={{ transform: [{translateX: offset}], marginBottom: 10 }}>
      <TouchableOpacity onPress={() => {
        onChangeTag(content);
        setCurrentTag(content)
      }
      }>
          <Text style={content == currentTag ? styles.tag_active : styles.tag_normal}> {content}</Text>    
      </TouchableOpacity>
    </Animated.View>
  )

}

// styles
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,  
    justifyContent: "flex-start",
    alignItems: 'stretch',
    flexDirection: "row",
    borderRadius: 12,
  },
  tag_active: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontWeight: 600,
    fontFamily:'IBMPlex',
    borderRadius: 14,
    fontSize: 14,
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 6,
  },
  tag_normal: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#FFFFFF',
    fontWeight: 500,
    fontFamily: 'IBMPlex',
    fontSize: 14,
    borderRadius: 14,
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 6,
  }

});