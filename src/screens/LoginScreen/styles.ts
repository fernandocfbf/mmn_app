import { StyleSheet, Platform } from "react-native";
import { getStatusBarHeight, isIphoneX  } from 'react-native-iphone-x-helper'
import { Dimensions } from 'react-native';
import { colors } from "../../global/colors";
import { metrics } from "../../global/metrics";

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    logo: {
        position: "absolute",
        left: metrics.baseMargin,
        top: metrics.baseMargin/2,
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    container: {
        flexGrow: 1,
        marginHorizontal: metrics.baseMargin,
        marginVertical: 2 * metrics.baseMargin,
        justifyContent: 'flex-end',
    },
    textContent: {
        marginBottom: metrics.baseMargin
    },
    title: {
        color: colors.white,
        fontSize: metrics.titleSize,
        marginBottom: metrics.baseMargin/2.5,
        fontWeight: 'bold'
    },
    text: {
        width: '100%',
        textAlign: 'justify',
        color: colors.white,
        fontSize: metrics.textSize
    },
    buttonContent: {
        width: '100%',
        justifyContent: 'center',
    },
    modal: {
        margin: metrics.baseMargin,
        alignItems: 'center',
    },
    modalTitle: {
        color: colors.dark_gray,
        fontSize: metrics.titleSize,
        marginBottom: metrics.baseMargin/2, 
        marginTop: metrics.baseMargin/2,
    },
    loginDataModal: {
        margin: metrics.baseMargin
    }
})