import { StyleSheet } from "react-native";
import { colors, sizes } from '../constants/index';

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'bold',
        fontSize: 40,
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: sizes.small,
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    location: {
        fontSize: sizes.medium,
        color: colors.gray,
        fontFamily: 'semibold',
    },
    cartCount: {
        position: 'absolute',
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 999,
    },
    cartNumber: {
        fontSize: 10,
        fontFamily: 'regular',
        fontWeight: '600',
        color: colors.lightwhite,
    }
})

export default styles;
