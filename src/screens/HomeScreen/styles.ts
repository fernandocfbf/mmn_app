import { StyleSheet, Platform } from "react-native";
import { colors } from "../../global/colors";
import { metrics } from "../../global/metrics";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginHorizontal: metrics.baseMargin,
        marginVertical: 2 * metrics.baseMargin,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    carousel: {
        position: 'absolute',
        top: metrics.baseMargin,
        left: -metrics.baseMargin
    },
    takePicture: {
        position: 'absolute',
        bottom: 0,
        width: 70,
        height: 70
    },


})