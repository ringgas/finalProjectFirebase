import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, AddBoard, EditBoards, SignUp, Login} from '../pages'

const Stack = createStackNavigator();

const Router = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}   options={{ title: 'Login' }}/>
        <Stack.Screen name="SignUp" component={SignUp}   options={{ title: 'Daftar Akun' }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown:false }} />
        <Stack.Screen name="AddBoard" component={AddBoard}   options={{ title: 'Tambah Laporan' }}/>
        <Stack.Screen name="EditBoards" component={EditBoards}   options={{ title: 'Update Boards' }}/>
       
      </Stack.Navigator>
    )
}

export default Router