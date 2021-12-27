import { StyleSheet } from "react-native";

import { metrics } from "../../global/metrics";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
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
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 20,
    },
    circle: {
        position: 'absolute'
    }

})