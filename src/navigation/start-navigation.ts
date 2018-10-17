import { Navigation } from 'react-native-navigation'
import { screenName } from './screen-name'

export const startNavigation = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: screenName.LOGIN, // unique ID registered with Navigation.registerScreen
    },
    drawer: {
      left: {
        screen: screenName.DRAWER,
      },
    },
  })
}
