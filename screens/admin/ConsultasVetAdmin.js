import { symbol } from 'prop-types'
import React from 'react'
import { Pressable } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { ChevronRightIcon } from 'react-native-heroicons/outline'
import { useNavigation } from "@react-navigation/native";

const ConsultasVetAdmin = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <View style={styles.titulo}>
            <Text style={styles.texto}>Consultas de Steven</Text>
        </View>
        <View style={styles.boxconsultas}>
            <Text style={styles.cliente}> Cliente: Ricardo Emanuel</Text>
            <Text style={styles.tipo}> Vacinação</Text>
            <Pressable onPress={() => console.log("Download")}>
                <View style={styles.Receita}>
                <Text marginTop={20} marginLeft={7}>
                    Download Receita
                </Text>
                <ChevronRightIcon marginTop={15} color={"black"}/>
                </View>
            </Pressable>
        </View>
        </View>
    )
}

export default ConsultasVetAdmin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
      },
      titulo:{
        marginTop: 10,
        marginRight: 70,
      },
      texto:{
        fontWeight:700,
        fontSize: 32,   
      },
      boxconsultas:{
        marginTop:50,
        width:300,
        height:100,
        borderRadius:15,
        borderWidth:0.5,
        borderColor:"black"
      },
      cliente:{
        marginTop: 3,
        marginLeft:4,
        fontWeight:"500",
        fontSize:15,
      },
      tipo:{
        marginTop: 3,
        marginLeft:4,
        fontWeight:"300",
        fontSize:15,
      },
      Receita:{
        flexDirection:"row"
      }
})
