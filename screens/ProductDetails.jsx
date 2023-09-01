import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./productDetails.style";
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { colors, sizes } from "../constants";

const ProductDetails = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' size={30} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name='heart' size={30} color={colors.primary} />
                </TouchableOpacity>
            </View>

            <Image
                source={{
                    uri: item.imageUrl
                }}
                style={styles.image}
            />

            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View>

                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1, 2, 3, 4, 5].map((index) => (
                            <Ionicons
                                key={index}
                                name='star'
                                size={24}
                                color='gold'
                            />
                        ))}

                        <Text style={styles.ratingText}>(4,9)</Text>
                    </View>

                    <View style={styles.rating}>
                        <TouchableOpacity onPress={() => increment()}>
                            <SimpleLineIcons
                                name='plus'
                                size={20}
                            />
                        </TouchableOpacity>
                        <Text style={styles.ratingText}>{count}</Text>

                        <TouchableOpacity onPress={() => decrement()}>
                            <SimpleLineIcons
                                name='minus'
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.descriptionText}>
                        {item.description}
                    </Text>
                </View>

                <View style={{ marginBottom: sizes.small }}>
                    <View style={styles.location}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name='location-outline' size={20} marginHorizontal={5} />
                            <Text>{item.product_location}</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text>Free Delivery</Text>
                            <MaterialCommunityIcons name='truck-delivery-outline' size={20} marginHorizontal={5} />
                        </View>
                    </View>
                </View>

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => { }} style={styles.cartButton}>
                        <Text style={styles.cartTitle}>Buy Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }} style={styles.addCart}>
                        <Fontisto name="shopping-bag" size={22} color={colors.lightwhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default ProductDetails;
