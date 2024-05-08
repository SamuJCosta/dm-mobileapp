import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronRightIcon, PhoneIcon } from "react-native-heroicons/outline";

const DetalhesDoDiaAdmin = () => {
  const medico1 = require("../../assets/Steven.png");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
       Veterinários
      </Text>
      <View style={styles.boxveterinario}>
        <View style={styles.bordaveterinario}>
            <Image source={medico1} style={styles.img1} />
          <View style={styles.textoveterinario}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Steven</Text>
            <Text
              style={{
                fontSize: 15,
                color: "#064E57",
                fontWeight: 500,
                marginTop: 5,
              }}
            >
              Consultorio Santo Tirso
            </Text>
            <View style={styles.phone}>
            <PhoneIcon color={"#064E57"} width={20} height={20} marginTop={10}/>
            <Text style={styles.numerotel}>912345678</Text>
            </View>
              <Pressable
                style={styles.categoriasveterinarios}
                onPress={() => navigation.navigate("ConsultasVetAdmin")}
              >
                <Text style={styles.texto}>Ver Consultas</Text>
                <ChevronRightIcon style={{ color: "#064E57", margin: -4 }} />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
  );
};

export default VetAdmin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titulo: {
    width:200,
    left: -60,
    alignContent:"flex-start",
    marginTop: 20,
    color: "black",
    fontSize: 30,
    fontWeight: 700,
  },
  boxveterinario: {
    marginTop: 15,
    width: 340,
    height: 151,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "white",
  },
  img1: {
    marginLeft: -1,
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: "orange",
  },
  bordaveterinario: {
    flexDirection: "row",
    margin: 25,
  },

  textoveterinario: {
    marginLeft: 10,
    justifyContent: "flex-start",
  },

  categoriasveterinarios: {
    marginTop: 12,
    flexDirection: "row",
  },
  phone:{
    flexDirection:"row",
  },
  numerotel:{
    marginTop:12,
    marginLeft:5, 
    color:"#064E57"
  },
  texto: {
    color: "#064E57",
    fontSize: 12,
    fontWeight: 600,
  },
});
