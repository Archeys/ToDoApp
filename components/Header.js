import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
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
