import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import textStyle from "../constants/textStyle";
import colors from "../constants/colors";
import DismissKeyboard from "../components/DismissKeyboard";
import Local from "../locals/localisation";
import Header from "../components/Header";

const WelcomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [languageState, setLanguageState] = useState(Local.en)
  const [lvLanguageStatus, setLvLanguageStatus] = useState(false);
  const [enLanguageStatus, setEnLanguageStatus] = useState(false);
  const onLanguageSelect = lang => {
    if (lang === "en") {
      setLanguageState(Local.en)
      setEnLanguageStatus(true);
      setLvLanguageStatus(false);
    } else if (lang === "lv") {
      setLanguageState(Local.lv)
      setLvLanguageStatus(true);
      setEnLanguageStatus(false);
    }
  };

  const navigationHandler = () => {
    navigation.navigate("ToDoList", { lang: languageState, user: username })
  }

  const userInputHandler = inputText => {
    setUsername(inputText);
  };
  return (
    <DismissKeyboard>
      <View style={styles.screen}>
        <Header user={username} local={languageState} />
        <View style={styles.languageContainer}>
          <TouchableOpacity onPress={onLanguageSelect.bind(this, "lv")}>
            <View
              style={
                lvLanguageStatus
                  ? styles.selectedLanguageItem
                  : styles.languageItem
              }
            >
              <Image source={require("../assets/Latvia.png")} />
              <Text style={textStyle.regularText}>{languageState.lat}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onLanguageSelect.bind(this, "en")}>
            <View
              style={
                enLanguageStatus
                  ? styles.selectedLanguageItem
                  : styles.languageItem
              }
            >
              <Image source={require("../assets/United-Kingdom.png")} />
              <Text style={textStyle.regularText}>{languageState.eng}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.usernameInputContainer}>
          <Text style={textStyle.regularText}>{languageState.name}: </Text>
          <TextInput
            style={styles.usernameInput}
            onChangeText={userInputHandler}
            placeholder={languageState.inputNamePlaceholder}
            value={username}
          ></TextInput>
        </View>
        <View style={styles.confirmButton}>
          <Button
            title={languageState.confirm}
            color={colors.green}
            onPress={navigationHandler}
          />
        </View>
      </View>
    </DismissKeyboard>
  );
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30
  },
  languageContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 100,
    paddingBottom: 30,
    width: "80%"
  },
  languageItem: {
    alignItems: "center",
  },
  selectedLanguageItem: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.green,
    borderRadius: 10,
    padding: 10
  },
  usernameInputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  usernameInput: {
    borderBottomWidth: 1,
    width: 200
  },
  confirmButton: {
    padding: 30
  }
});

export default WelcomeScreen;
