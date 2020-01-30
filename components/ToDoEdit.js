import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Keyboard } from "react-native";
import ToDoItem from "./ToDoItem";
import colors from "../constants/colors";

const ToDoEdit = props => {

  const taskInputHander = enteredText => {
    props.onTextChange(enteredText);
  };

  const editHandler = () => {
    props.onEdit(props.toDoData.id, props.toDoData.value);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={taskInputHander}
          value={props.toDoData.value}

        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title={props.local.cancel}
              color={colors.red}
              onPress={props.onClose}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={props.local.confirm}
              color={colors.green}
              onPress={editHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "80%"
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%"
  },
  button: {
    padding: 10,
    width: "50%"
  }
});

export default ToDoEdit;
