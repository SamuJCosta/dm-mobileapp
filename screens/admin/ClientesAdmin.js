import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import {
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function ClientesAdmin() {
  const navigation = useNavigation();
  const firstuser = require("../../assets/1User.png");

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <View style={styles.cliente}>
          <UserIcon color={"black"} width={30} height={30} marginTop={15} />
          <Text style={styles.texto}>Clientes</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AdicionarClienteAdmin")}
          >
            <PlusIcon color={"white"} />
            <Text style={styles.buttonText}>Adicionar Cliente</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.firstuser}>
          <Image source={firstuser} />
          <View style={styles.infos}>
            <Text style={styles.name}>Jonh Dee</Text>
            <Text style={styles.email}>john.doe@gmail.com</Text>
          </View>
          <Pressable onPress={() => console.log("Apagado!")}>
            <TrashIcon color={"gray"} marginTop={10} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("EditarClienteAdmin")}>
            <PencilIcon color={"gray"} marginLeft={40} marginTop={10} />
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
    flexDirection: "row",
    marginTop: 25,
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
