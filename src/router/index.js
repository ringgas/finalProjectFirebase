import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, AddBoard} from '../pages'

const Stack = createStackNavigator();

const Router = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="AddBoard" component={AddBoard}   options={{ title: 'Add Board' }}/>
       
      </Stack.Navigator>
    )
}

export default Router