import React from 'react'
import { Text, View, Button } from 'react-native'

import Header_SearchBar from '../components/header_searchbar'
import PageTitle from '../components/page_title'

import STYLESTACK from '../styles/style_stack'

export default class R1p2 extends React.Component {
  static navigationOptions = {
    headerTitle: Header_SearchBar
  }
  render() {
    return (
      <View style={STYLESTACK.base_container}>
        <PageTitle title={'Nav Route 1 Page 2 (Inside Home)'} />
      </View>
    )
  }
}