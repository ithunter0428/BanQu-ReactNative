import React, { Component } from 'react';
import { View, StyleSheet, Animated, Image, TextInput, TouchableOpacity, Text, TouchableOpacityBase } from 'react-native';
import { useEffect, useState } from 'react';
import { BASE_URL, MockTags } from '../../Constant'
import { useSelector } from 'react-redux';
import Tag from './Tag/tag';
import axios from 'axios';

export default function TagList({ onChangeTag, onlyInterested, onlyAnimated}) {

  const [currentTag, setCurrentTag] = useState('all');
  const [tagData, setTagData] = useState([])
  const profile = useSelector(state => state)

  // Load tag from API
  const getTagList = async () => {

    if (onlyInterested == true) {
      // Load Tags from Profile in Redux
      const tags = profile.tags;
      const data = ['all']
      for (let key in tags) {
        data.push(tags[key])
      }
      setTagData(data)
    }
    else {  // Load All Tags from API.
      const { data } = await axios.get(BASE_URL + "/getTagList")
      setTagData(data.data)
      setCurrentTag(data.data[0])
      onChangeTag(data.data[0])
    }
    
  }

  // Occurs when user select tag
  const handleTag = (name) => {
    setCurrentTag(name)
  }
  
  useEffect(() => {
    getTagList()
  }, [profile])

  const Tags = () => {
    return tagData.map((tag, key) => {
      return (
        <Tag content={tag} index={key} currentTag={currentTag} onChangeTag={onChangeTag}
             setCurrentTag={handleTag} onlyAnimated={onlyAnimated} key={key}/>
      )
    })
  }

  return (
      <View style={styles.container}>
        {Tags()}  
      </View>
    )
}

// styles
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,  
    justifyContent: "flex-start",
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
  },
  tag_active: {
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
  tag_normal: {
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

});