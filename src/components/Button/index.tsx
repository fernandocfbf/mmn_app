import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../global/colors";

import { styles } from './styles'

type Props = {
    text: string;
    textColor: string;
    extraStyle: object;
}

export function Button({ text, textColor, extraStyle }: Props) {
    return (
        <TouchableOpacity
            style={[styles.container, extraStyle]}
        >
            <Text style={{color: textColor}}>{text}</Text>
        </TouchableOpacity>
    )
}