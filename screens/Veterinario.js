import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native'
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {useNavigation} from '@react-navigation/native';

export default function Veterinario( {route}) {


    const navigation = useNavigation();
    const selectedItems = route.params.selectedItems;

    return (
        <View style={styles.container}>
            <Text>Ola</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
})