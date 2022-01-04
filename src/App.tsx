import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import Home from './pages/Home'
import { RootStackParamList } from './types'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Login'} component={Login} />
          <Stack.Screen name={'Home'} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
