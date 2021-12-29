import { StyleSheet } from "react-native";

import { metrics } from "../../global/metrics";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 220,
        width: 220,
        backgroundColor: colors.white,
        borderRadius: 110,
        shadowColor: colors.dark_gray,
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 5,
    },
    circle: {
        position: 'absolute'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 18,
        fontWeight: 'normal'
    }

})