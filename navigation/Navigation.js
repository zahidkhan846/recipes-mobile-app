import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { colors } from "../constants/colors";
import CategoryScreen from "../screens/CategoryScreen";
import FoodDetailScreen from "../screens/FoodDetailScreen";
import CategorisedFoodsScreen from "../screens/CategorisedFoodsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import FilterScreen from "../screens/FilterScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import IconButton from "../components/IconButton";

// custom colors for different devices...
const headBgColor = Platform.OS === "android" ? colors.headerBackground : "";
const headTxtColor = Platform.OS === "android" ? colors.secondaryDark : "";

// default header for diff tabs
const defaultHeader = {
  headerStyle: {
    backgroundColor: headBgColor,
  },
  headerTitleStyle: {
    fontFamily: "bold",
  },
  headerTintColor: headTxtColor,
};

const sideDrawerIcon = (arg) => {
  return (
    <HeaderButtons HeaderButtonComponent={IconButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        color={colors.grey}
        onPress={() => {
          arg.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  );
};

const saveButton = (arg) => {
  return (
    <HeaderButtons HeaderButtonComponent={IconButton}>
      <Item
        title="Save"
        iconName="ios-save"
        color={colors.green}
        onPress={() => {
          console.log("save");
        }}
      />
    </HeaderButtons>
  );
};

const FoodNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoryScreen,
      navigationOptions: (navData) => {
        return {
          headerTitle: "Categories",
          headerLeft: () => sideDrawerIcon(navData),
        };
      },
    },
    CategoryFood: {
      screen: CategorisedFoodsScreen,
    },
    DetailFood: {
      screen: FoodDetailScreen,
    },
  },
  {
    defaultNavigationOptions: defaultHeader,
  }
);

const FavoriteNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoriteScreen,
      navigationOptions: {
        headerTitle: "Favorites",
      },
    },
    DetailFood: {
      screen: FoodDetailScreen,
    },
  },
  { defaultNavigationOptions: defaultHeader }
);

const BottomTabBar = createMaterialBottomTabNavigator(
  {
    Foods: {
      screen: FoodNavigator,
      navigationOptions: {
        tabBarIcon: (info) => {
          return (
            <Ionicons
              name="fast-food-outline"
              size={25}
              color={info.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoriteNavigator,
      navigationOptions: {
        tabBarIcon: (info) => {
          return <Ionicons name="heart" size={25} color={info.tintColor} />;
        },
      },
    },
  },
  {
    activeColor: colors.like,
    barStyle: { backgroundColor: colors.background },
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FilterScreen,
      navigationOptions: (navData) => {
        return {
          headerTitle: "Filter Options",
          headerLeft: () => sideDrawerIcon(navData),
          headerRight: () => saveButton(navData),
        };
      },
    },
  },
  { defaultNavigationOptions: defaultHeader }
);

const SideDrawer = createDrawerNavigator(
  {
    Favorites: BottomTabBar,
    Filters: FiltersNavigator,
  },
  {
    drawerBackgroundColor: colors.headerBackground,
  }
);

export default createAppContainer(SideDrawer);
