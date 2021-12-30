import React, { useCallback, useState } from "react";
import { View, Text, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements';
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Camera } from 'expo-camera';

import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Circle } from "../../components/Circle";
import { Menu } from "../../components/Menu";

import { handleTime } from './utils'

import { styles } from "./styles";
import { colors } from "../../global/colors";
import { loginLogout } from "../../store/ducks/login/actions";
import { metrics } from "../../global/metrics";
import { navigate } from "../../services/navigation";


export function HomeScreen() {

    const nutrients = [
        { key: 2, title: 'carbs', fill: 40, value: 200 },
        { key: 1, title: 'protein', fill: 70, value: 60 },
        { key: 3, title: 'fat', fill: 20, value: 40 },
    ]

    const [dotSelect, setDotSelect] = useState(0)

    const { name } = useSelector((state: RootStateOrAny) => state.user);
    const { width, height } = Dimensions.get("window");

    //actions 
    const dispatch = useDispatch();
    const loginLogoutAsync = useCallback(() => dispatch(loginLogout()), [dispatch])

    return (
        <View
            style={{
                flexGrow: 1,
                backgroundColor: colors.white
            }}
        >
            <SafeAreaView style={{ flex: 0 }} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.user}>
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
                                loginLogoutAsync()
                            }
                            }
                        />
                    </View>
                    <Menu />
                </View>
                <SafeAreaView style={styles.content}>
                    <View>
                        <Carousel
                            sliderWidth={width}
                            sliderHeight={width}
                            itemWidth={width}
                            data={nutrients}
                            renderItem={Circle}
                            hasParallaxImages={false}
                            onSnapToItem={(index: number) => setDotSelect(index)}
                            enableMomentum={true}
                        />
                        <Pagination
                            containerStyle={{ height: 65 }}
                            dotsLength={nutrients.length}
                            activeDotIndex={dotSelect}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 8,
                                backgroundColor: colors.white
                            }}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                        />
                    </View>
                    <View style={styles.takePicture}>
                        <TouchableOpacity
                            style={styles.takePictureIcon}
                            onPress={() => navigate({ routeName: 'TakePictureScreen', params: {} })}
                        >
                            <Image
                                style={styles.image}
                                source={require('../../assets/logo.png')}
                                resizeMethod='scale'
                            />
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </View>
        </View >
    )
}