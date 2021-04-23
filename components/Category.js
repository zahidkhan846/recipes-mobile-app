import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/colors";

const Category = ({ title, navigate, id, color }) => {
  let Touchable = TouchableOpacity;

  //   if (Platform.OS === "android" && Platform.Version >= 21) {
  //     Touchable = TouchableNativeFeedback;
  //   }

  return (
    <Touchable
      style={{ ...styles.item, ...{ backgroundColor: color } }}
      onPress={() => {
        navigate({
          routeName: "CategoryFood",
          params: {
            categoryId: id,
          },
        });
      }}
    >
      <View>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
      </View>
    </Touchable>
  );
};

export default Category;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    elevation: 5,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
  },

  title: {
    fontFamily: "bold",
    fontSize: 18,
    color: "black",
  },
});
