import React, { useState, useEffect } from "react";
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
import { Dropdown } from "react-native-element-dropdown";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../../config/firebase.config";
import { getAuth } from "firebase/auth";

export default function AdicionarVetAdmin() {

    const [selectedValue, setSelectedValue] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [numero, setNumero] = useState("");
    const [consultorio, setConsultorio] = useState([]);
  
    const perfiladmin = require("../../assets/AdminImg.png");
    const navigation = useNavigation();

    const fetchConsultorio = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "consultorio"));
        const consultorioData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setConsultorio(consultorioData);
      } catch (e) {
        console.error("Erro ao buscar consultorio: ", e);
      }
    };
    
  
    useEffect(() => {
      fetchConsultorio();
      console.log(consultorio);
    }, []);
  
    const AddVetAdmin = async () => {
      try {
        const auth = getAuth(); 
        const user = auth.currentUser;
  
        if (user) { 
          const docRef = await addDoc(collection(db, "veterinario"), {
            email: email,
            nome: nome,
            password: "123456",
            idConsultorio: selectedValue,
            numero: numero,
          });
          console.log("Veterinario adicionado com ID: ", docRef.id);
          navigation.navigate("AdminScreen");
        } else {
          console.error("Usuário não autenticado.");
        }
      } catch (e) {
        console.error("Erro ao adicionar veterinario: ", e);
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
        <Text style={styles.informacao}>Adicionar Veterinário</Text>
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
            placeholder="Numero"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
            value={numero}
            onChangeText={setNumero}
          />
        </View>
        <Text style={styles.informacao1}>Consultorio</Text>
        <View style={styles.insideBlock}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={consultorio}
          labelField="nome"
          valueField="id"
          placeholder="Selecione a consulta"
          value={selectedValue}
          onChange={(item) => {
            console.log("Item selecionado:", item);
            setSelectedValue(item.id);
          }}        
        />
        </View>      
        <TouchableOpacity
          style={styles.button}
          onPress={AddVetAdmin}
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
    marginTop:15,
    alignSelf: "flex-start",
    marginLeft: 63,
  },
  informacao1: {
    fontSize: 14,
    fontWeight: "400",
    color: "#141415",
    marginTop: 5,
    alignSelf: "flex-start",
    marginLeft: 63,
  },
  insideBlock: {
    width: 327,
    height: 50,
    marginTop: 5,
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
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  dropdown: {
    height: 50,
    backgroundColor: "transparent",
  },
  placeholderStyle: {
    fontSize: 14,
    color: "#6B6E82",
    fontWeight: "400",
    marginLeft: 15,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: "#6B6E82",
    fontWeight: "400",
    marginLeft: 15,
  },
});
