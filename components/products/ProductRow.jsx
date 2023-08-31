import { FlatList, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { sizes } from "../../constants";
import styles from "./productRow.style";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
    const products = [1, 2, 3, 4];

    return (
        <View style={styles.medium}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCardView />}
                horizontal
                contentContainerStyle={{ columnGap: sizes.medium }}
            />
        </View>
    )
};

export default ProductRow;
