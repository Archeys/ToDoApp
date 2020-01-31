import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import colors from "../constants/colors";
import textStyles from "../constants/textStyle";
import { Ionicons } from "@expo/vector-icons";
import icons from '../constants/icons'
import { getOrientationAsync } from "expo/build/ScreenOrientation/ScreenOrientation";

const ToDoItem = props => {
  const renderInteractionButtons = () => {
    if (props.renderComplete === false) {
      return (
        <View style={styles.buttonContainer}>
          <Button shadow="0"
            title={props.local.edit}
            onPress={props.onEdit.bind(this, props.id, props.title, props.iconName, props.iconColor)}
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
    <View style={styles.unitContainer}>
      <Ionicons name={props.iconName === "" ? icons.default : props.iconName}
        size={32}
        color={props.iconColor === "" ? colors.green : props.iconColor} />
      <View style={props.renderComplete ? styles.completedItemContainer : styles.listItemContainer}>

        <Text style={props.renderComplete ? textStyles.completedItem : textStyles.regularItem}>{props.title}</Text>
        {renderInteractionButtons()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    width: 300,
    backgroundColor: colors.grey,
    borderColor: "black",
    borderWidth: 0.5,
    marginVertical: 5,
    borderRadius: 5,
    marginLeft: 5
  },
  completedItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    width: 300,
    height: 36,
    backgroundColor: colors.green,
    borderColor: "black",
    borderWidth: 0.5,
    marginVertical: 5,
    borderRadius: 5,
    textDecorationLine: "line-through"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  unitContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});

export default ToDoItem;
