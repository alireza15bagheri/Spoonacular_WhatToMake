import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { colorPalette } from "./constants/colorPalette";

import SearchScreen from "./screens/SearchScreen";
import HomeScreen from "./screens/HomeScreen";
import RecipeDetailsScreen from "./screens/RecipeDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "What To Cook?!",
            headerTitleStyle: {
              fontFamily: "Montserrat",
            },
            headerStyle: { backgroundColor: colorPalette.appBackground },
          }}
        />
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetailsScreen}
          options={{
            headerTitle: "Recipe Details",
            headerTitleStyle: {
              fontFamily: "Montserrat",
            },
            headerStyle: { backgroundColor: colorPalette.appBackground },
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerTitle: "Search Recipes",
            headerTitleStyle: {
              fontFamily: "Montserrat",
            },
            headerStyle: { backgroundColor: colorPalette.appBackground },
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            headerTitle: "Favorite Recipes",
            headerTitleStyle: {
              fontFamily: "Montserrat",
            },
            headerStyle: { backgroundColor: colorPalette.appBackground },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
