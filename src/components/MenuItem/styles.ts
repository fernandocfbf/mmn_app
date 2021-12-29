import { StyleSheet } from 'react-native'
import { colors } from '../../global/colors'

export const styles = StyleSheet.create({
    container: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
    },
    title: {
        color: colors.dark_gray,
        marginTop: 5
    },
})