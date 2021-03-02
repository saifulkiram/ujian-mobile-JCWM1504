import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

import {
    Input,
    Button
} from 'react-native-elements'

import homeNavigation from '../navigation/homeNavigation'

const LoginScreen = () =>{
    return (
    <view>
        <text>Login</text>
        <input
        placeholder="username"
        value={username}
        onChangeText={setUsername}
        />
        <input
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        />
        <Button title="Login" onPress={()=>{
            NavigationPreloadManager.navigate(homeNavigation)
        }} />
    </view>
)
}

export default LoginScreen
