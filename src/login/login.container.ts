import * as React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { RootState } from '../reducer'
import { actions } from './actions'
import {
  ILoginComponentDispatchProps,
  ILoginComponentStateProps,
  Login,
} from './login.component'

interface OwnProps {
  navigator: Navigator
}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<
  ILoginComponentStateProps,
  OwnProps,
  RootState
> = (state: RootState, ownProps: OwnProps) => {
  const { userStatus } = state.home
  return {
    userStatus,
  }
}

// NOTE: dispatch Redux action from component's event. e.g. `onPress: dispatch(actions.submit({}))`
const mapDispatchToProps: MapDispatchToProps<
  ILoginComponentDispatchProps,
  OwnProps
> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({
  onLoginAction: () => {
    ownProps.navigator.resetTo({
      screen: 'HOME',
      title: 'Home',
    })
  },
})

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(
  Login,
)
