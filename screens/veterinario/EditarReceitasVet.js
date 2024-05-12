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
import { PlusIcon } from "react-native-heroicons/outline";
import { Dropdown } from "react-native-element-dropdown";
import clientes from "../../data/clientes";

export default function EditarReceitasVet() {
    const [selectedValue, setSelectedValue] = useState(null);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.informacao}>Editar Receita</Text>
      <View style={styles.insideBlock}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={clientes}
          labelField="nome"
          valueField="id"
          placeholder="Selecione o Animal"
          value={selectedValue}
          onChange={(item) => setSelectedValue(item.value)}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.insideBlock2}>
          <TextInput
            placeholder="Medicamentos"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
          />
          <Pressable onPress={()=>console.log("plus")}>
            <PlusIcon color={"#000"}/>
          </Pressable>
        </View>
        <View style={styles.insideBlock3}>
          <TextInput
            placeholder="1"
            placeholderTextColor="#6B6E82"
            fontSize="14"
            fontWeight="400"
            style={{ marginLeft: 10 }}
          />
        </View>
        
      </View>
      <View style={styles.insideBlock4}>
            <TextInput
              placeholder="Descrição"
              placeholderTextColor="#6B6E82"
              fontSize="14"
              fontWeight="400"
              style={{ marginLeft: 10, marginTop:15 }}
            />
          </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("VetScreen")}
      >
        <Text style={styles.buttonText}>SALVAR</Text>
      </TouchableOpacity>
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
    backgroundColor: '#F0F5FA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
    marginLeft: 3,
    justifyContent: "center",
  },
  insideBlock2: {
    width: 243,
    height: 50,
    marginTop: 10,
    backgroundColor: '#F0F5FA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,    
    borderRadius: 10,
    marginLeft: 3,
    alignItems: "center",
    flexDirection:"row",
    columnGap:100
  },
  insideBlock3: {
    width: 80,
    height: 50,
    marginTop: 10,
    backgroundColor: '#F0F5FA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
    marginLeft: 3,
    justifyContent: "center",
  },
  insideBlock4: {
    width: 327,
    height: 150,
    marginTop: 10,
    backgroundColor: '#F0F5FA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
    marginLeft: 3,
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
