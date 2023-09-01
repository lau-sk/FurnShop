import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./newArrivals.style";
import { colors } from "../constants";
import { Ionicons } from '@expo/vector-icons';

const NewArrivals = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.upperRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons
                            name='chevron-back-circle'
                            size={38}
                            color={colors.lightwhite}
                        />
                    </TouchableOpacity>

                    <Text style={styles.heading}>Products</Text>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default NewArrivals;
