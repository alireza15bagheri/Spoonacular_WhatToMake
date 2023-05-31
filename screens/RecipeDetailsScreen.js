import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { colorPalette } from "../constants/colorPalette";

const RecipeDetailsScreen = ({ route }) => {
  const recipeData = route.params.recipeData;

  // ingredients variable which defined below contains an array of objects of each ingredient different information:
  const ingredients = recipeData.extendedIngredients;
  console.log(
    ingredients.map((item) => {
      return `${item.name} - ${item.amount} ${item.unit}`;
    })
  );

  const summaryText = recipeData.summary
    ?.replace(/<\/?b>/g, " ")
    .replace(/<a.*?>(.*?)<\/a>/gi, "");

  const sentences = summaryText.split(". ");
  sentences.pop();
  const finalSummaryText = sentences.join(". ") + ".";
  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView contextContainerStyle={styles.container}>
          <View style={styles.detailsContainer}>
            <Image style={styles.FoodImg} source={{ uri: recipeData.image }} />
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{recipeData.title}</Text>
            </View>
            <View style={styles.summary}>
              <Text>{finalSummaryText}</Text>
            </View>
            <View style={styles.ingredientsContainer}>
              <Text style={styles.ingredientsTitle}>Ingredients:</Text>
              <Text>FOOD INGREDIENTS:</Text>
              <Text>Ingredient Item</Text>
              <Text>Ingredient Item</Text>
              <Text>Ingredient Item</Text>
              <Text>Ingredient Item</Text>
              <Text>Ingredient Item</Text>
              <Text>Ingredient Item</Text>
              <Text>Ingredient Item</Text>
              <Text>Ingredient Item</Text>
              <Text>Ingredient Item</Text>
              <Text>Ingredient Item</Text>
              <Text>Ingredient Item</Text>
            </View>
            <View style={styles.recipe}>
              <Text>Recipe:</Text>
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
    backgroundColor: "#ffe866",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffe866",
    // alignItems: "center",
  },
  detailsContainer: {
    backgroundColor: colorPalette.beige,
    padding: 10,
    marginTop: 25,
    marginHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colorPalette.darkRed,
    fontFamily: "Vazir",
    // alignItems: "center",
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
  ingredientsTitle: {
    textAlign: "center",
    fontWeight: 600,
  },
  recipe: {
    marginTop: 25,
  },
});
