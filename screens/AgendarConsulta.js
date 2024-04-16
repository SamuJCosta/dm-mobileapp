import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AgendarConsulta({route}) {

    const selectedItems = route.params.selectedItems;
    
    return (
        <View>
            <Text>AgendarConsulta  {selectedItems.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
