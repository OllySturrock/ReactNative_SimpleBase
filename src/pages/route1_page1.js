import React from 'react'
import { Text, View, Button, Image } from 'react-native'

import Header_SearchBar from '../components/header_searchbar'
import PageTitle from '../components/page_title'
import Icon from '../components/bottombar_icon'

import STYLESTACK from '../styles/style_stack'

export default class R1p1 extends React.Component {
  static navigationOptions = {
    headerTitle: Header_SearchBar
  }

  render() {
    return (
      <View style={STYLESTACK.base_container}>
        <PageTitle title={'Nav Route 1 Page 1 (Home)'} />
        <Button
          title="Click Me!"
          onPress={() => {
            this.props.navigation.navigate('route1_page2', {
              itemId: 86,
              otherParam: 'anything you want here'
            })
          }}
        />
        <Icon image="Rout_1" />
      </View>
    )
  }
}
