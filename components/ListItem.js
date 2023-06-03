import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import { getRecipeById } from "../services/Spoonacular";

const ListItem = ({ title, itemId, navigation }) => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      const fetchedRecipe = await getRecipeById(itemId);
      setRecipe(fetchedRecipe);
      setLoading(false);
    };
    fetchRecipe();
  }, []);

  const onRecipeDetailsPressHandler = async () => {
    const result = await getRecipeById(itemId);
    // console.log(result);
    navigation.navigate("RecipeDetails", { recipeData: result });
  };

  return (
    <View style={styles.container}>
      {!loading && (
        <>
          <IconButton
            icon="dots-horizontal"
            mode="contained"
            size={35}
            onPress={() => onRecipeDetailsPressHandler()}
          />
          <Text style={styles.title}>
            {title}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    paddingRight: 130,
  },
});

export default ListItem;
