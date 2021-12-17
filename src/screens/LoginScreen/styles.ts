import { StyleSheet } from "react-native";
import { metrics } from "../../global/metrics";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: metrics.baseMargin,
        marginVertical: 2*metrics.baseMargin,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: metrics.baseRadius
    }
})