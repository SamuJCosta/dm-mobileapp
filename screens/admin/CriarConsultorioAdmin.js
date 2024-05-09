import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PencilIcon } from "react-native-heroicons/outline";

export default function CriarConsultorioAdmin() {
  const perfiladmin = require("../../assets/AdminImg.png");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={perfiladmin} style={styles.img} />
      <View style={styles.block}>
        <Pressable onPress={() => console.log("Editar")}>
          <View style={styles.eclipse}>
            <PencilIcon color={"white"} margin={8} />
          </View>
        </Pressable>
        <Text style={styles.informacao}>NOME CONSULTÓRIO</Text>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="Consultório Mata Real"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
          />
        </View>
        <Text style={styles.informacao}>EMAIL</Text>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="admin@gmail.com"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
          />
        </View>
        <Text style={styles.informacao}>TELEFONE</Text>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="919724489"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
          />
        </View>
        <Text style={styles.informacao}>LOCALIZAÇÃO</Text>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="Rua São João da Poeira, N40, Porto"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AdminScreen")}
        >
          <Text style={styles.buttonText}>CRIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "40%",
  },
  block: {
    width: "120%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 85,
    position: "absolute",
    marginTop: 230,
    alignItems: "center",
  },
  eclipse: {
    margin: -20,
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#6FC4CF",
  },
  informacao: {
    fontSize: 14,
    fontWeight: "400",
    color: "#141415",
    marginTop: 20,
    alignSelf: "flex-start",
    marginLeft: 63,
  },
  insideBlock: {
    width: 327,
    height: 56,
    backgroundColor: "#F0F5FA",
    borderRadius: 10,
    marginTop: 8,
    marginLeft: 3,
    justifyContent: "center",
  },

  button: {
    display: "flex",
    width: 300,
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: "#6FC4CF",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
});
