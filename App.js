import React from "react";
import { StyleSheet } from "react-native";
import Navigator from "./routes/navigator"

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
