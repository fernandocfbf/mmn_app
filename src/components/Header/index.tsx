import React from "react";
import { View } from "react-native";

import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";
import { colors } from "../../global/colors";

type Props = {
    onBackPress: Function;
    onCancelPress: Function;
}

export function Header({ onBackPress, onCancelPress }: Props) {
    return (
        <View style={styles.container}>
            <Feather
                name="arrow-left-circle"
                size={40}
                color={colors.dark_gray}
                onPress={() => onBackPress()}
            />
            <Feather
                name="x-circle"
                size={40}
                color={colors.dark_gray}
                onPress={() => onCancelPress()}
            />
        </View>
    )
}