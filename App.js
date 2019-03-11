import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'


import SignUp from './app/pages/SignUp';
import Loading from './app/pages/Loading';
import Main from './app/pages/Main';
import Login from './app/pages/Login';

// create our app's navigation stack
const App = SwitchNavigator({
    Loading,
    SignUp,
    Login,
    Main
}, {
    initialRouteName: 'Loading'
})


export default App