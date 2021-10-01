import React from 'react'

//imports for navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//importing Screens & Components
import IndexScreen from "./src/Screens/IndexScreen"
import SingleScreen from "./src/Screens/SingleUser"

import Header from "./src/Components/IndexScreenComponents/Header"
//importing "react-native components"
import { Text } from 'react-native'
import SingleUser from './src/Screens/SingleUser';


const navigator = createStackNavigator({
  Index : IndexScreen,
  Single : SingleUser
},
{
  initialRouteName : "Index",
  defaultNavigationOptions : {
      headerShown: false,
      // headerTitle : () => <Header/>,
      // headerStyle: {
      //   backgroundColor: 'red',
      // },
  }
}
)

const App = createAppContainer(navigator);


export default App
