import { StyleSheet } from "react-native";
import { colors, sizes } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightwhite,
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: sizes.xxLarge,
        width: sizes.width - 44,
        zIndex: 999,
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    details: {
        marginTop: sizes.large,
        backgroundColor: colors.lightwhite,
        width: sizes.width,
        borderTopLeftRadius: sizes.medium,
        borderTopRightRadius: sizes.medium,
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: sizes.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: sizes.width - 44,
        top: 20,
    },
    title: {
        fontFamily: 'bold',
        fontSize: sizes.large,
    },
    priceWrapper: {
        backgroundColor: colors.secondary,
        borderRadius: sizes.large,
    },
    price: {
        paddingHorizontal: 6,
        fontFamily: 'semibold',
        fontSize: sizes.large,
    },
    ratingRow: {
        paddingBottom: sizes.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: sizes.width - 10,
        top: 5,
    },
    rating: {
        top: sizes.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: sizes.large,
    },
    ratingText: {
        color: colors.gray,
        fontFamily: 'medium',
        paddingHorizontal: 5,
    },
    descriptionWrapper: {
        marginTop: sizes.large * 2,
        marginHorizontal: sizes.large,
    },
    description: {
        fontFamily: 'medium',
        fontSize: sizes.large,
    },
    descriptionText: {
        fontFamily: 'regular',
        fontSize: sizes.small,
        textAlign: 'justify',
        marginBottom: sizes.small,
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        padding: 5,
        borderRadius: sizes.large,
    },
    cartRow: {
        paddingBottom: sizes.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: sizes.width,
    },
    cartButton: {
        width: sizes.width * 0.7,
        backgroundColor: colors.black,
        padding: sizes.small / 2,
        borderRadius: sizes.large,
        marginLeft: 12,
    },
    cartTitle: {
        marginLeft: sizes.small,
        fontFamily: 'semibold',
        fontSize: sizes.medium,
        color: colors.lightwhite,
    },
    addCart: {
        width: 37,
        height: 37,
        borderRadius: 50,
        margin: sizes.small,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles;
