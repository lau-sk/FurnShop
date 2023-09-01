import { FlatList, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { colors, sizes } from "../../constants";
import styles from "./productRow.style";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";

const ProductRow = () => {
    const { data, isLoading, error } = useFetch();
    const products = [1, 2, 3, 4];

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size={sizes.xxlarge} color={colors.primary} />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <ProductCardView item={item} />}
                    horizontal
                    contentContainerStyle={{ columnGap: sizes.medium }}
                />
            )}
        </View>
    )
};

export default ProductRow;
