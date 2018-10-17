import * as React from 'react'
import {
  Button,
  Image,
  ListRenderItemInfo,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'
import { Navigator } from 'react-native-navigation'
import { DrawerMenuEnum } from '../constants'
import { DrawerStyles } from '../style'
import {
  DrawerHeader,
  IDrawerHeaderDispatchProps,
  IDrawerHeaderStateProps,
} from './drawer.header'
import {
  DrawerMenuList,
  IDrawerMenuListDispatchProps,
  IDrawerMenuListStateProps,
} from './drawer.menuList'

// creating a combination of multiple components interfaces.
export interface IDrawerStateProps
  extends IDrawerMenuListStateProps,
    IDrawerHeaderStateProps {}

// creating a combination of multiple components interfaces.
export interface IDrawerDispatchProps
  extends IDrawerMenuListDispatchProps,
    IDrawerHeaderDispatchProps {}

interface IDrawerProps extends IDrawerStateProps, IDrawerDispatchProps {
  navigator: Navigator
}

export class Drawer extends React.Component<IDrawerProps, any> {
  constructor(props: IDrawerProps) {
    super(props)
  }

  public render() {
    const { onPressMenu, menuSections } = this.props
    return (
      <View style={DrawerStyles.mainContainer}>
        <ScrollView>
          <DrawerHeader
            userName="山田　花子"
            avatarUrl={require('../res/images/user_default.png')}
          />
          <DrawerMenuList
            // Note that component use just object passed from container.
            onPressMenu={onPressMenu}
            menuSections={menuSections}
          />
        </ScrollView>
      </View>
    )
  }
}
