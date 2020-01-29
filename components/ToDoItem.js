import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
  Button
} from "react-native";
import colors from "../constants/colors";

const ToDoItem = props => {
  const renderInteractionButtons = () => {
    if (props.completeState === false) {
      return (
        <View style={styles.buttonContainer}>
          <Button
            title={props.local.edit}
            onPress={props.onEdit.bind(this, props.id, props.title)}
            color={colors.green}
          ></Button>
          <Button
            onPress={props.onComplete.bind(this, props.id)}
            title={props.local.done}
          ></Button>
        </View>
      );
    }
  };

  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
      {renderInteractionButtons()}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    width: 300,
    backgroundColor: colors.grey,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 5
  },
  buttonContainer: {
    flexDirection: "row"
  }
});

export default ToDoItem;
