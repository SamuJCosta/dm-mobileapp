import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Keyboard} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {useNavigation} from '@react-navigation/native';
import OTPInputField from "../src/components/OTPInputField";
import { useState } from "react";

export default function VerificacaoCode(){
    const logoImg = require("../assets/logo.png");
    const eclipse = require("../assets/eclipse.png");
    const navigation = useNavigation();

    const [code, setCode] = useState("");
    const [pinReady, setPinReady] = useState(false);
    const MAX_CODE_LENGTH = 4;

    return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}> 
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
      <OTPInputField 
        setPinReady={setPinReady}
        code={code}
        setCode={setCode}
        maxLenght={MAX_CODE_LENGTH}
      />
      <TouchableOpacity 
        style = {
            !pinReady ? styles.button2 : styles.button1
        }
        disabled={!pinReady}
        onPress = {() => navigation.navigate('NovaPalavraPasse')}>
        <Text 
          style = {
            !pinReady ? styles.buttonText2 : styles.buttonText1
          }
        disabled={!pinReady}>
        Enviar</Text>
      </TouchableOpacity>
      
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
        top: 50,
        left: -190, // Adjust this value as needed
        padding: 10,
        borderRadius: 999,
        backgroundColor: '#6FC4CF',
      },
      input: {
        width: '80%',
      },
      button1: {
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
      button2: {
        display: 'flex',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        borderRadius: 10,
        backgroundColor: "#BBE6EC",
        marginTop: 20,
        marginBottom:220,
      },
      buttonText1:{
        color: "#000",
        fontSize: 20,
        textTransform: "uppercase",
        
      },
      buttonText2:{
        color: "#969696",
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
        marginTop: 4,
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
        marginTop: -20,
      }
});


const Images = ({link, style}) => {
    return <Image source={link} style={style}/>
}

