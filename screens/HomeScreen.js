import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colorPallete } from "../constants/colorPallete";

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.randomRecipe}>
          <Text>Random Recipe</Text>
          <Text>Random Recipe</Text>
          <Text>Random Recipe</Text>
          <Text>Random Recipe</Text>
          <Text>Random Recipe</Text>
          <Text>Random Recipe</Text>
          <Text>Random Recipe</Text>
          <Text>Random Recipe</Text>
          <Text>Random Recipe</Text>
        </View>
        <View style={styles.section}>
          <Text>Search Recipes</Text>
        </View>
        <View style={styles.section}>
          <Text>Favorites</Text>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  randomRecipe:{
    backgroundColor: colorPallete.beige,
    padding: 10,
    marginTop: 25,
    marginHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colorPallete.darkRed,
  },
  section: {
    backgroundColor: colorPallete.beige,
    padding: 10,
    marginVertical: 25,
    marginHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colorPallete.darkRed,
  },
});
