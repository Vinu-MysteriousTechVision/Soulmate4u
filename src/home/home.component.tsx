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
import { HomeTopPagesEnum } from '../constants'
import { Homestyles } from '../style'
import { colors } from '../utils/Color'
import { navigatorButtons } from './home.navigationController'
import ProfileView from './ProfileView'

export interface IHomeComponentStateProps {
  userStatus: number
}

// NOTE: Component must not know what will happen when button pressed.
// just passing event to parent (container) and container handles the event by emitting action of Redux.
export interface IHomeComponentDispatchProps {}

interface IHomeProps
  extends IHomeComponentStateProps,
    IHomeComponentDispatchProps {
  navigator: Navigator
}

export class Home extends React.Component<IHomeProps, any> {
  constructor(props: IHomeProps) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.state = {
      isRefreshing: false,
      dataSource: ds.cloneWithRows([
        { name: 'abc' },
        { name: 'abc' },
        { name: 'abc' },
        { name: 'abc' },
        { name: 'abc' },
        { name: 'abc' },
        { name: 'abc' },
      ]),
    }

    this.props.navigator.setButtons(navigatorButtons())
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    this.tapOnLogin = this.tapOnLogin.bind(this)
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

  public componentDidMount() {
    this.props.navigator.setTitle({
      title: 'Dynamic Title', // the new title of the screen as appears in the nav bar
    })
  }

  public render() {
    const { userStatus } = this.props
    return (
      <View style={styles.container}>
        <ListView
          style={{}}
          removeClippedSubviews={false}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRowItem()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              tintColor={colors.progressColorDark}
              colors={[
                colors.refreshColor1,
                colors.refreshColor2,
                colors.refreshColor3,
                colors.refreshColor4,
              ]}
              progressBackgroundColor={colors.refreshBgColor}
            />
          }
        />

        <Button
          onPress={this.tapOnLogin}
          title="Tap On Home"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }

  private renderRowItem = () => () => <ProfileView />

  private _onRefresh() {
    this.setState({
      isRefreshing: false,
    })
  }

  private tapOnProfileView() {
    this.props.navigator.push({
      screen: 'SampleApp.Profile',
      title: 'Profile',
    })
  }

  private tapOnLogin() {
    this.props.navigator.push({
      screen: 'SampleApp.Profile',
      title: 'Profile',
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingBottom: 10,
  },
})
