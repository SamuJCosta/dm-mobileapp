import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function InicioAdmin() {
    return (
        <View style={styles.container}>
            <Text>InicioAdmin</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });