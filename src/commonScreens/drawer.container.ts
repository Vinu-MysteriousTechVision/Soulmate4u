import * as React from 'react'
import { Navigator } from 'react-native-navigation'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, bindActionCreators, Dispatch } from 'redux'
import { DrawerMenuEnum } from '../constants'
import { RootState } from '../reducer'
import {
  Drawer,
  IDrawerDispatchProps,
  IDrawerStateProps,
} from './drawer.component'
import { MENU_SECTIONS } from './menuItems'

interface OwnProps {
  navigator: Navigator
}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<
  IDrawerStateProps,
  OwnProps,
  RootState
> = (state: RootState, ownProps: OwnProps) => ({
  userName: '',
  avatarUrl: '',
  menuSections: MENU_SECTIONS,
})

// NOTE: dispatch Redux action from component's event. e.g. `onPress: dispatch(actions.submit({}))`
const mapDispatchToProps: MapDispatchToProps<IDrawerDispatchProps, OwnProps> = (
  dispatch: Dispatch<Action>,
  ownProps: OwnProps,
) => {
  return {
    onPressMenu: (id: DrawerMenuEnum) => {
      if (id === DrawerMenuEnum.Home) {
        ownProps.navigator.toggleDrawer({ side: 'left' })
      } else {
        alert('Comming soon!')
      }
    },
  }
}

export const DrawerContainer = connect(mapStateToProps, mapDispatchToProps)(
  Drawer,
)
