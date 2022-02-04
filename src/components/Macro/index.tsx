import React from "react";
import { View, Text } from "react-native";

import { metrics } from "../../global/metrics";
import { styles } from "./styles";

type Props = {
    title: string;
    value: number;
    carb: boolean
}

export function Macro({ title, value, carb }: Props) {
    return (
        <View style={[styles.container, {
            width: carb ? 120 : 100,
            height: carb ? 120 : 100,
            borderRadius: carb ? 60 : 50,
        }]}>
            <Text style={{
                fontSize: carb ? metrics.titleSize + 10 : metrics.textSize + 10,
                fontWeight: 'bold'
            }}>{value} g</Text>
            <Text>{title}</Text>
        </View>
    )
}