/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { Navigator } from 'react-native-navigation'

interface ILogin {
  navigator: Navigator
}

export default class Login extends Component<ILogin> {
  constructor(props: ILogin) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    this.tapOnLogin = this.tapOnLogin.bind(this)
  }

  public onNavigatorEvent(event: any) {
    switch (event.id) {
      case 'willAppear':
        // On enter on this screen, enable the drawer
        this.props.navigator.setDrawerEnabled({
          side: 'left',
          enabled: false,
        })
        break
      case 'willDisappear':
        // On leave from this screen, enable the drawer
        this.props.navigator.setDrawerEnabled({
          side: 'left',
          enabled: true,
        })
        break
    }
  }

  public tapOnLogin() {
    this.props.navigator.resetTo({
      screen: 'SampleApp.Home',
      title: 'Home',
    })
  }

  public render() {
    return (
      <View style={LoginStyles.container}>
        <Button
          onPress={this.tapOnLogin}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
