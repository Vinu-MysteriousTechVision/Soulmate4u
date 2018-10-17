/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'

interface Props {}
export default class ProfileUpdate extends Component<Props> {
  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  public componentWillMount() {}

  public onNavigatorEvent(event) {}

  public onPushAnother = () => {}

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Profile Update Page!</Text>
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
})
