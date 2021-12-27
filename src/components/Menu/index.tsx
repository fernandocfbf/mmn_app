import React from "react";
import { View, ScrollView } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import { MenuItem } from "../MenuItem";
import { styles } from "./styles";
import { categories } from "./categories";
import { colors } from "../../global/colors";

export function Menu() {

  function handleIcon(screen: string) {
    if (screen === "Settings") {
      return (<SimpleLineIcons name="settings" size={35} color={colors.white} />)
    }

    else if (screen === "History") {
      return (<MaterialIcons name="history" size={35} color={colors.white} />)
    }

    else if (screen === "About Us") {
      return (<FontAwesome name="users" size={35} color={colors.white} />)
    }

    return (<AntDesign name="user" size={35} color={colors.white} />)

  }

  return (
    <View style={styles.container}>
      {
        categories.map(tool => (
          <MenuItem
            key={tool.id}
            title={tool.title}
            icon={handleIcon(tool.title)}
          ></MenuItem>
        ))
      }
    </View>
  )
}