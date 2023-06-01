import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ListItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
  },
});

export default ListItem;
