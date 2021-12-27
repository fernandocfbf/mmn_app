import React from "react";
import { View, Text, Dimensions } from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { colors } from "../../global/colors";

import { styles } from './styles'


export function Circle({ item, index }: any, parallaxProps: any) {
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

    return (
        <View style={[styles.container, { width: windowWidth, height: windowHeight * 0.4 }]}>
            <AnimatedCircularProgress
                style={styles.circle}
                size={250}
                width={5}
                fill={item['fill']}
                tintColor={colors.background}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor={colors.gray} />

            <View style={styles.content}>
                <Text>{item['title']}</Text>
            </View>
        </View>
    )
}