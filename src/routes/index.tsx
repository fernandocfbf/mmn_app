import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppStack } from "./app";
import { AuthStack } from "./auth";

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Auth",
    }
  )
);