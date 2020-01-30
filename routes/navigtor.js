import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import WelcomeScreen from '../screens/WelcomeScreen';
import ToDoListScreen from '../screens/ToDoListScreen';
import Header from '../components/Header';

const screens = {
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    ToDoList: {
        screen: ToDoListScreen,
        navigationOptions: {
            headerShown: false
        }
    },
}

const ScreenStack = createStackNavigator(screens);

export default createAppContainer(ScreenStack);