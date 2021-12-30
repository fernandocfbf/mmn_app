import { StyleSheet, Platform } from "react-native";
import { colors } from "../../global/colors";
import { metrics } from "../../global/metrics";

const iphone = Platform.OS === 'ios'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: iphone ? 0 : 2 * metrics.baseMargin,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        paddingHorizontal: metrics.baseMargin,
        alignItems: 'center',
    },
    user: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        paddingTop: metrics.baseMargin,
        backgroundColor: colors.background,
        borderTopStartRadius: 5 * metrics.baseRadius,
        borderTopEndRadius: 5 * metrics.baseRadius
    },
    takePicture: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
    },
    takePictureIcon: {
        width: 70,
        height: 70,
    },
    image: {
        width: 70,
        height: 70,
    }


})