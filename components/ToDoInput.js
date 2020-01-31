import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
} from "react-native";
import colors from "../constants/colors";
import IconPicker from "../components/IconPicker";

const ToDoInput = props => {
  const [enteredTask, setEnteredTask] = useState("");
  const [selectedIcon, setSelectedIcon] = useState({ name: "", color: "" })
  const taskInputHander = enteredText => {
    setEnteredTask(enteredText);
  };

  const addToDoHandler = () => {
    props.onAddToDo(enteredTask, selectedIcon);
    setEnteredTask("");
    setSelectedIcon({ name: "", color: "" });
  };

  const onCloseHandler = () => {
    setEnteredTask("");
    setSelectedIcon({ name: "", color: "" });
    props.onClose();
  }

  const iconPassHandler = iconObject => {
    setSelectedIcon(iconObject);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.local.toDoPlaceholder}
          style={styles.input}
          onChangeText={taskInputHander}
          value={enteredTask}
        />
        <IconPicker registerIcon={iconPassHandler} icon={selectedIcon} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title={props.local.cancel}
              color={colors.red}
              onPress={onCloseHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={props.local.confirm}
              color={colors.green}
              onPress={addToDoHandler}
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

export default ToDoInput;
