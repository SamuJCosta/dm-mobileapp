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

export default function VetAdmin() {
  const navigation = useNavigation();
  const firstvet = require("../../assets/DrPaula.png");
  const [veterinario, setVeterinario] = useState([]);



  const fetchVeterinario = async () => {
    const auth = getAuth(); 
    const user = auth.currentUser;
    if(user){
      try {
        const querySnapshot = await getDocs(collection(db, "veterinario"));
        const veterinarioData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVeterinario(veterinarioData);
      } catch (e) {
        console.error("Erro ao buscar veterionario: ", e);
      }
    }
  };
  

  useEffect(() => {
    fetchVeterinario();
    console.log(veterinario);
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchVeterinario();
    }, [])
  );

  const handleDeleteVeterinario = async (id) => {
    try {
      await deleteDoc(doc(db, "veterinario", id));
      console.log("Vet excluído com sucesso!");
      fetchVeterinario();
    } catch (error) {
      console.error("Erro ao excluir Vet:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <View style={styles.veterinario}>
          <UserIcon color={"black"} width={30} height={30} marginTop={15} />
          <Text style={styles.texto}>Veterinario</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AdicionarVetAdmin")}
          >
            <PlusIcon color={"white"} />
            <Text style={styles.buttonText}>Adicionar Veterinario</Text>
          </TouchableOpacity>
        </View>
        {veterinario.map(veterinario => (
          <View style={styles.firstvet} key={veterinario.id}>
            <Image source={firstvet} style={styles.imgvet} />
            <View style={styles.infos}>
              <Text style={styles.name}>{veterinario.nome}</Text>
              <Text style={styles.email}>{veterinario.email}</Text>
            </View>
            <Pressable onPress={() =>handleDeleteVeterinario(veterinario.id)}>
              <TrashIcon color={"gray"} marginTop={10} />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("EditarVeterinarioAdmin")}
            >
              <PencilIcon color={"gray"} marginLeft={40} marginTop={10} />
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
  imgvet: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  veterinario: {
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
  firstvet: {
    flexDirection: "row",
    marginTop: 25,
  },
  infos: {
    width: 185,
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
