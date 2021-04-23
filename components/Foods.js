import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/colors";

const Foods = ({ itemData, onPress }) => {
  return (
    <View style={styles.food}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View style={{ ...styles.row, ...styles.header }}>
            <ImageBackground
              source={{ uri: itemData.item.imageUrl }}
              style={styles.bgImg}
            >
              <Text style={styles.headerImage}>{itemData.item.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.details }}>
            <Text style={styles.detailText}>
              {itemData.item.duration} Minuts
            </Text>
            <Text style={styles.detailText}>{itemData.item.complexity}</Text>
            <Text style={styles.detailText}>{itemData.item.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Foods;

const styles = StyleSheet.create({
  food: {
    height: 200,
    width: "100%",
    marginBottom: 10,
    backgroundColor: "black",
    borderRadius: 10,
    overflow: "hidden",
  },

  bgImg: {
    width: "100%",
    height: "100%",
  },

  headerImage: {
    fontFamily: "bold",
    fontSize: 20,
    color: colors.primaryColor,
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
  },

  row: {
    flexDirection: "row",
  },

  header: {
    height: "85%",
  },

  details: {
    height: "15%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailText: {
    textTransform: "uppercase",
    fontFamily: "reguler",
    color: colors.secondaryColor,
    paddingHorizontal: 10,
  },
});
