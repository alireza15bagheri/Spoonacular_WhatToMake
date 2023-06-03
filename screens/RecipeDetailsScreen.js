import React, { useState, useEffect } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colorPalette } from "../constants/colorPalette";

const RecipeDetailsScreen = ({ route }) => {
  const recipeData = route.params.recipeData;
  const [foodIsFavorite, setFoodIsFavorite] = useState(false);

  // ingredients variable which defined below contains an array of objects of each ingredient different information:
  const ingredients = recipeData.extendedIngredients.map((item) => {
    return `${item.name} - ${item.amount} ${item.unit}`;
  });

  const instructions = recipeData.instructions;
  const recipeId = recipeData.id.toString();

  const sourceUrl = recipeData.spoonacularSourceUrl;

  const summaryText = recipeData.summary
    ?.replace(/<\/?b>/g, " ")
    .replace(/<a.*?>(.*?)<\/a>/gi, "");

  // Remove Last Sentence which is the source link from summary:
  const sentences = summaryText.split(". ");
  sentences.pop();
  const finalSummaryText = sentences.join(". ") + ".";

  const openSourceOnPressHandler = (sourceURL) => {
    Linking.openURL(sourceURL).catch((err) =>
      console.error("An error occurred: ", err)
    );
  };

  // Check if The Food Is in Favorites List or Not:
  useEffect(() => {
    const getFoodIsFavorite = async () => {
      try {
        const value = await AsyncStorage.getItem(recipeId.toString());
        setFoodIsFavorite(value !== null);
      } catch (error) {
        console.log(error);
      }
    };

    getFoodIsFavorite();
  }, [recipeId]);

  const addToFavoritesOnPressHandler = async (foodId) => {
    try {
      const value = await AsyncStorage.getItem(foodId.toString());
      if (value == null) {
        await AsyncStorage.setItem(foodId, foodId);
        setFoodIsFavorite(true);
      }
    } catch (e) {
      console.log(e);
    }
    // Show All Keys
    // AsyncStorage.getAllKeys()
    //   .then((keys) => {
    //     return AsyncStorage.multiGet(keys).then((result) => {
    //       console.log(result);
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const removeFromFavoritesOnPressHandler = async () => {
    try {
      const value = await AsyncStorage.getItem(recipeId.toString());
      if (value != null) {
        await AsyncStorage.removeItem(recipeId.toString());
        setFoodIsFavorite(false);
      }
    } catch (e) {
      console.log(e);
    }

    // Show All Keys
    // AsyncStorage.getAllKeys()
    //   .then((keys) => {
    //     return AsyncStorage.multiGet(keys).then((result) => {
    //       console.log(result);
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView contextContainerStyle={styles.container}>
          <View style={styles.detailsContainer}>
            <Image style={styles.FoodImg} source={{ uri: recipeData.image }} />
            <View style={styles.titleContainer}>
              <Text style={styles.sectionTitle}>{recipeData.title}</Text>
            </View>
            <View style={styles.summary}>
              <Text style={styles.sectionText}>{finalSummaryText}</Text>
            </View>
            <View style={styles.ingredientsContainer}>
              <Text style={styles.sectionTitle}>INGREDIENTS</Text>
              <Text style={styles.sectionText}>{ingredients.join("\n")}</Text>
            </View>
            <View style={styles.recipe}>
              <Text style={styles.sectionTitle}>Recipe</Text>
              <Text style={styles.sectionText}>
                {instructions
                  .replace(/<\/?ol>/gi, " ")
                  .replace(/<li>/gi, "--")
                  .replace(/<\/?li>/gi, "\n\n")}
              </Text>
            </View>

            <View style={styles.buttonsContainer}>
              <Button
                buttonColor={colorPalette.blue}
                mode="contained"
                onPress={() => openSourceOnPressHandler(sourceUrl)}
              >
                View Source
              </Button>
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                buttonColor={
                  foodIsFavorite ? colorPalette.red : colorPalette.blue
                }
                textColor="#FFF"
                onPress={() =>
                  foodIsFavorite
                    ? removeFromFavoritesOnPressHandler(recipeId)
                    : addToFavoritesOnPressHandler(recipeId)
                }
              >
                {foodIsFavorite ? "Remove From Favorites" : "Add To Favorites"}
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorPalette.appBackground,
    paddingBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: colorPalette.appBackground,
  },
  detailsContainer: {
    backgroundColor: colorPalette.beige,
    padding: 10,
    marginTop: 25,
    marginHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colorPalette.darkRed,
  },
  buttonsContainer: {
    paddingHorizontal: 50,
    paddingTop: 15,
  },
  FoodImg: {
    width: "100%",
    height: 230,
    borderRadius: 8,
  },
  titleContainer: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
  },
  summary: {
    marginTop: 15,
  },
  titleText: {
    fontSize: 18,
  },
  ingredientsContainer: {
    marginTop: 15,
  },
  sectionTitle: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 18,
  },
  recipe: {
    marginTop: 25,
  },
  sectionText: {
    marginTop: 15,
    fontSize: 16,
  },
});
