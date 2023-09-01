import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://www.starfurniture.com/dw/image/v2/BCLR_PRD/on/demandware.static/-/Sites-STAR-Library/default/dw8611a653/images/stores/Store-7-Living-Room-Furniture.jpg' }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Product</Text>
                    <Text style={styles.supplier} numberOfLines={1}>Product</Text>
                    <Text style={styles.price} numberOfLines={1}>$5000</Text>
                </View>

                <TouchableOpacity style={styles.addButton}>
                    <Ionicons name="add-circle" size={35} color={colors.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity >
    )
};

export default ProductCardView;
