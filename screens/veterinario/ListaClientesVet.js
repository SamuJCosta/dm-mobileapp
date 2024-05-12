import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import {
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import clientes from "../../data/clientes";

export default function ListaClientesVet() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.firstuser}>
      <Image source={item.img} style={styles.img} />
      <View style={styles.infos}>
        <Text style={styles.name}>{item.nome}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
      <Pressable onPress={() => console.log("Apagado!")}>
        <TrashIcon color={"gray"} marginTop={10} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("EditarClientesVet")}>
        <PencilIcon color={"gray"} marginLeft={40} marginTop={10} />
      </Pressable>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <View style={styles.cliente}>
          <UserIcon color={"black"} width={30} height={30} marginTop={15} />
          <Text style={styles.texto}>Clientes</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AddClienteVet")}
          >
            <PlusIcon color={"white"} />
            <Text style={styles.buttonText}>Adicionar Cliente</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={clientes} renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  block: {
    width: "95%",
    height: "97%",
    backgroundColor: "#fff",
    borderRadius: 35,
    position: "absolute",
    marginTop: 10,
    alignItems: "center",
  },
  cliente: {
    flexDirection: "row",
    marginTop: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  texto: {
    marginTop: 18,
    marginLeft: 10,
    fontSize: 18,
    color: "#6FC4CF",
    fontWeight: "600",
  },
  button: {
    flexDirection: "row",
    display: "flex",
    width: 180,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#6FC4CF",
    marginTop: 8,
    marginLeft: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
  },
  firstuser: {
    marginTop: 15,
    flexDirection: "row",
    height: 50,
  },
  infos: {
    width: 190,
    flexDirection: "column",
    marginRight: 35,
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  email: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "300",
  },
});
