import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Pressable, Keyboard} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import {useNavigation} from '@react-navigation/native';
import InputWithIcon from '../src/components/InputWithIcon'; 

export default function Registo(){
    const logoImg = require("../assets/logo.png");
    const eclipse = require("../assets/eclipse.png");
    const googleicon = require("../assets/googleicon.png");
    const facebookicon = require("../assets/facebookicon.png");
    const appleicon = require("../assets/appleicon.png");
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
      <InputWithIcon style={styles.input} placeholder="Email" iconColor="#A6A6A6"/>
      <InputWithIcon style={styles.input} placeholder="Palavra-passe" iconColor="#A6A6A6"/>
      <InputWithIcon style={styles.input} placeholder="Verifique Palavra-passe" iconColor="#A6A6A6"/>
      <CustomButton text = {"Registar"} action={() => console.log("Button was pressed!")}/>
      <Text style = {styles.text}>ou entrar com</Text>
      <TouchableOpacity style = {styles.buttonRegisto}>
        <View style={styles.viewRegisto}>
          <Image source={googleicon} style={styles.imageRegisto}/>
          <Text style={styles.buttonTextRegistos}>Entrar com Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.buttonRegisto}>
        <View style={styles.viewRegisto}>
          <Image source={facebookicon} style={styles.imageRegisto}/>
          <Text style={styles.buttonTextRegistos}>Entrar com Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.buttonRegisto}>
        <View style={styles.viewRegisto}>
          <Image source={appleicon} style={styles.imageRegisto} />
          <Text style={styles.buttonTextRegistos}>Entrar com Apple</Text>
        </View>
      </TouchableOpacity>
      <View style={{
          flexDirection:"row",
          justifyContent:"center",
          marginHorizontal: 22,
          marginTop: 10
      }}>
      <Text style = {{fontSize: 16, color: "#747070"}}>Já tem conta criada? </Text>
      <Pressable
        onPress={()=> navigation.navigate('Login')}
      >
        <Text style={{
          fontSize: 16,
          color: "#6FC4CF",
          fontWeight:"bold",
          marginLeft:2
        }}> Entrar</Text>
      </Pressable>
      </View>
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
      textInput:{
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
      },
      viewRegisto:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      imageRegisto:{
        width: 30,
        height: 25,
      },
      buttonRegisto: {
        display: 'flex',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        borderRadius: 10,
        backgroundColor: "#6FC4CF",
        marginTop:14,
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
        marginTop: 5,
      },
      buttonText:{
        color: "#000",
        fontSize: 20,
        textTransform: "uppercase",
      },
      buttonTextRegistos:{
        color: "#000",
        fontSize: 18,
        textTransform: "capitalize",
      },
      imageStyleLogo:{
        width: 250, 
        height: 250,
        zIndex: 20,
        position: "relative",
        marginTop: -230,
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
       marginTop: 10, 
       fontSize: 20,
       color: "#747070",
      },
      bottomStyle:{
        width:"100%",
        height:80,
        backgroundColor: "#6FC4CF",
        justifyContent:"center",
        marginTop: 10 ,
      }
});


const Images = ({link, style}) => {
    return <Image source={link} style={style}/>
}
  
const InputBtn = ({style, placeholder, color, border}) => {
return <TextInput style={style} placeholder = {placeholder} placeholderTextColor= {color} borderWidth = {border}></TextInput>
}
  
const CustomButton = ({text, action}) => {
return (<TouchableOpacity 
    style = {styles.button}
    onPress={action}>
    <Text style = {styles.buttonText}>{text}</Text>
</TouchableOpacity>);
}