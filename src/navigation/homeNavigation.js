import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

//import drawer

const homeNavigation = () => {
    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Screen name="Home"  />
            <Tab.Screen name="Live Update Detail"/>
        </NavigationContainer>

    )
}

export default homeNavigation