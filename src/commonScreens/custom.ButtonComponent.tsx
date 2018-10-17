import * as React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native'
import { FontStyles } from '../style'

export interface ICustomButtonStateProps {
  title: string
}

export interface ICustomButtonDispatchProps {
  onPressAction: () => void
}

interface ICustomButtonComponentProps
  extends ICustomButtonStateProps,
    ICustomButtonDispatchProps {
  buttonStyle?: ViewStyle
}

export const CustomButton: React.SFC<ICustomButtonComponentProps> = props => {
  const { buttonStyle, title, onPressAction } = props
  return (
    <TouchableHighlight
      style={[CustomButtonStyles.buttonContainer, buttonStyle]}
      onPress={onPressAction}
    >
      <Text style={CustomButtonStyles.title}>{title}</Text>
    </TouchableHighlight>
  )
}

export const CustomButtonStyles = StyleSheet.create({
  buttonContainer: {
    width: 266,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 22,
    backgroundColor: '#4A90E2',
  },
  title: StyleSheet.flatten([
    FontStyles.fontW6,
    {
      height: 16,
      fontSize: 16,
      lineHeight: Platform.select({
        ios: 0,
        android: 16,
      }),
      textAlign: 'left',
      color: '#FFFFFF',
    },
  ]),
})
