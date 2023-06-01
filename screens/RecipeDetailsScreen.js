import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

import { colorPalette } from "../constants/colorPalette";

const RecipeDetailsScreen = ({ route }) => {
  const recipeData = route.params.recipeData;

  // ingredients variable which defined below contains an array of objects of each ingredient different information:
  const ingredients = recipeData.extendedIngredients.map((item) => {
    return `${item.name} - ${item.amount} ${item.unit}`;
  });

  const instructions = recipeData.instructions;

  const sourceUrl = recipeData.spoonacularSourceUrl;

  const summaryText = recipeData.summary
    ?.replace(/<\/?b>/g, " ")
    .replace(/<a.*?>(.*?)<\/a>/gi, "");

    // Remove Last Sentence which is the source link from summary:
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
              <Text style={styles.sectionText}>{instructions.replace(/<\/?ol>/gi, " ").replace(/<li>/gi, "--").replace(/<\/?li>/gi, "\n\n")}</Text>
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
    paddingBottom: 5
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
    fontSize: 18
  },
  recipe: {
    marginTop: 25,
  },
  sectionText: {
    marginTop: 15,
    fontSize: 16
  }
});
