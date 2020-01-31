import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import ToDoInput from "../components/ToDoInput";
import ToDoItem from "../components/ToDoItem";
import ToDoEdit from "../components/ToDoEdit";
import Header from "../components/Header";
import colors from "../constants/colors";
import icons from '../constants/icons'

const ToDoListScreen = ({ navigation }) => {
  const [toDoList, setToDoList] = useState([]);
  const [isToDoAddMode, setIsToDoAddMode] = useState(false);
  const [renderCompleteStatus, setRenderCompleteStatus] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({ id: 0.1, value: "", iconName: "", iconColor: "" });
  const [languageState, setLanguageState] = useState(navigation.getParam("lang"))
  const [username, setUserName] = useState(navigation.getParam("user"))

  const addToDoHandler = (ToDoTitle, ToDoIcon) => {
    setToDoList(currentTasks => [
      ...currentTasks,
      { id: Math.random().toString(), value: ToDoTitle, completeStatus: false, iconName: ToDoIcon.name, iconColor: ToDoIcon.color }
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

  const editItemHandler = (toDoId, changedValue, changedIconName, changedIconColor) => {
    setToDoList(currentTasks =>
      currentTasks.map(item =>
        item.id === toDoId ? { ...item, value: changedValue, iconName: changedIconName, iconColor: changedIconColor } : item
      )
    );
    setIsEditMode(false);
  };

  const editDataHandler = (toDoId, toDoValue, toDoIconName, toDoIconColor) => {
    setItemToEdit({ id: toDoId, value: toDoValue, iconName: toDoIconName, iconColor: toDoIconColor });

    setIsEditMode(true);
  };

  const onTextEdit = (text) => {
    setItemToEdit(currentItem => currentItem = { ...currentItem, value: text })
  }

  const onIconEdit = (iconObj) => {
    setItemToEdit(currentItem => currentItem = { ...currentItem, iconName: iconObj.name, iconColor: iconObj.color })
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
              iconName={itemData.item.iconName}
              iconColor={itemData.item.iconColor}
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
        onIconChange={onIconEdit}
      />
      <View style={styles.switchContainer}>
        <Button
          title={renderCompleteStatus ? languageState.showToDo : languageState.showDone}
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
