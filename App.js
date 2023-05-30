import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import SearchScreen from "./screens/SearchScreen";
import HomeScreen from "./screens/HomeScreen";
import RecipeDetailsScreen from "./screens/RecipeDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Vazir: require("./fonts/Vazir.ttf"),
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
            headerTitle: "چی درست کنم؟!",
            headerTitleStyle: {
              fontFamily: "Vazir",
            },
            headerStyle: { backgroundColor: "#ffe866" },
          }}
        />
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetailsScreen}
          options={{
            headerTitle: "جزئیات دستور پخت",
            headerTitleStyle: {
              fontFamily: "Vazir",
            },
            headerStyle: { backgroundColor: "#ffe866" },
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerTitle: "جست و جو",
            headerTitleStyle: {
              fontFamily: "Vazir",
            },
            headerStyle: { backgroundColor: "#ffe866" },
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            headerTitle: "مورد علاقه ها",
            headerTitleStyle: {
              fontFamily: "Vazir",
            },
            headerStyle: { backgroundColor: "#ffe866" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
