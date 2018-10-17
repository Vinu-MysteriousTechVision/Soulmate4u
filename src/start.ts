import { Provider } from 'react-redux'
import { register as registerScreen } from './navigation'
import { startNavigation } from './navigation'
import { store } from './store'

export const start = () => {
  registerScreen(store, Provider)
  startNavigation()
}
