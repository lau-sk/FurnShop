import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../constants/index';

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    welcomeText: {
        fontFamily: "bold",
        fontSize: sizes.xSmall,
        marginTop: sizes.xSmall,
        color: colors,
        marginHorizontal: sizes.small,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: sizes.medium,
        marginVertical: sizes.medium,
        marginHorizontal: sizes.small,
        height: 50,
    },
    searchIcon: {
        marginHorizontal: 10,
        borderRadius: sizes.small,
        color: colors.gray,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: colors.secondary,
        marginRight: sizes.small,
        borderRadius: sizes.small,
    },
    searchInput: {
        fontFamily: 'regular',
        width: '100%',
        height: '100%',
        paddingHorizontal: sizes.small
    },
    searchButton: {
        width: 50,
        height: '100%',
        borderRadius: sizes.medium,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles;
