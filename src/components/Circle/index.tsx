import React from "react";
import { View, Text } from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { colors } from "../../global/colors";

import { styles } from './styles'


export function Circle({ item, index }: any, parallaxProps: any) {
    return (
        <View style={[styles.container]}>
            <AnimatedCircularProgress
                style={styles.circle}
                size={250}
                width={5}
                fill={item['fill']}
                tintColor={colors.background}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor={colors.gray} />

            <View style={styles.content}>
                <Text style={styles.text}>{item['title']}</Text>
                <Text style={styles.title}>{item['value'] + 'g'}</Text>
            </View>
        </View>
    )
}