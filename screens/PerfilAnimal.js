import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const PerfilAnimal = () => {
    const animal1= require("../assets/Animal1Perfil.png");
    const gender= require("../assets/femenine.png");
    const pata2= require("../assets/pata2.png");
    return (
        <View style={styles.container}>
            <Image source={animal1} style={styles.img}/>
            <View style={styles.boxinfos}>
                <View style={styles.nomeAnimal}>
                <Text style={{fontSize: 20, fontWeight: 800, marginTop: 25, marginLeft: 20,}}>
                    Kika
                </Text>
                <View style={styles.bordaimagem}> 
                <Image source={gender} style={{marginLeft: 10, width: 30, height: 30, marginTop: 11}}/>
                </View>
                </View>
                <Text style={{color: "#064E57", fontSize: 16, fontWeight:500, marginLeft: 20, marginTop:-30 }}>
                    Border Collie
                </Text>
            </View>
            <View style={styles.infos}>
                <View style={{flexDirection:"row"}}>
                    <Image source={pata2} style={styles.icon}/>
                    <Text style={{fontSize:18, fontWeight:600, marginTop:10, marginLeft: 8,}}>
                    Sobre Kika
                    </Text>
                </View>
            <View style={styles.atributos}>
                <View style={styles.infosanimais}>
                    <Text style={{marginTop: 15, fontSize:16, color: "#32323D", fontWeight: "700",}}>
                        Idade
                    </Text>
                    <Text style={{fontSize:15, color: "#064E57", fontWeight: "600",}}>
                        1a 4m 11d
                    </Text>
                </View>
                <View style={styles.infosanimais}>
                    <Text style={{marginTop: 15, fontSize:16, color: "#32323D", fontWeight: "700",}}>
                        Peso
                    </Text>
                    <Text style={{fontSize:15, color: "#064E57", fontWeight: "600",}}>
                        7,5kg
                    </Text>
                </View>
                <View style={styles.infosanimais}>
                    <Text style={{marginTop: 15, fontSize:16, color: "#32323D", fontWeight: "700",}}>
                        Tamanho
                    </Text>
                    <Text style={{fontSize:15, color: "#064E57", fontWeight: "600",}}>
                        54cm
                    </Text>
                </View>
                <View style={styles.infosanimais}>
                    <Text style={{marginTop: 15, fontSize:16, color: "#32323D", fontWeight: "700",}}>
                        Cor
                    </Text>
                    <Text style={{fontSize:15, color: "#064E57", fontWeight: "600",}}>
                        Preta
                    </Text>
                </View>
            </View>
            <Text style={{fontSize:15, color:"black", marginLeft: 13, marginTop:25, fontWeight:"500"}}>
            O meu primeiro cão, que foi presenteado pela minha mãe no meu aniversário de 20 anos.
            </Text>
            </View>
        </View>
    )
}

export default PerfilAnimal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    img:{
        width:"100%",
        height:"40%"
    },

    boxinfos:{
    width:"90%",
    height:"15%",
    borderRadius:26,
    gap:17,
    backgroundColor:"#FFF",
    marginTop: -50,
    },

    nomeAnimal:{
    flexDirection:"row",
    },

    bordaimagem:{
    borderRadius:20,
    backgroundColor: "#F576AC",
    width:50,
    height:50,
    marginLeft: 200,
    marginTop: 27,
    },

    infos:{
        width:"90%",
        height:"20%",
        marginTop:15,
        backgroundColor: "white",
        borderRadius:20,
    },

    icon:{
        marginTop:10,
        marginLeft:12,
        width: 20,
        height:20,
    },

    atributos:{
        marginLeft:10,
        flexDirection:"row",
        marginTop:20,
        width:"90%",
        height:"60%",
        gap:5,
    },
    infosanimais:{
        borderRadius:20, 
        backgroundColor: "#6FC4CF", 
        width:75, 
        height:75,
        alignItems:"center",
    },
})
