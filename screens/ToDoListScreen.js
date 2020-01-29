import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import ToDoInput from "../components/ToDoInput";
import ToDoItem from "../components/ToDoItem";
import ToDoEdit from "../components/ToDoEdit";

const ToDoListScreen = props => {
  const [toDoList, setToDoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [isToDoAddMode, setIsToDoAddMode] = useState(false);
  const [renderStatus, setRenderStatus] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({ id: 0.1, value: "" });

  const getItemToEdit = () => {
    return itemToEdit;
  };

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

  const closeToDoAdditionHandler = () => {
    setIsToDoAddMode(false);
  };

  const closeEditModeHandler = () => {
    setIsEditMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button
        title={props.local.addTask}
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
            local={props.local}
            completeState={renderStatus}
          />
        )}
      ></FlatList>
      <ToDoInput
        onClose={closeToDoAdditionHandler}
        onAddToDo={addToDoHandler}
        visible={isToDoAddMode}
        local={props.local}
      />
      <ToDoEdit
        onEdit={editItemHandler}
        toDoData={getItemToEdit()}
        visible={isEditMode}
        local={props.local}
        onClose={closeEditModeHandler}
      />
      <View style={styles.switchContainer}>
        <Button
          title={!renderStatus ? props.local.showDone : props.local.showToDo}
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
