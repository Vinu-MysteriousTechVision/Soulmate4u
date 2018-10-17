import React, { Component } from 'react'
import {
  Button,
  ListView,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Navigator } from 'react-native-navigation'
import { navigatorButtons } from './login.navigationController'

export interface ILoginComponentStateProps {}

// NOTE: Component must not know what will happen when button pressed.
// just passing event to parent (container) and container handles the event by emitting action of Redux.
export interface ILoginComponentDispatchProps {
  onLoginAction: () => void
}

interface ILoginProps
  extends ILoginComponentStateProps,
    ILoginComponentDispatchProps {
  navigator: Navigator
}

export class Login extends React.Component<ILoginProps, any> {
  constructor(props: ILoginProps) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  public onNavigatorEvent(ev: any) {
    // this is the navigation event handler

    if (ev.type === 'NavBarButtonPress') {
      // this is the event type for button presses
      if (ev.id === 'sideMenu') {
        // this is the same id field from the static navigatorButtons definition
        this.props.navigator.toggleDrawer({
          side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
          animated: true, // does the toggle have transition animation or does it happen immediately (optional)
        })
      }
    }
  }

  public componentDidMount() {}

  public render() {
    const { onLoginAction } = this.props
    return (
      <View style={LoginStyles.container}>
        <Button
          onPress={onLoginAction}
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
