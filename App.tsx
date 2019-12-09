import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const InitialScreen = () => {
  return (
    <View>
      <Text>DELETE ME</Text>
    </View>
  );
};

const navigation = createStackNavigator(
  {
    initial: InitialScreen
  },
  {
    initialRouteName: "initial",
    defaultNavigationOptions: {
      title: "Change me later"
    }
  }
);

export default createAppContainer(navigation);
