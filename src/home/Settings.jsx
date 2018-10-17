/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'

const instructions = Platform.select({
  ios: 'FirstTabScreen',
  android: 'FirstTabScreen',
})

type Props = {}
export default class FirstTabScreen extends Component<Props> {
  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent(event) {
    if (event.type === 'DeepLink') {
      const parts = event.link.split('/')
      const payload = event.payload // (optional) The payload

      if (parts[0] === 'reset') {
        this.props.navigator.resetTo({
          label: 'Navigation',
          screen: parts[1],
          title: payload.title,
        })
      }
    }
  }

  componentWillMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Setting Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    marginTop: 16,
  },
})
