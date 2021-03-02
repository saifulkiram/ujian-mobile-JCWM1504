import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import {Homenav} from './homeNavigation'

const DrawerNavigation = () =>{
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={Homenav}/>
            <Drawer.Screen name="Account"/>
        </Drawer.Navigator>
    )
}