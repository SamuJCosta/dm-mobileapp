import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Keyboard} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {useNavigation} from '@react-navigation/native';
import InputWithIcon from '../src/components/InputWithIcon'; // Importe o componente

export default function RecuperacaoPalavraPasse(){
    const logoImg = require("../assets/logo.png");
    const eclipse = require("../assets/eclipse.png");
    const navigation = useNavigation();
    return (
    <Pressable style={styles.container}  onPress={Keyboard.dismiss}> 
      <View className= "w-full absolute flex-row justify-between items-center pt-14">
        <TouchableOpacity onPress = {()=> navigation.goBack()} style={styles.backButton}>
          <ChevronLeftIcon style={{width: 10, height: 10}} color = "#5E616F"/>
        </TouchableOpacity>
      </View>
      <Images link={eclipse} style={styles.imageStyleEclipse}/>
      <Images link={logoImg} style={styles.imageStyleLogo}/>
      <View style={styles.textConteiner}>
        <Text style={styles.text}>Esqueceu-se da Palavra-Passe?</Text>
        <Text style={styles.secondText}>Por favor insira o endereço de e-mail associado à sua conta</Text>
      </View>
      <InputWithIcon style={styles.input} placeholder="Email" iconColor="#A6A6A6"/>
      <CustomButton text = {"Ok"} action={() => navigation.navigate('VerificacaoCode')}/>
      
      <View style={styles.bottomStyle}/>
      

    </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      backButton: {
        position: 'absolute',
        top: 60,
        left: -190, // Adjust this value as needed
        padding: 10,
        borderRadius: 999,
        backgroundColor: '#6FC4CF',
      },
      input: {
        width: '80%',
      },
      button: {
        display: 'flex',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        borderRadius: 10,
        backgroundColor: "#6FC4CF",
        marginTop: 20,
        marginBottom:220,
      },
      buttonText:{
        color: "#000",
        fontSize: 20,
        textTransform: "uppercase",
        
      },
      imageStyleLogo:{
        width: 250, 
        height: 250,
        zIndex: 20,
        position: "relative",
        marginTop: -190,
      },
      imageStyleEclipse:{
        width: 250, 
        height: 250,
        zIndex: 30,
        position: "relative",
        marginEnd: -139,
        marginTop: 10,
      },
      text:{
       fontSize: 25,
       color: "#747070",
      },
      secondText:{
        fontSize: 20,
        color: "#747070",
        textAlign:"center",
        marginTop: 8,
       },
      textConteiner:{
        justifyContent:"center",
        marginTop: -30,
        marginBottom: 30,
      },
      bottomStyle:{
        width:"100%",
        height:80,
        backgroundColor: "#6FC4CF",
        justifyContent:"center",
        marginTop: 20,
      }
});


const Images = ({link, style}) => {
    return <Image source={link} style={style}/>
}
const CustomButton = ({text, action}) => {
return (<TouchableOpacity 
    style = {styles.button}
    onPress={action}>
    <Text style = {styles.buttonText}>{text}</Text>
</TouchableOpacity>);
}
