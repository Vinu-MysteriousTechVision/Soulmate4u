import React, { Component } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { Navigator } from 'react-native-navigation'

interface IProfile {
  navigator: Navigator
}
export default class Profile extends Component<IProfile> {
  constructor(props: any) {
    super(props)
  }

  public onPushAnother = () => {
    this.props.navigator.push({
      screen: 'SampleApp.ProfileUpdate',
      title: 'Profile Update',
    })
  }

  public render() {
    if (true) {
    } else {
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Profile Page! </Text>
        <View style={styles.button}>
          <Button onPress={this.onPushAnother} title="Update Profile" />
        </View>
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
  button: {
    marginTop: 16,
  },
})
