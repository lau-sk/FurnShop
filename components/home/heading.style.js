import { StyleSheet } from "react-native";
import { colors, sizes } from "../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: sizes.medium,
        marginBottom: sizes.xSmall,
        marginHorizontal: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontFamily: 'semibold',
        fontSize: sizes.xLarge - 2,
    },
})

export default styles;
