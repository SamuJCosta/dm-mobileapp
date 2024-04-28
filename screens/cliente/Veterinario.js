import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image} from 'react-native'
import { ClockIcon } from "react-native-heroicons/outline";
import Rating from '../../src/components/Rating';
import {useNavigation} from '@react-navigation/native';

export default function Veterinario( {route}) {


    const navigation = useNavigation();
    const selectedItems = route.params.selectedItems;

    return (
        <View style={styles.container}>
            <Image source={selectedItems.imgUrl} style={styles.img}/>
            <View style={styles.block}>
                <View style={styles.insideBlock}>
                    <Text style={styles.title}>{selectedItems.title}</Text>
                    <Text style={styles.secondTitle}>{selectedItems.consultorio}</Text>
                    <Rating styleRating={styles.starsRating} rating={selectedItems.rating} numerAvaliations={selectedItems.numerAvaliations} />
                    <View style={styles.firstView}>
                        <ClockIcon style={{color:"#000"}} size={12}/>
                        <Text style={styles.horario}>{selectedItems.horario}</Text>
                    </View>
                    <Text style={styles.preco}>{selectedItems.preco} euros por Consulta</Text>
                </View>
                <View style={{marginLeft:30,marginTop:20, marginRight:30}}>
                    <Text style={styles.descricao}>
                        {selectedItems.descricao}
                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('AgendarConsulta', {selectedItems: selectedItems})}>
                    <Text style = {styles.buttonText}>Marcar Consulta</Text>
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
    block:{
        width:"100%",
        height:"80%",
        backgroundColor:"#fff",
        borderRadius:80,
        position:"absolute",
        marginTop:270,
        alignItems:"center"
    },
    insideBlock:{
        width:340,
        height:180,
        backgroundColor:"#fff",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5.473 },
        shadowOpacity: 0.15,
        shadowRadius: 44,
        borderRadius:30,
        marginTop:40,
    },
    title:{
        fontSize:26,
        fontWeight:"700",
        color:"#141415",
        marginTop:20,
        marginLeft:30
    },
    secondTitle:{
        fontSize:16,
        fontWeight:"500",
        color:"#064E57",
        marginLeft:30,
        marginTop:4
    }, 
    starsRating:{
        flexDirection:"row",
        alignItems: "center",
        marginLeft: 30,
        marginTop:10
    },
    horario:{
        color: "#A6A6A6",
        fontSize: 10,
        fontWeight: "400",
        marginLeft:5
    },
    firstView:{
        flexDirection:"row",
        marginLeft:30,
        marginTop: 16 ,
        alignItems:"center"
    },
    preco:{
        color: "#6FC4CF",
        fontWeight:"500",
        fontSize: 15,
        marginLeft:30,
        marginTop:12
    },
    descricao:{
        color:"#191919",
        fontSize: 13,
        fontWeight:"500"
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