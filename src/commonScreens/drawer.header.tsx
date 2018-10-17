import * as React from 'react'
import {
  Button,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { DrawerMenuEnum } from '../constants'
import { DrawerStyles } from '../style'

export interface IDrawerHeaderStateProps {
  userName: string
  avatarUrl: any
}

export interface IDrawerHeaderDispatchProps {}

interface IDrawerHeaderComponentProps
  extends IDrawerHeaderStateProps,
    IDrawerHeaderDispatchProps {}

export const DrawerHeader: React.SFC<IDrawerHeaderComponentProps> = props => {
  return (
    <View style={DrawerStyles.headerContainer}>
      <View style={DrawerStyles.headerIconContainer}>
        <Image style={DrawerStyles.headerIcon} source={props.avatarUrl} />
      </View>
      <Text style={DrawerStyles.headerText}>{props.userName}</Text>
    </View>
  )
}
