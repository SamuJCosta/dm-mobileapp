import React from 'react'
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native';

const ConsultasAnimal = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.consultasKika}>
                <Text style={{fontSize: 25, fontWeight: "600", color:"black", marginTop: 20, marginLeft:15}}>
                    Consultas
                </Text>
                <View style={styles.informacoes}>
                    <Pressable onPress={()=> console.log("Checked")} style={{marginLeft: 10,color:"#b5b5b5"}}>
                    </Pressable>
                    <View style={styles.textContainer}>
                        <Text style={styles.nomeClinica}>
                            Clinica Veterinaria Mata Real
                        </Text>
                        <Text style={styles.infos}>
                            Segunda-Feira 24 Janeiro
                        </Text>
                        <Text style={styles.infos}>
                            Vacinação 
                        </Text>
                    </View>
                </View>
                <View style={styles.informacoes}>
                    <Pressable onPress={()=> console.log("Checked")} style={{marginLeft: 10,color:"#b5b5b5"}}>
                    </Pressable>
                    <View style={styles.textContainer}>
                        <Text style={styles.nomeClinica}>
                            Clinica Veterinaria Mata Real
                        </Text>
                        <Text style={styles.infos}>
                            Segunda-Feira 12 Fevereiro
                        </Text>
                        <Text style={styles.infos}>
                            Consulta de Rotina
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Descobrir')}>
                    <Text style = {styles.buttonText}>Procurar Consultorios</Text>
            </TouchableOpacity>
        </View>

    )
}

export default ConsultasAnimal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    consultasKika:{
        width: 350,
        height: 300,
        backgroundColor: "#FFF",
        marginTop: 10,
        borderWidth:1,
        borderColor:"#b5b5b5",
    },
    informacoes:{
        width: 320,
        height: 100,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: "#FFF",
        marginTop: 15,
        marginLeft: 15,
        borderColor:"#b5b5b5",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textContainer: {
        flex: 1, 
        marginLeft: 10, 
    },
    nomeClinica: {
        fontSize: 15,
        marginTop: 5,
        fontWeight: "700",
    },
    infos:{
        fontWeight: 300,
        fontSize: 14,
        color:"black",
        marginTop: 5,
    },
    button:{
        display: 'flex',
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        borderRadius: 10,
        backgroundColor: "#6FC4CF",
        marginTop: 50,
    },
    buttonText:{
        color: "#fff",
        fontSize: 15,
        fontWeight:"500"
    }
})
