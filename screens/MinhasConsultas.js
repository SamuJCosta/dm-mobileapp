import React from 'react'
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import { CheckCircleIcon, TrashIcon } from 'react-native-heroicons/outline'
import {useNavigation} from '@react-navigation/native';

const MinhasConsultas = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.consultasKika}>
                <Text style={{fontSize: 25, fontWeight: "600", color:"black", marginTop: 20, marginLeft:15}}>
                    Consultas Kika
                </Text>
                <View style={styles.informacoes}>
                    <Pressable onPress={()=> console.log("Checked")} style={{marginLeft: 10,color:"#b5b5b5"}}>
                        <CheckCircleIcon/>
                    </Pressable>
                    <View style={styles.textContainer1}>
                        <Text style={styles.nomeClinica}>
                            Clinica Veterinaria Mata Real
                        </Text>
                        <Text style={styles.infos}>
                            Segunda-Feira 27 Agosto
                        </Text>
                        <Text style={styles.infos}>
                            Vacinação 
                        </Text>
                        <Text style={styles.infos}>
                            Status: Em espera...
                        </Text>
                    </View>
                    <TrashIcon onPress={()=> console.log ("Apagado!")} style={{marginRight: 15, color: "black"}}/>
                </View>
                <View style={styles.informacoes}>
                    <View style={styles.textContainer2}>
                        <Text style={styles.nomeClinica}>
                            Clinica Veterinaria Mata Real
                        </Text>
                        <Text style={styles.infos}>
                            Terça-Feira 12 Fevereiro
                        </Text>
                        <Text style={styles.infos}>
                            Consulta Rotina
                        </Text>
                        <Text style={styles.infos}>
                            Status: Confirmada
                        </Text>
                    </View>                
                </View>
            </View>
            <View style={styles.consultasRoudy}>
                <Text style={{fontSize: 25, fontWeight: "600", color:"black", marginTop: 20, marginLeft:15}}>
                    Consultas Roudy
                </Text>
                <View style={styles.informacoes}>
                    <View style={styles.textContainer2}>
                        <Text style={styles.nomeClinica}>
                            Clinica Veterinaria Mata Real
                        </Text>
                        <Text style={styles.infos}>
                            Segunda-Feira 02 Janeiro
                        </Text>
                        <Text style={styles.infos}>
                            Vacinação
                        </Text>
                        <Text style={styles.infos}>
                            Status: Concluida
                        </Text>
                    </View>                
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Perfil')}>
                    <Text style = {styles.buttonText}>Reagendar Consulta</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MinhasConsultas

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
consultasRoudy:{
    width: 350,
    height: 200,
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
textContainer1: {
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

textContainer2: {
    flex: 1, 
    marginLeft: 45, 
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
