import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import { colors } from "../../global/colors";
import { metrics } from "../../global/metrics";

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    logo: {
        position: "absolute",
        left: metrics.baseMargin,
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    container: {
        flexGrow: 1,
        marginHorizontal: metrics.baseMargin,
        marginVertical: 2 * metrics.baseMargin,
        height: height - 2 * metrics.baseMargin,
        justifyContent: 'flex-end',
    },
    textContent: {
        marginBottom: metrics.baseMargin
    },
    title: {
        color: colors.white,
        fontSize: metrics.titleSize,
        fontWeight: 'bold'
    },
    text: {
        color: colors.white,
        fontSize: metrics.textSize
    },
    buttonContent: {
        width: '100%',
        justifyContent: 'center',
    }
})