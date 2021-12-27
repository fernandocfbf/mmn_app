import React, { ReactNode } from "react";
import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { colors } from '../../global/colors'


type Props = {
    title: string;
    icon: ReactNode;
}

export function MenuItem({
    title,
    icon,
}: Props) {

    const { background, dark_gray } = colors

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={() => console.log("Icon pressed!")}
        >
            <LinearGradient
                style={styles.content}
                colors={[background, dark_gray]}>
                {icon}
            </LinearGradient>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}