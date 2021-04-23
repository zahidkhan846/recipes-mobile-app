import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Foods from "./Foods";

const FoodList = ({ data, navigation }) => {
  const renderFood = (itemData) => {
    return (
      <Foods
        itemData={itemData}
        onPress={() => {
          navigation.navigate({
            routeName: "DetailFood",
            params: {
              foodId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={data} renderItem={renderFood} style={{ width: "100%" }} />
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
