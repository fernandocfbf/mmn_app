import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FlatList, Dimensions, View, Text } from 'react-native'

import { styles } from './styles'
import { Circle } from '../Circle';


type Props = {
    list: Array<Nutrient>;
}

type Nutrient = {
    key: number;
    title: string;
    fill: number;
}

export function Carousel({ list }: Props) {

    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");


    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2,
        keyExtractor: useCallback(e => e.id, []),
        getItemLayout: useCallback(
            (_, index) => ({
                index,
                length: windowWidth,
                offset: index * windowWidth,
            }),
            []
        ),
    };

    return (
        <>
            <FlatList
                data={list}
                disableIntervalMomentum={true}
                contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                renderItem={({ item }) => {
                    return (
                        <Text style={{  }}>{item.title}</Text>
                    )
                }}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                {...flatListOptimizationProps}
            />

            <View style={styles.pagination} pointerEvents="none">
                {list.map((_, i) => {
                    return (
                        <View
                            key={i}
                            style={[
                                styles.paginationDot,
                                index === i
                                    ? styles.paginationDotActive
                                    : styles.paginationDotInactive,
                            ]}
                        />
                    );
                })}
            </View>
        </>
    )
}