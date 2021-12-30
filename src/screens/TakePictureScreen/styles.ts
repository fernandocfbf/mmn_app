import { StyleSheet, Platform } from "react-native";
import { getStatusBarHeight, isIphoneX  } from 'react-native-iphone-x-helper'
import { Dimensions } from 'react-native';
import { colors } from "../../global/colors";
import { metrics } from "../../global/metrics";

const iphone = Platform.OS === 'ios'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.black
    },
    content: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.black
    },
    cameraButton: {
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: colors.white
    },
})