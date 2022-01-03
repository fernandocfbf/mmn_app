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
        borderWidth: 5,
        borderColor: colors.white,
        borderRadius: 35,
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        height: 46,
        width: 46,
        backgroundColor: colors.white,
        borderRadius: 23,
    },
    previewContainer: {
        flex: 1,
        marginHorizontal: metrics.baseMargin,
        marginVertical: iphone ? metrics.baseMargin : 2 * metrics.baseMargin,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    photoPreview:{
        width: '100%',
        height: 300,
        borderRadius: metrics.baseRadius
    }
})