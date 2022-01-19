import 'react-native-gesture-handler'
import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { RootStackParamList } from './types/applicationTypes'
import { withTranslation, WithTranslation } from 'react-i18next'
import HeaderButton from './commonComponents/headerButton'
import ApiConnector from './api/apiConnector'
import Login from './pages/login'
import Home from './pages/home'

const Stack = createStackNavigator<RootStackParamList>()
const screenOptionsGenerator = (pageTitle: string): StackNavigationOptions => {
  return {
    title: pageTitle,
    headerTitleStyle: {
      textTransform: 'capitalize',
    },
  }
}

const stackNavigationOptions: StackNavigationOptions = {
  headerRight: () => <HeaderButton />,
}

class App extends PureComponent<WithTranslation> {
  render() {
    return (
      <ApiConnector>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={stackNavigationOptions}>
            <Stack.Screen
              name={'Login'}
              options={screenOptionsGenerator(
                this.props.t('pages:login.title'),
              )}
              component={Login}
            />
            <Stack.Screen
              name={'Home'}
              options={screenOptionsGenerator(this.props.t('pages:home.title'))}
              component={Home}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApiConnector>
    )
  }
}

export default withTranslation()(App)
