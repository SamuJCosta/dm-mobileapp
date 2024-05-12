import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { CheckIcon } from "react-native-heroicons/outline";
import consulta from "../../data/consulta";

export default function DetalhesDoDia({ route }) {
  const selectedItems = route.params.selectedItems;

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.titulo}>Consultas do dia {selectedItems}</Text>
        <View style={styles.box2}>
          <View style={styles.box3}>
            <Text style={styles.texto1}>Cliente: Jonh Doe</Text>
            <Text style={styles.texto1}>Tipo Animal: Cão</Text>
            <Text style={styles.texto2}>Dia: Segunda-Feira 27 Agosto</Text>
            <Text style={styles.texto2}>Hora: 9:30 às 10:30</Text>
          </View>
          <Pressable onPress={() => console.log("confirmado!")}>
            <CheckIcon size={65} color={"#000"} />
          </Pressable>
        </View>
        <View style={styles.box2}>
          <View style={styles.box3}>
            <Text style={styles.texto1}>Cliente: Jonh Doe</Text>
            <Text style={styles.texto1}>Tipo Animal: Cão</Text>
            <Text style={styles.texto2}>Dia: Segunda-Feira 27 Agosto</Text>
            <Text style={styles.texto2}>Hora: 9:30 às 10:30</Text>
          </View>
          <Pressable onPress={() => console.log("confirmado!")}>
            <CheckIcon size={65} color={"#000"} />
          </Pressable>
        </View>
        <View style={styles.box2}>
          <View style={styles.box3}>
            <Text style={styles.texto1}>Cliente: Jonh Doe</Text>
            <Text style={styles.texto1}>Tipo Animal: Cão</Text>
            <Text style={styles.texto2}>Dia: Segunda-Feira 27 Agosto</Text>
            <Text style={styles.texto2}>Hora: 9:30 às 10:30</Text>
          </View>
          <Pressable onPress={() => console.log("confirmado!")}>
            <CheckIcon size={65} color={"#000"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 5,
  },
  box1: {
    width: "90%",
    height: "95%",
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: "column",
    rowGap: 10,
    margin: "auto",
    marginBottom: 10,
  },
  box2: {
    width: "90%",
    height: "15%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 20,
    flexDirection: "row",
    margin: "auto",
    padding: 15,
    alignItems: "center",
  },
  box3: {
    flexDirection: "column",
    width: "80%",
    height: "100%",
  },
  texto1: {
    fontWeight: "700",
    fontSize: 15,
  },
  texto2: {
    fontWeight: "300",
    fontSize: 15,
  },
});
