import { StyleSheet } from 'react-native'

import { colors } from '../../global/colors'

export const styles = StyleSheet.create({
  pagination: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {
    backgroundColor: colors.blue
  },
  paginationDotInactive: {
    backgroundColor: colors.gray
  },
})