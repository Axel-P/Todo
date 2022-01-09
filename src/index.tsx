import 'react-native-gesture-handler'
import './i18n'
import { AppRegistry } from 'react-native'
import App from './App'

AppRegistry.registerComponent('App', () => App)

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
})
