import React from "react";
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, Pressable, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MinusIcon } from "react-native-heroicons/outline";

export default function SplashScreen() {
  const home = require("../assets/homescreen.png");
  const logoImg = require("../assets/logo.png");
  const navigation = useNavigation();
  
  return (
    <ImageBackground source={home} style={styles.imageStyleHome}>
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <MinusIcon style={styles.minusIcon} />
          <Image source={logoImg} style={styles.logoImg} />
          <Text style={styles.welcomeText}>Bem-Vindo</Text>
          <Text style={styles.subtitleText}>Onde as patas estão em boas mãos!</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registo', { isAdmin: false })}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>Entrar como Admin!</Text>
            <Pressable onPress={() => navigation.navigate('Login', { isAdmin: true })}>
              <Text style={styles.linkText}> Entrar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageStyleHome: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: "100%",
    height: "46%",
    backgroundColor: "#fff",
    flexDirection: "column",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
    margin: "auto",
    padding: 50,
  },
  minusIcon: {
    alignSelf: "center",
    color: "#6FC4CF",
  },
  logoImg: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginBottom: 12,
  },
  welcomeText: {
    fontSize: 30,
    textAlign: "center",
  },
  subtitleText: {
    color: "#A1A1A1",
    fontSize: 20,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  button: {
    display: 'flex',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#6FC4CF",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 22,
    marginTop: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  linkText: {
    fontSize: 16,
    color: "#6FC4CF",
    fontWeight: "bold",
    marginLeft: 2,
  },
});
