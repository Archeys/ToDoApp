import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import WelcomeScreen from "./screens/WelcomeScreen";
import Local from "./locals/localisation";
import ToDoListScreen from "./screens/ToDoListScreen";

export default function App() {
  const [username, setUsername] = useState("");
  const [screenStatus, setScreenStatus] = useState(0);
  const [localisation, setLocalisation] = useState(Local.en);

  const onLanguageUpdate = lang => {
    if (lang === "en") {
      setLocalisation(Local.en);
    } else if (lang === "lv") {
      setLocalisation(Local.lv);
    }
    console.log(localisation);
  };

  const introComplete = user => {
    setUsername(user);
    setScreenStatus(1);
  };

  const renderPageContent = () => {
    if (screenStatus === 0) {
      return (
        <WelcomeScreen
          local={localisation}
          onLanguageChange={onLanguageUpdate}
          onCompleteWelcome={introComplete}
        />
      );
    } else if (screenStatus === 1) {
      return <ToDoListScreen local={localisation} />;
    } else if (screenStatus === 2) {
    }
  };

  let pageContent = (
    <WelcomeScreen
      local={localisation}
      onLanguageChange={onLanguageUpdate}
      onCompleteWelcome={introComplete}
    />
  );

  const titleStatusHandler = () => {
    if (screenStatus != 0) {
      if (username !== "" || username !== NaN || username !== undefined) {
        return localisation.welcome + username + "!";
      } else {
        return "Welcome, unregistered user!";
      }
    } else {
      return localisation.welcomeMessage;
    }
  };

  return (
    <View style={styles.screen}>
      <Header title={titleStatusHandler()} lang={localisation} />
      {renderPageContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 30
  }
});
