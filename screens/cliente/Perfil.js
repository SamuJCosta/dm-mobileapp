import React, { useCallback , useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
  NewspaperIcon,
  ChevronRightIcon,
  ArrowLeftEndOnRectangleIcon,
} from "react-native-heroicons/outline";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {auth, db} from "../../config/firebase.config"; 
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Perfil() {
  const navigation = useNavigation();
  const [cliente, setCliente] = useState(null);
  const perfil = require("../../assets/perfil.png");
  const pata2 = require("../../assets/pata2.png");


  const fetchCliente = async (user) => {
    if (user) {
      try {
        const clienteDoc = await getDoc(doc(db, "clientes", user.uid));
        if (clienteDoc.exists()) {
          setCliente(clienteDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Erro ao buscar informações do cliente:', error);
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        fetchCliente(user);
      });
      return () => unsubscribe();
    }, [])
  );


  function logout() {
    auth.signOut().then(() => {
      console.log('Utilizador Logout');
      navigation.replace('Login', {isAdmin:false});
    }).catch((error) => {
      console.error('Erro durante o logout: ', error);
    });
  }


  if (!cliente) {
    return (
      <View style={styles.container}>
        <Text>A Carregar...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={perfil} style={styles.img} />
      <View style={styles.block}>
        <View style={styles.insideBlock}>
          <View style={styles.firstView}>
            <Text style={styles.personname}>{cliente.nome}</Text>
            <TouchableOpacity
              style={{ flexDirection: "row", marginLeft: 45, columnGap: 8 }}
              onPress={logout}
            >
              <ArrowLeftEndOnRectangleIcon color={"red"} />
              <Text style={styles.sair}>Sair</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondView}>
            <EnvelopeIcon color={"#000"} />
            <Text style={styles.texto}>{cliente.email}</Text>
          </View>
          <View style={styles.thirdView}>
            <PhoneIcon color={"#000"} size={22} />
            <Text style={styles.texto}>{cliente.telefone}</Text>
          </View>
        </View>
        <View style={styles.insideBlock2}>
          <Pressable style={styles.categorias} onPress={()=> navigation.navigate('EditarPerfil' , {selectedItems: cliente})}>
            <UserCircleIcon color={"#000"}/>
            <Text style={styles.texto}>
              Sobre Mim
            </Text>
            <ChevronRightIcon style={{marginLeft: 143, color: "#000"}}/>
          </Pressable>
          <Pressable
            style={styles.categorias}
            onPress={() => navigation.navigate("MeusAnimais")}
          >
            <Image source={pata2} style={styles.icon} />
            <Text style={styles.texto}>Meus Animais</Text>
            <ChevronRightIcon style={{ marginLeft: 123, color: "#000" }} />
          </Pressable>
          <Pressable
            style={styles.categorias}
            onPress={() => navigation.navigate("MinhasConsultas")}
          >
            <MapPinIcon color={"#000"} />
            <Text style={styles.texto}>Minhas Consultas</Text>
            <ChevronRightIcon style={{ marginLeft: 92, color: "#000" }} />
          </Pressable>
          <Pressable
            style={styles.categorias}
            onPress={() => navigation.navigate("MinhasReceitas")}
          >
            <NewspaperIcon color={"#000"} />
            <Text style={styles.texto}>Minhas Receitas</Text>
            <ChevronRightIcon style={{ marginLeft: 103, color: "#000" }} />
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
  img: {
    width: "100%",
    height: "50%",
  },
  block: {
    width: "125%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: 85,
    position: "absolute",
    marginTop: 265,
    alignItems: "center",
  },
  insideBlock: {
    width: 340,
    height: 165,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5.473 },
    shadowOpacity: 0.15,
    shadowRadius: 44,
    borderRadius: 30,
    marginTop: 20,
  },
  firstView: {
    flexDirection: "row",
    margin: 20,
  },
  personname: {
    color: "#000",
    fontSize: 22,
    fontWeight: "700",
    fontStyle: "normal",
    width:200
  },

  secondView: {
    flexDirection: "row",
    columnGap: 12,
    marginLeft: 35,
  },

  texto: {
    marginTop: 1.5,
    color: "#000",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.45,
  },

  thirdView: {
    marginTop: 25,
    flexDirection: "row",
    columnGap: 12,
    marginLeft: 35,
  },

  insideBlock2: {
    width: 340,
    height: 160,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5.473 },
    shadowOpacity: 0.15,
    shadowRadius: 44,
    borderRadius: 30,
    marginTop: 20,
  },

  categorias: {
    marginTop: 13,
    flexDirection: "row",
    columnGap: 8,
    marginLeft: 35,
  },

  animais: {
    flexDirection: "row",
    columnGap: 8,
    marginLeft: 3,
    color: "#000",
    fontSize: 15,
    fontWeight: "500",
  },

  icon: {
    marginLeft: 3,
    width: 19,
    height: 19,
  },

  sair: {
    marginTop: 3,
    color: "red",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.45,
  },
});
