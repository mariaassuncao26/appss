import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/telas/Home';
import Usuarios from './src/telas/Usuario';
import Clientes from './src/telas/Clientes';
import Principal from './src/telas/Principal';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'home-outline'
            : 'bed-outline';
        } else if (route.name === 'Usuario') {
          iconName = focused ? 'person-outline' : 'body-outline';
        }else if (route.name === 'Clientes') {
          iconName = focused ? 'people-outline' : 'happy-outline';
        }
        
        //aqui define os ícones que irão aparecer nas Tabs
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#3f64c7',
      inactiveTintColor: 'gray',      
    }}    
    >
      <Tab.Screen name= "Home" component={Home}></Tab.Screen>
      <Tab.Screen name= "Usuario" component={Usuarios}></Tab.Screen>
      <Tab.Screen name= "Clientes" component={Clientes}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App(){
  const Stack = createStackNavigator();

  return(

    <NavigationContainer>
    <Stack.Navigator initialRouteName='Principal'>

      <Stack.Screen 
          name="Home" 
          component={Tabs}
          options={{
            title:'Meu Aplicativo',
            headerStyle:{
            backgroundColor: '#3f64c7',
            },
            headerTintColor: '#FFF' , 
            headerShown: true         
          }}
          >

      </Stack.Screen>
      <Stack.Screen name="Usuario" component={Usuarios}></Stack.Screen>
      <Stack.Screen name="Principal" component={Principal} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>

  );

}

