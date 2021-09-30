import React from 'react'

//imports for navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//importing Screens
import IndexScreen from "./src/Screens/IndexScreen"

//importing "react-native components"
import { Text } from 'react-native'


const navigator = createStackNavigator({
  Index : IndexScreen
},
{
  initialRouteName : "Index",
  defaultNavigationOptions : {
      headerShown: false,
  }
}
)

const App = createAppContainer(navigator);


export default App
