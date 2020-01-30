import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import ToDoInput from "../components/ToDoInput";
import ToDoItem from "../components/ToDoItem";
import ToDoEdit from "../components/ToDoEdit";
import Header from "../components/Header";
import colors from "../constants/colors";

const ToDoListScreen = ({ navigation }) => {
  const [toDoList, setToDoList] = useState([]);
  const [isToDoAddMode, setIsToDoAddMode] = useState(false);
  const [renderCompleteStatus, setRenderCompleteStatus] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({ id: 0.1, value: "" });
  const [languageState, setLanguageState] = useState(navigation.getParam("lang"))
  const [username, setUserName] = useState(navigation.getParam("user"))

  const addToDoHandler = ToDoTitle => {
    setToDoList(currentTasks => [
      ...currentTasks,
      { id: Math.random().toString(), value: ToDoTitle, completeStatus: false }
    ]);
    setIsToDoAddMode(false);
  };

  const completeToDoHandler = toDoId => {
    setToDoList(currentTasks =>
      currentTasks.map(item =>
        item.id === toDoId ? { ...item, completeStatus: true } : item
      )
    );
  };

  const editItemHandler = (toDoId, changedValue) => {
    setToDoList(currentTasks =>
      currentTasks.map(item =>
        item.id === toDoId ? { ...item, value: changedValue } : item
      )
    );
    setIsEditMode(false);
  };

  const editDataHandler = (toDoId, toDoValue) => {
    setItemToEdit({ id: toDoId, value: toDoValue });

    setIsEditMode(true);
  };

  const onTextEdit = (text) => {
    setItemToEdit(currentItem => currentItem = { ...currentItem, value: text })
  }

  const closeToDoAdditionHandler = () => {
    setIsToDoAddMode(false);
  };

  const closeEditModeHandler = () => {
    setIsEditMode(false);
  };

  return (
    <View style={styles.screen}>
      <Header user={username} local={languageState} />
      <View style={styles.addButton}>
        <Button
          title={languageState.addTask}
          onPress={() => setIsToDoAddMode(true)}
        ></Button>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={
            renderCompleteStatus
              ? toDoList.filter(item => item.completeStatus === renderCompleteStatus)
              : toDoList.filter(item => item.completeStatus === renderCompleteStatus)
          }
          renderItem={itemData => (
            <ToDoItem
              id={itemData.item.id}
              title={itemData.item.value}
              onComplete={completeToDoHandler}
              onEdit={editDataHandler}
              local={languageState}
              renderComplete={renderCompleteStatus}
            />
          )}
        ></FlatList>
      </View>
      <ToDoInput
        onClose={closeToDoAdditionHandler}
        onAddToDo={addToDoHandler}
        visible={isToDoAddMode}
        local={languageState}
      />
      <ToDoEdit
        onEdit={editItemHandler}
        onTextChange={onTextEdit}
        toDoData={itemToEdit}
        visible={isEditMode}
        local={languageState}
        onClose={closeEditModeHandler}
      />
      <View style={styles.switchContainer}>
        <Button
          title={!renderCompleteStatus ? languageState.showDone : languageState.showToDo}
          onPress={() => {
            setRenderCompleteStatus(!renderCompleteStatus);
          }}
          color={colors.purple}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
    width: "100%",
    alignItems: "center"
  },
  switchContainer: {
    paddingBottom: 100,
    width: "80%"
  },
  addButton: {
    width: "50%",
    paddingTop: 20
  },
  listContainer: {
    height: "60%",
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default ToDoListScreen;
