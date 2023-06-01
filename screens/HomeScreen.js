import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { useFonts } from "expo-font";

import { colorPalette } from "../constants/colorPalette";
import { getRandomRecipe } from "../services/Spoonacular";

const HomeScreen = ({ navigation }) => {
  const [randomRecipe, setRandomRecipe] = useState({});

  const handleSearchPress = () => {
    navigation.navigate("Search");
  };

  const handleFavoritesPress = () => {
    navigation.navigate("Favorites");
  };

  const handleShowRecipePress = async () => {
    navigation.navigate("RecipeDetails", { recipeData: randomRecipe });
  };

  const [loaded] = useFonts({
    Montserrat: require("../fonts/Montserrat-Regular.ttf"),
  });

  const randomRecipeRun = async () => {
    const recipe = await getRandomRecipe();
    setRandomRecipe(recipe.recipes[0]);
  };

  useEffect(() => {
    randomRecipeRun();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.randomRecipe}>
          <Text style={styles.aboveImgText}>Random Food</Text>
          <Image
            source={{ uri: randomRecipe.image }}
            style={styles.randomFoodImg}
          />
          <Text style={styles.foodName}>{randomRecipe.title}</Text>
          <Text style={styles.foodSummary}>
            {randomRecipe.summary?.replace(/<\/?b>/g, " ").substring(0, 135)}...
          </Text>
          <View style={styles.randomSectionButtonsContainer}>
            <View>
              <Button
                style={styles.randomSectionButton}
                buttonColor="#335c67"
                textColor="#FFF"
                onPress={() => randomRecipeRun()}
                labelStyle={styles.buttonLabel}
              >
                New Random Food Recipe
              </Button>
            </View>
            <View>
              <Button
                style={styles.randomSectionButton}
                buttonColor="#335c67"
                textColor="#FFF"
                onPress={() => handleShowRecipePress()}
                labelStyle={styles.buttonLabel}
              >
                Show Food Recipe
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.menuButtonSection}>
          <Button
            buttonColor="#335c67"
            mode="contained"
            onPress={() => handleSearchPress()}
            labelStyle={styles.buttonLabel}
          >
            Search Recipes
          </Button>
        </View>
        <View style={styles.menuButtonSection}>
          <Button
            buttonColor="#335c67"
            mode="contained"
            onPress={() => handleFavoritesPress()}
            labelStyle={styles.buttonLabel}
          >
            Favorites
          </Button>
        </View>
        <View style={[styles.menuButtonSection, { alignItems: "center" }]}>
          <IconButton
            buttonColor="#335c67"
            icon="information-outline"
            size={40}
            mode="contained"
            labelStyle={styles.buttonLabel}
            onPress={() => alert("developed and designed by Alireza Bagheri.")}
          >
            Info
          </IconButton>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.appBackground,
  },
  randomRecipe: {
    backgroundColor: colorPalette.beige,
    padding: 10,
    marginTop: 25,
    marginHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colorPalette.darkRed,
    fontFamily: "Montserrat",
    alignItems: "center",
  },
  menuButtonSection: {
    marginTop: 10,
    marginHorizontal: 95,
    borderRadius: 8,
    borderColor: colorPalette.darkRed,
  },
  buttonLabel: {
    fontFamily: "Montserrat",
    fontWeight: 700,
  },
  aboveImgText: {
    marginVertical: 10,
    fontFamily: "Montserrat",
    fontWeight: 700,
  },
  randomFoodImg: {
    width: "100%",
    height: 230,
    borderRadius: 8,
  },
  foodName: {
    marginVertical: 20,
    fontFamily: "Montserrat",
  },
  foodSummary: {
    marginBottom: 20,
    fontFamily: "Montserrat",
  },
  randomSectionButtonsContainer: {
    justifyContent: "space-between",
    width: "70%",
  },
  randomSectionButton: {
    marginVertical: 5,
  },
});
