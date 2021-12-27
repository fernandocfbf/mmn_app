import React, { useCallback } from "react";
import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native'
import { Avatar } from 'react-native-elements';
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Circle } from "../../components/Circle";
import { Menu } from "../../components/Menu";

import { handleTime } from './utils'

import { styles } from "./styles";
import { colors } from "../../global/colors";
import { loginLogout } from "../../store/ducks/login/actions";



export function HomeScreen() {
    const nutrients = [
        { key: 1, title: 'protein', fill: 40 },
        { key: 2, title: 'carbs', fill: 20 },
        { key: 3, title: 'fat', fill: 20 },
    ]

    const { name } = useSelector((state: RootStateOrAny) => state.user);
    const { width } = Dimensions.get("window");

    //actions 
    const dispatch = useDispatch();
    const loginLogoutAsync = useCallback(() => dispatch(loginLogout()), [dispatch])

    return (
        <SafeAreaView
            style={{
                flexGrow: 1,
                backgroundColor: colors.white
            }}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={{ fontSize: 16 }}>
                            {handleTime()},
                        </Text>
                        <Text style={styles.title}>
                            {name.name}
                        </Text>
                    </View>

                    <Avatar
                        size="small"
                        rounded
                        title={'RU'}
                        activeOpacity={1}
                        containerStyle={{ backgroundColor: colors.dark_gray }}
                        onPress={() => {
                            console.log("ENTIRITJ")
                        }
                        }
                    />

                </View>

                <Menu />

                <View style={styles.carousel}>

                    <Carousel
                        sliderWidth={width}
                        sliderHeight={width}
                        itemWidth={width}
                        data={nutrients}
                        renderItem={Circle}
                        hasParallaxImages={false}
                    />
                </View>
                <Image
                    style={styles.takePicture}
                    source={require('../../assets/logo3.png')}
                    resizeMethod='scale'
                />
            </View>

        </SafeAreaView>
    )
}