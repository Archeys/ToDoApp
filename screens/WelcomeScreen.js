import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Picker,
  Text,
  Button,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import textStyle from "../constants/textStyle";
import colors from "../constants/colors";
import DismissKeyboard from "../components/DismissKeyboard";

const WelcomeScreen = props => {
  const [username, setUsername] = useState("");
  const [lvLanguageStatus, setLvLanguageStatus] = useState(false);
  const [enLanguageStatus, setEnLanguageStatus] = useState(false);
  const onLanguageSelect = lang => {
    if (lang === "en") {
      setEnLanguageStatus(true);
      setLvLanguageStatus(false);
      props.onLanguageChange("en");
    } else if (lang === "lv") {
      setLvLanguageStatus(true);
      setEnLanguageStatus(false);
      props.onLanguageChange("lv");
    }
  };

  const onWelcomeConfirmHandler = () => {
    props.onCompleteWelcome(username);
  };

  const userInputHandler = inputText => {
    setUsername(inputText);
    console.log(inputText);
  };
  return (
    <DismissKeyboard>
      <View style={styles.screen}>
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
              <Text style={textStyle.regularText}>{props.local.lat}</Text>
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
              <Text style={textStyle.regularText}>{props.local.eng}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.usernameInputContainer}>
          <Text style={textStyle.regularText}>{props.local.name}: </Text>
          <TextInput
            style={styles.usernameInput}
            onChangeText={userInputHandler}
            placeholder={props.local.inputNamePlaceholder}
          ></TextInput>
        </View>
        <View style={styles.confirmButton}>
          <Button
            title={props.local.confirm}
            color={colors.green}
            onPress={onWelcomeConfirmHandler}
          />
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  languageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 100,
    paddingBottom: 50
  },
  languageItem: {
    alignItems: "center",
    justifyContent: "center"
  },
  selectedLanguageItem: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.green,
    borderRadius: 10
  },
  usernameInputContainer: {
    flexDirection: "row",
    alignItems: "flex-end"
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
