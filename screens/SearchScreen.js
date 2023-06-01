import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import { colorPalette } from "../constants/colorPalette";

const SearchScreen = () => {
  const [text, setText] = useState("");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchItems}>
          <Text>Search Screen</Text>
        </View>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingViewContainer}
          behavior="height"
          enabled
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search..."
              value={text}
              onChangeText={(value) => setText(value)}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchItems: {
    flex: 11,
  },
  container: {
    flex: 1,
    backgroundColor: colorPalette.appBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  keyboardAvoidingViewContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    height: 60,
    backgroundColor: colorPalette.appBackground,
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  input: {
    flex: 1,
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 4,
    padding: 10,
    alignSelf: "flex-start",
  },
});
