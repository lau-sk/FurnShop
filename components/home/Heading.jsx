import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './heading.style';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { colors, sizes } from "../../constants";


const Heading = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Arrivals!</Text>
                <TouchableOpacity>
                    <Ionicons name='ios-grid' size={24} color={colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Heading;
