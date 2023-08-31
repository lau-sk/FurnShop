import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import styles from './welcome.style';
import { colors, sizes } from '../../constants/index';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.container}>
                <Text style={[styles.welcomeText, { color: colors.black, fontSize: sizes.xLarge }]}>
                    {" "}
                    Welcome to FurnShop!
                </Text>
                <Text
                    style={[styles.welcomeText, { color: colors.primary }]}>
                    {" "}
                    Home of the most luxurious brands
                </Text>
            </View>

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
        </View>
    )
}

export default Welcome;
