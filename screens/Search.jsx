import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { colors, sizes } from '../constants/index';
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const Search = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name="search" size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onPressIn={() => navigation.navigate('Search')}
                        placeholder="We have what you're looking for!"
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchButton}>
                        <Ionicons name='camera-outline' size={sizes.xLarge} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Search;