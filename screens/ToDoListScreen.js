import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import ToDoInput from "../components/ToDoInput";
import ToDoItem from "../components/ToDoItem";
import ToDoEdit from "../components/ToDoEdit";
import Header from "../components/Header";

const ToDoListScreen = ({ navigation }) => {
  const [toDoList, setToDoList] = useState([]);
  const [isToDoAddMode, setIsToDoAddMode] = useState(false);
  const [renderStatus, setRenderStatus] = useState(false);
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
    console.log("changing item....")
    setToDoList(currentTasks =>
      currentTasks.map(item =>
        item.id === toDoId ? { ...item, value: changedValue } : item
      )
    );
    console.log("changed item!")
    console.log("Closing...")
    setIsEditMode(false);
    console.log("Closed!")
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
      <Button
        title={languageState.addTask}
        onPress={() => setIsToDoAddMode(true)}
      ></Button>
      <FlatList
        data={
          renderStatus
            ? toDoList.filter(item => item.completeStatus === renderStatus)
            : toDoList.filter(item => item.completeStatus === renderStatus)
        }
        renderItem={itemData => (
          <ToDoItem
            id={itemData.item.id}
            title={itemData.item.value}
            onComplete={completeToDoHandler}
            onEdit={editDataHandler}
            local={languageState}
            completeState={renderStatus}
          />
        )}
      ></FlatList>
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
          title={!renderStatus ? languageState.showDone : languageState.showToDo}
          onPress={() => {
            setRenderStatus(!renderStatus);
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
    width: "100%",
    alignItems: "center"
  },
  switchContainer: {
    paddingBottom: 100
  }
});

export default ToDoListScreen;
