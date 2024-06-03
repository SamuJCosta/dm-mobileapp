import React, { useEffect, useState } from "react";
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
import { Dropdown } from 'react-native-element-dropdown';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../../config/firebase.config";

export default function AddAnimaisVet() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [nome, setNome] = useState("");
  const [alcunha, setAlcunha] = useState("");
  const [genero, setGenero] = useState("");
  const [idade, setIdade] = useState("");
  const [cor, setCor] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [peso, setPeso] = useState("");
  const [descricao, setDescricao] = useState("");
  const [clientes, setClientes] = useState([]);

  

  const perfiladmin = require("../../assets/AdminImg.png");
  const navigation = useNavigation();
  
  const fetchClientes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "clientes"));
      const clientesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        nome: doc.data().nome 
      }));
      setClientes(clientesData);
    } catch (e) {
      console.error("Erro ao buscar clientes: ", e);
    }
  };
  

  useEffect(() => {
    fetchClientes();
    //console.log(clientes);
  }, []);

  const addAnimal = async () => {
    const auth = getAuth(); 
    const user = auth.currentUser;
    if (!selectedValue) {
      console.error("Por favor, selecione um cliente antes de adicionar o animal.");
      return;
    }
    if(user){
      try {
        const docRef = await addDoc(collection(db, "animal"), {
          nome : nome,
          alcunha : alcunha,
          genero: genero,
          idade: idade, 
          cor: cor,
          tamanho: tamanho, 
          peso: peso,
          descricao: "descricao",
          clienteId : selectedValue,
        });
        console.log("Animal adicionado com ID: ", docRef.id);
        navigation.navigate("VetScreen");
      } catch (e) {
        console.error("Erro ao adicionar animal: ", e);
      }
    }
  };
  

  if (!clientes) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={perfiladmin} style={styles.img} />
      <View style={styles.block}>
        <Pressable onPress={() => console.log("Editar")}>
          <View style={styles.eclipse}>
            <PencilIcon color={"white"} margin={8} />
          </View>
        </Pressable>
        <Text style={styles.informacao}>Adicionar Animal</Text>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="Nome Animal"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View style={styles.insideBlock}>
          <TextInput
            placeholder="Alcunha"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
            value={alcunha}
            onChangeText={setAlcunha}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.insideBlock3}>
            <TextInput
              placeholder="Género"
              placeholderTextColor="#6B6E82"
              fontSize="14"
              fontWeight="400"
              style={{ marginLeft: 10 }}
              value={genero}
              onChangeText={setGenero}
            />
          </View>
          <View style={styles.insideBlock3}>
            <TextInput
              placeholder="Idade"
              placeholderTextColor="#6B6E82"
              fontSize="14"
              fontWeight="400"
              style={{ marginLeft: 10 }}
              value={idade}
              onChangeText={setIdade}
            />
          </View>
          <View style={styles.insideBlock3}>
            <TextInput
              placeholder="Cor"
              placeholderTextColor="#6B6E82"
              fontSize="14"
              fontWeight="400"
              style={{ marginLeft: 10 }}
              value={cor}
              onChangeText={setCor}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.insideBlock2}>
            <TextInput
              placeholder="Tamanho"
              placeholderTextColor="#6B6E82"
              fontSize="14"
              fontWeight="400"
              style={{ marginLeft: 10 }}
              value={tamanho}
              onChangeText={setTamanho}
            />
          </View>
          <View style={styles.insideBlock2}>
            <TextInput
              placeholder="Peso"
              placeholderTextColor="#6B6E82"
              fontSize="14"
              fontWeight="400"
              style={{ marginLeft: 10 }}
              value={peso}
              onChangeText={setPeso}
            />
          </View>
        </View>
        <View style={styles.insideBlock}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={clientes}
            labelField="nome"
            valueField="id"
            placeholder="Selecione o cliente"
            value={selectedValue}
            onChange={(item) => {
              console.log("Item selecionado:", item);
              setSelectedValue(item.id);
            }}
            />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={addAnimal}
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
    marginTop: 20,
    alignSelf: "flex-start",
    marginLeft: 63,
  },
  insideBlock: {
    width: 327,
    height: 50,
    marginTop: 10,
    backgroundColor: "#F0F5FA",
    borderRadius: 10,
    marginLeft: 3,
    justifyContent: "center",
  },
  insideBlock2: {
    width: 163,
    height: 50,
    marginTop: 10,
    backgroundColor: "#F0F5FA",
    borderRadius: 10,
    marginLeft: 3,
    justifyContent: "center",
  },
  insideBlock3: {
    width: 109,
    height: 50,
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
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
  },
  placeholderStyle: {
    fontSize: 14,
    color:"#6B6E82",
    fontWeight:"400",
    marginLeft:15
  },
  selectedTextStyle: {
    fontSize: 14,
    color:"#6B6E82",
    fontWeight:"400",
    marginLeft:15
  },
});
