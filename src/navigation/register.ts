import { Navigation } from 'react-native-navigation'
import { Provider, Store } from 'react-redux'
import { register as registerCommonScreens } from '../commonScreens/navigation'
import { register as registerHome } from '../home/navigation'
import { register as registerLogin } from '../login/navigation'
import { RootState } from '../reducer'

// NOTE: registering each component process should be delegated to each domain
// (e.g. home/navigation/register has responsibility to register home related components)
export const register = (
  store: Store<RootState>,
  provider: typeof Provider,
) => {
  registerHome(store, provider)
  registerCommonScreens(store, provider)
  registerLogin(store, provider)
}
