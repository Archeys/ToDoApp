import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

const Header = props => {

  const username = props.user;
  const generateHeaderContent = () => {
    if (username === "" || username === undefined) {
      return props.local.welcomeMessage;
    } else {
      return props.local.welcome + username + "!";
    }
  }

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{generateHeaderContent()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "15%",
    backgroundColor: colors.grey,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold"
  }
});

export default Header;
