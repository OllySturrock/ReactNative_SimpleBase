import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import image_json from './images'

export default class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_location: props.image,
    };
  }
  render() {
    return ( 
      <Image style={{width: 66, height: 58}} source={{uri: image_json.Rout_1}} />
    )
  }
}