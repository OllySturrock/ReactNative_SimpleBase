import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

export default class Header_SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.side_flex_pad}></View>
        <TextInput
          style={styles.textarea}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <View style={styles.side_flex_pad}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textarea: {
    flex: 18,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#EBEBEC',
    borderRadius: 13
  },
  side_flex_pad: {
    flex: 1
  }
})