import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./component/Home"
import AnotherScreen from "./component/AnotherScreen"
import { createStackNavigator, createAppContainer } from "react-navigation"

// Create your stacks which allows you to navigate between screens
const TabStacks = createStackNavigator({
  Home: { screen: Home },
  AnotherScreen: { screen: AnotherScreen }
})

// always have a container for your stack
const App = createAppContainer(TabStacks);
export default App 

