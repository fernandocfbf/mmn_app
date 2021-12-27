import { StyleSheet } from "react-native";
import { metrics } from "../../global/metrics";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: metrics.baseMargin,
    justifyContent: 'space-between'
  },
})