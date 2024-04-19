import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { View, Text, StyleSheet,TextInput, TouchableOpacity, Image, Pressable} from 'react-native'
import { PencilIcon } from 'react-native-heroicons/outline';


export default function EditarPerfil() {
    const perfil= require("../assets/perfil.png");
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <Image source={perfil} style={styles.img}/>
        <View style={styles.block}>
            <Pressable onPress={()=>console.log("Editar")}>
        <View style={styles.eclipse}>
        <PencilIcon color={"white"} margin={8}/>
        </View>
            </Pressable>
        <Text style={styles.informacoes}>
            NOME COMPLETO
        </Text>
            <View style={styles.insideBlock}>
            <TextInput
                placeholder="Deolinda Kimzimba" placeholderTextColor="#6B6E82" fontSize= "14" fontWeight= "400" />
            </View>
            <Text style={styles.informacoes}>
            EMAIL
        </Text>
            <View style={styles.insideBlock}>
            <TextInput
                placeholder="deolindakimzimba@gmail.com" placeholderTextColor="#6B6E82" fontSize= "14" fontWeight= "400" />
            </View>
            <Text style={styles.informacoes}>
            TELEFONE
        </Text>
            <View style={styles.insideBlock}>
            <TextInput
                placeholder="919724482" placeholderTextColor="#6B6E82" fontSize= "14" fontWeight= "400" />
            </View>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Perfil')}>
                    <Text style = {styles.buttonText}>SALVAR</Text>
                </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center"
},
img:{
    width:"100%",
    height:"50%"
},
eclipse:{
    margin:-20,
    width:40,
    height:40,
    borderRadius:30,
    backgroundColor:"#6FC4CF"
},
block:{
    width:"120%",
    height:"80%",
    backgroundColor:"#fff",
    borderRadius:85,
    position:"absolute",
    marginTop:240,
    alignItems:"center"
},
informacoes:{
    fontSize:14,
    fontWeight:"400",
    color:"#141415",
    marginTop:35,
    alignSelf:"flex-start",
    marginLeft:63,
},
insideBlock:{
    width:327,
    height:56,
    backgroundColor:"#F0F5FA",
    borderRadius:10,
    marginTop:8,
    marginLeft:3,
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
    marginTop: 30,
},
buttonText:{
    color: "#fff",
    fontSize: 15,
    fontWeight:"500"
}
})
