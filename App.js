import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./components/Header";
import WelcomeScreen from "./screens/WelcomeScreen";
import Local from "./locals/localisation";
import ToDoListScreen from "./screens/ToDoListScreen";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Navigator from "./routes/navigtor"

const App = () => {
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 30
  }
});

export default App;
