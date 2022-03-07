import React from "react";
import HomeScreen from "./screens/Home";
import RecommendedArticlesScreen from "./screens/Recommended_Articles";
import PopularArticlesScreen from "./screens/Popular_Articles";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { RFValue } from "react-native-responsive-fontsize";

export default function App() {
  return <AppContainer />;
}

const AppTopNavigation = createMaterialTopTabNavigator({
  RecommendedArticles: {
    screen: RecommendedArticlesScreen,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#c73e00" },
        labelStyle: { color: "#ff7146" },
        indicatorStyle: { backgroundColor: "#c73e00" }
      }
    }
  },
  PopularArticles: {
    screen: PopularArticlesScreen,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#c73e00" },
        labelStyle: { color: "#ff7146" },
        indicatorStyle: { backgroundColor: "#c73e00" }
      }
    }
  }
});

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    AppTopNav: {
      screen: AppTopNavigation,
      navigationOptions: {
        headerBackTitle: null,
        headerTintColor: "#ff7146",
        headerTitle: "Recommended Articles",
        headerStyle: {
          backgroundColor: "#c73e00"
        },
        headerTitleStyle: {
          color: "#ff7146",
          fontWeight: "bold",
          fontSize: RFValue(18)
        }
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);