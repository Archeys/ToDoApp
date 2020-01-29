import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";
import ToDoItem from "./ToDoItem";
import colors from "../constants/colors";

const ToDoEdit = props => {
  const [enteredTask, setEnteredTask] = useState(props.toDoData.value);
  const taskInputHander = enteredText => {
    setEnteredTask(enteredText);
  };

  const EditHandler = () => {
    props.onEdit.bind(this, props.toDoData.id, enteredTask);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={Styles.inputContainer}>
        <TextInput
          style={Styles.input}
          onChangeText={taskInputHander}
          value={enteredTask}
          key={props.toDoData.value}
        />
        <View style={Styles.buttonContainer}>
          <View style={Styles.button}>
            <Button
              title={props.local.cancel}
              color={colors.red}
              onPress={props.onClose}
            />
          </View>
          <View style={Styles.button}>
            <Button
              title={props.local.confirm}
              color={colors.green}
              onPress={EditHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const Styles = StyleSheet.create({
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
    width: "60%"
  },
  button: {
    padding: 10,
    width: "50%"
  }
});

export default ToDoEdit;
