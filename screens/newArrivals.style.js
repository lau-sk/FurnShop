import { StyleSheet } from "react-native";
import { colors, sizes } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightwhite
    },
    wrapper: {
        flex: 1,
        backgroundColor: colors.lightwhite,
    },
    upperRow: {
        width: sizes.width - 50,
        marginHorizontal: sizes.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: colors.primary,
        borderRadius: sizes.large,
        top: sizes.large,
        zIndex: 999,
    },
    heading: {
        fontFamily: 'semibold',
        fontSize: sizes.medium,
        color: colors.lightwhite,
        marginLeft: 5,
    }
})

export default styles;
