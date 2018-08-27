import React from 'react'
import {View, Text} from 'react-native'

export default class PageTitle extends React.Component {
  render() {
    return (
      <View style={{marginTop: 10, marginBottom: 10}}>
        <Text style={{color: '#1999dc', textAlign: 'center', fontSize: 30}}>{this.props.title}</Text>
      </View>
    )
  }
}