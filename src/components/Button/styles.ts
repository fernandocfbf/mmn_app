import { StyleSheet } from "react-native";
import { metrics } from "../../global/metrics";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: metrics.buttonHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: metrics.baseRadius
    }
})