import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ListItem from "../components/ListItem";
import { getRecipeById } from "../services/Spoonacular";
import { colorPalette } from "../constants/colorPalette";
import { useIsFocused } from '@react-navigation/native';

const FavoritesScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState(undefined);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchData = async () => {
      AsyncStorage.getAllKeys()
        .then((keys) => {
          return AsyncStorage.multiGet(keys).then(async (result) => {
            const recipeArray = await Promise.all(
              result.map(async (item) => {
                const result = await getRecipeById(item[0].toString());
                console.log(result);
                return result;
              })
            );
            setRecipes(recipeArray);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    };
    
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <ListItem title={item.title} itemId={item.id} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchItems}>
        {Array.isArray(recipes) && recipes.length !== 0 ? (
          <FlatList
            data={recipes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text style={{ fontSize: 20, marginTop: 60 }}>
            No Favorites Yet ...
          </Text>
        )}
      </View>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.appBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});
