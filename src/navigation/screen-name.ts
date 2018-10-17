import { screenName as commonScreenName } from '../commonScreens/navigation'
import { screenName as homeScreenName } from '../home/navigation'
import { screenName as loginScreenName } from '../login/navigation'

export const screenName = {
  ...homeScreenName,
  ...commonScreenName,
  ...loginScreenName,
}
