import React from 'react'
import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {ChevronRightIcon} from 'react-native-heroicons/outline';

const MeusAnimais = () => {
    const animal1= require("../assets/animal1.png");
    const animal2= require("../assets/animal2.png");
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={{ left:-70, marginTop: 20, color:"black", fontSize:30, fontWeight:700 }}>
                Meus Animais
            </Text>
            <View style={styles.boxanimais}>
                <View style={styles.bordaanimal}>
                    <Pressable onPress={()=> navigation.navigate('PerfilAnimal')} >
                <Image source={animal1} style={styles.img1}/>
                    </Pressable>
                <View style={styles.textoanimais}>
                    <Text style={{fontSize: 20, fontWeight: 700, }}>
                        Kika
                    </Text>
                    <Text style={{fontSize:15, color:"#064E57", fontWeight:500, marginTop:5}}>
                        Border Collie
                    </Text>
                    <View style={styles.categoriasanimais}>
                    <Pressable style={styles.categorias} onPress={()=> navigation.navigate('ReceitasAnimal')}>
                    <Text style={styles.texto}>
                      Ver Receitas
                    </Text>
                    <ChevronRightIcon style={{color: "#064E57", margin: -4}}/>
                    </Pressable>
                    <Pressable style={styles.categorias} onPress={()=> navigation.navigate('ConsultasAnimal')}>
                    <Text style={styles.texto}>
                      Ver Consultas
                    </Text>
                    <ChevronRightIcon style={{color: "#064E57", margin: -4}}/>
                    </Pressable>
                    </View>
                </View>
                </View>
            </View>
            <View style={styles.boxanimais}>
                <View style={styles.bordaanimal}>
                <Image source={animal2} style={styles.img2}/>
                <View style={styles.textoanimais}>
                    <Text style={{fontSize: 20, fontWeight: 700,  }}>
                        Roudy
                    </Text>
                    <Text style={{fontSize:15, color:"#064E57", fontWeight:500, marginTop:5}}>
                        Border Collie
                    </Text>
                    <View style={styles.categoriasanimais}>
                    <Pressable style={styles.categorias} onPress={()=> console.log("Receitas")}>
                    <Text style={styles.texto}>
                      Ver Receitas
                    </Text>
                    <ChevronRightIcon style={{color: "#064E57", margin: -4}}/>
                  </Pressable>
                  <Pressable style={styles.categorias} onPress={()=> console.log("Consultas")}>
                    <Text style={styles.texto}>
                      Ver Consultas
                    </Text>
                    <ChevronRightIcon style={{color: "#064E57", margin: -4}}/>
                    </Pressable>
                    </View>
                </View>
                </View>
            </View>
        </View>
    )
}

export default MeusAnimais

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    },
boxanimais: {
    marginTop: 15,
    width: 340,
    height: 151,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "white",
},
img1: {
    marginLeft:-1,
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "orange",
},

img2: {
    marginLeft:-1,
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "cyan",
},

bordaanimal:{
    flexDirection: 'row',
    margin: 25,
},

textoanimais:{
    marginLeft:10,
    justifyContent:"flex-start",
},

categorias:{
    marginTop: 12,
    flexDirection: "row",
},
  texto:{ 
    color:"#064E57",
    fontSize: 12,
    fontWeight: 600,
    },
})
