import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colorPalette } from "../constants/colorPalette";
import { Button } from "react-native-paper";
import { useFonts } from "expo-font";
import { getRecipeByFoodName, getRandomRecipe } from "../services/Spoonacular";

const HomeScreen = ({ navigation }) => {
  const [randomRecipe, setRandomRecipe] = useState({});

  const handleSearchPress = () => {
    navigation.navigate("Search");
  };

  const handleFavoritesPress = () => {
    navigation.navigate("Favorites");
  };

  const handleShowRecipePress = async () => {
    console.log(randomRecipe.image);
    navigation.navigate("RecipeDetails");
  };

  const [loaded] = useFonts({
    Vazir: require("../fonts/Vazir.ttf"),
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
          <Text style={styles.aboveImgText}>غذای تصادفی:</Text>
          <Image
            source={{ uri: randomRecipe.image }}
            style={styles.randomFoodImg}
          />
          <Text style={styles.foodName}>{randomRecipe.title}</Text>
          <Text style={styles.foodSummary}>
            {randomRecipe.summary?.replace(/<\/?b>/g, " ").substring(0, 150)}...
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
                نمایش دستور پخت تصادفی جدید
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
                نمایش دستور پخت
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Button
            buttonColor="#335c67"
            mode="contained"
            onPress={() => handleSearchPress()}
            labelStyle={styles.buttonLabel}
          >
            جست و جوی دستور پخت
          </Button>
        </View>
        <View style={styles.section}>
          <Button
            buttonColor="#335c67"
            mode="contained"
            onPress={() => handleFavoritesPress()}
            labelStyle={styles.buttonLabel}
          >
            مورد علاقه ها
          </Button>
        </View>
        <View style={styles.section}>
          <Button
            buttonColor="#335c67"
            mode="contained"
            labelStyle={styles.buttonLabel}
            onPress={() => alert("developed and designed by Alireza Bagheri.")}
          >
            اطلاعات بیشتر
          </Button>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe866",
  },
  randomRecipe: {
    backgroundColor: colorPalette.beige,
    padding: 10,
    marginTop: 25,
    marginHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colorPalette.darkRed,
    fontFamily: "Vazir",
    alignItems: "center",
  },
  section: {
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 8,
    fontFamily: "Vazir",
    borderColor: colorPalette.darkRed,
  },
  buttonLabel: {
    fontFamily: "Vazir",
  },
  aboveImgText: {
    marginVertical: 10,
    fontFamily: "Vazir",
  },
  randomFoodImg: {
    width: "100%",
    height: 230,
    borderRadius: 8,
  },
  foodName: {
    marginVertical: 20,
    fontFamily: "Vazir",
  },
  foodSummary: {
    marginBottom: 20,
    fontFamily: "Vazir",
  },
  randomSectionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  randomSectionButton: {
    marginHorizontal: 5,
  },
});
