import React, { useEffect, useState, useCallback } from "react";
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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import { getAuth } from "firebase/auth";

export default function ClientesAdmin() {
  const navigation = useNavigation();
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetchClientes();
    console.log(clientes);
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchClientes();
    }, [])
  );

  const fetchClientes = async () => {
    const auth = getAuth(); 
    const user = auth.currentUser;
    if(user){
      try {
        const querySnapshot = await getDocs(collection(db, "clientes"));
        const clientesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClientes(clientesData);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    }
  };

  const handleDeleteCliente = async (id) => {
    try {
      await deleteDoc(doc(db, "clientes", id));
      console.log("Cliente excluído com sucesso!");
      fetchClientes();
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
    }
  };

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
        {clientes.map(cliente => (
          <View style={styles.firstuser} key={cliente.id}>
            <Image source={require("../../assets/DrPaula.png")} style={{height:50,width:50, borderRadius:20}}/>
            <View style={styles.infos}>
              <Text style={styles.name}>{cliente.nome}</Text>
              <Text style={styles.email}>{cliente.email}</Text>
            </View>
            <Pressable onPress={() => handleDeleteCliente(cliente.id)}>
              <TrashIcon color={"gray"} marginTop={10} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("EditarClienteAdmin")}>
              <PencilIcon color={"gray"} marginLeft={20} marginTop={10} />
            </Pressable>
          </View>
        ))}
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
    width: 200,
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
