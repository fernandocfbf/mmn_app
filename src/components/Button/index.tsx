import React from "react";
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";

import { colors } from "../../global/colors";
import { styles } from './styles'

type Props = {
    OnPress: any;
    text: string;
    textColor: string;
    extraStyle: object;
    loading ?: boolean;
}

export function Button({ text, textColor, extraStyle, OnPress, loading }: Props) {
    return (
        <TouchableOpacity
            onPress={OnPress}
            style={[styles.container, extraStyle]}
            activeOpacity={0.8}
        >
            {
                loading ?
                    <ActivityIndicator size="small" color={colors.white} />
                    :
                    <Text style={{ color: textColor, }}>{text}</Text>
            }

        </TouchableOpacity >
    )
}