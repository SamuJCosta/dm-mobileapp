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
import { getAuth } from "firebase/auth"; // Importar autenticação do Firebase
import { db } from "../../config/firebase.config";

export default function AddClienteAdmin() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [password, setPassword] = useState("");

  const perfiladmin = require("../../assets/AdminImg.png");
  const navigation = useNavigation();

  const AddClienteAdmin = async () => {
    try {
      const auth = getAuth(); // Obter a instância de autenticação
      const user = auth.currentUser;

      if (user) { // Verificar se o usuário está autenticado
        const docRef = await addDoc(collection(db, "clientes"), {
          email: email,
          nome: nome,
          password: password,
          numero: numero,
        });
        console.log("Cliente adicionado com ID: ", docRef.id);
        navigation.navigate("AdminScreen");
      } else {
        console.error("Usuário não autenticado.");
      }
    } catch (e) {
      console.error("Erro ao adicionar cliente: ", e);
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
        <Text style={styles.informacao}>Adicionar Cliente</Text>
        <Text style={styles.informacao1}>NOME COMPLETO</Text>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="Nome Completo"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <Text style={styles.informacao1}>EMAIL</Text>
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
        <Text style={styles.informacao1}>TELEFONE</Text>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="Telefone"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
            value={numero}
            onChangeText={setNumero}
          />
        </View>
        <Text style={styles.informacao1}>PASSWORD</Text>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={AddClienteAdmin}
        >
          <Text style={styles.buttonText}>ADICIONAR</Text>
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
    marginTop: 250,
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
    fontSize: 16,
    fontWeight: "600",
    color: "#141415",
    marginTop: 25,
    alignSelf: "flex-start",
    marginLeft: 63,
  },
  informacao1: {
    fontSize: 14,
    fontWeight: "400",
    color: "#141415",
    marginTop: 3,
    alignSelf: "flex-start",
    marginLeft: 63,
  },
  insideBlock: {
    width: 327,
    height: 56,
    marginTop: 10,
    backgroundColor: "#F0F5FA",
    borderRadius: 10,
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
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
});
