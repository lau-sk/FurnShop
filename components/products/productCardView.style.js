import { StyleSheet } from "react-native";
import { colors, sizes } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 240,
        marginEnd: 22,
        borderRadius: sizes.medium,
        backgroundColor: colors.secondary,
    },
    imageContainer: {
        flex: 1,
        width: 170,
        marginLeft: sizes.small / 2,
        marginTop: sizes.small / 2,
        borderRadius: sizes.small,
        overflow: 'hidden',
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    details: {
        padding: sizes.small
    },
    title: {
        fontFamily: 'semibold',
        fontSize: sizes.large,
        marginBottom: 2
    },
    supplier: {
        fontFamily: 'regular',
        fontSize: sizes.small,
        color: colors.gray,
    },
    price: {
        fontFamily: 'regular',
        fontSize: sizes.medium,
    },
    addButton: {
        position: 'absolute',
        bottom: sizes.xSmall,
        right: sizes.xSmall,
    },
});

export default styles;