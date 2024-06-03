import React, { useState } from "react";
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
import { collection, addDoc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import { db } from "../../config/firebase.config";

export default function CriarConsultorioAdmin() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [localizacao, setLocalizacao] = useState("");

  const perfiladmin = require("../../assets/AdminImg.png");
  const navigation = useNavigation();

  const AddConsultorioAdmin = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const docRef = await addDoc(collection(db, "consultorio"), {
          idAdmin: user.uid,
          email: email,
          nome: nome,
          numero: numero,
          localizacao: localizacao,
        });
        console.log("Consultorio adicionado com ID: ", docRef.id);
        navigation.navigate("AdminScreen");
      } else {
        console.error("Usuário não autenticado.");
      }
    } catch (e) {
      console.error("Erro ao adicionar consultorio: ", e);
    }
  };
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
            placeholder="Nome Consultório"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <Text style={styles.informacao}>EMAIL</Text>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={styles.informacao}>TELEFONE</Text>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="Número"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
            value={numero}
            onChangeText={setNumero}
          />
        </View>
        <Text style={styles.informacao}>LOCALIZAÇÃO</Text>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="Localização"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
            value={localizacao}
            onChangeText={setLocalizacao}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={AddConsultorioAdmin}>
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
