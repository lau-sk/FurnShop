import { FlatList, Text, View } from "react-native";
import React from "react";
import { sizes } from "../../constants";
import styles from "./productRow.style";

const ProductRow = () => {
    const products = [1, 2, 3, 4]
    return (
        <View style={styles.medium}>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <Text>Product</Text>
                )}
                horizontal
                contentContainerStyle={{ columnGap: sizes.medium }}
            />
        </View>
    )
};

export default ProductRow;
