import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function ListaClientesVet() {
    return (
        <View style={styles.container}>
            <View style={styles.block}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    block:{
        width:"100%",
        height:"100%",
        backgroundColor:"#000"
    }
})