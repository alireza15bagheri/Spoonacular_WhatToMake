import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import { IconButton, TextInput } from "react-native-paper";

import { colorPalette } from "../constants/colorPalette";
import { getRecipeByFoodName } from "../services/Spoonacular";
import ListItem from "../components/ListItem";

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [recipes, setRecipes] = useState(undefined);

  const renderItem = ({ item }) => (
    <ListItem title={item.title} itemId={item.id} navigation={navigation} />
  );

  const searchButtonPressHandle = async () => {
    try {
      const searchedRecipes = (await getRecipeByFoodName(searchText)).data
        .results;
      setRecipes(searchedRecipes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchItems}>
          {recipes ? (
            <FlatList
              // Pass list of Recipes fetched from search query of spoonacular api:
              data={recipes}
              // how each item should be rendered:
              renderItem={renderItem}
              // unique id for each item:
              keyExtractor={(item) => item.id.toString()}
            />
          ) : (
            <Text>No Recipes Found...</Text>
          )}
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
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <IconButton
              icon="magnify"
              mode="contained"
              size={45}
              onPress={() => searchButtonPressHandle()}
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
    flexDirection: "row",
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  inputContainer: {
    flex: 10,
    height: 80,
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
  buttonContainer: {
    flex: 2,
    paddingVertical: 2,
    height: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 25,
  },
});
