import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { colorPalette } from "../constants/colorPalette";

// data needed in this screen: food title - Ingredients - recipe
const RecipeDetailsScreen = () => {
  return (
    <>
      <ScrollView contextContainerStyle={styles.container}>
        <View style={styles.detailsContainer}>
          <Image style={styles.FoodImg} source={require("../food.png")} />
          <View>
            <Text>FOOD TITLE</Text>
          </View>
          <View>
            <Text>Ingredients:</Text>
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
          <View>
            <Text>Recipe:</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
              in massa tempor nec feugiat nisl pretium fusce. A diam maecenas
              sed enim ut sem. Suspendisse faucibus interdum posuere lorem ipsum
              dolor sit amet. Sagittis id consectetur purus ut faucibus pulvinar
              elementum integer enim. Ipsum suspendisse ultrices gravida dictum
              fusce ut placerat orci nulla. Enim facilisis gravida neque
              convallis. Malesuada fames ac turpis egestas. Mi quis hendrerit
              dolor magna eget est lorem ipsum dolor. Accumsan tortor posuere ac
              ut. Eget mauris pharetra et ultrices. Risus feugiat in ante metus
              dictum. Accumsan sit amet nulla facilisi morbi tempus iaculis
              urna. Praesent tristique magna sit amet purus gravida quis
              blandit. Montes nascetur ridiculus mus mauris vitae ultricies leo
              integer. Erat velit scelerisque in dictum non. Semper risus in
              hendrerit gravida rutrum quisque non. Ut consequat semper viverra
              nam libero justo laoreet sit amet. Eu consequat ac felis donec et
              odio. Enim lobortis scelerisque fermentum dui faucibus in.
              Elementum tempus egestas sed sed risus pretium quam. Neque
              volutpat ac tincidunt vitae semper. Aliquet risus feugiat in ante.
              Curabitur gravida arcu ac tortor dignissim. Vel fringilla est
              ullamcorper eget nulla facilisi etiam. Vitae elementum curabitur
              vitae nunc sed. Feugiat sed lectus vestibulum mattis ullamcorper.
              Porttitor rhoncus dolor purus non enim praesent elementum. Tortor
              pretium viverra suspendisse potenti nullam ac tortor vitae purus.
              Semper risus in hendrerit gravida rutrum quisque non tellus. Morbi
              tristique senectus et netus et. Elementum tempus egestas sed sed
              risus pretium quam. Facilisi morbi tempus iaculis urna id volutpat
              lacus. Malesuada pellentesque elit eget gravida cum sociis. Eget
              nunc lobortis mattis aliquam faucibus purus in massa tempor.
              Lectus quam id leo in vitae turpis massa sed. Sapien faucibus et
              molestie ac. Pellentesque habitant morbi tristique senectus et. At
              augue eget arcu dictum varius duis. Nunc consequat interdum varius
              sit amet mattis vulputate enim nulla. Diam sollicitudin tempor id
              eu nisl. Lacus vestibulum sed arcu non. Arcu non sodales neque
              sodales. Eget nunc lobortis mattis aliquam faucibus purus in
              massa. Cras tincidunt lobortis feugiat vivamus. Aenean euismod
              elementum nisi quis. Id eu nisl nunc mi ipsum faucibus vitae
              aliquet nec. Morbi tristique senectus et netus et malesuada fames.
              Nunc aliquet bibendum enim facilisis gravida. Augue neque gravida
              in fermentum et sollicitudin ac. Lectus urna duis convallis
              convallis. Tellus rutrum tellus pellentesque eu tincidunt tortor
              aliquam nulla. Tempor orci dapibus ultrices in iaculis nunc.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe866",
    alignItems: "center",
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
    alignItems: "center",
  },
  FoodImg: {
    width: "100%",
    height: 230,
    borderRadius: 8,
  },
});
