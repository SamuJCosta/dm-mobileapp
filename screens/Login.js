import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Keyboard,
  Alert
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import InputWithIcon from "../src/components/InputWithIcon";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app, db } from "../config/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export default function Login() {
  const logoImg = require("../assets/logo.png");
  const eclipse = require("../assets/eclipse.png");
  const googleicon = require("../assets/googleicon.png");
  const facebookicon = require("../assets/facebookicon.png");
  const appleicon = require("../assets/appleicon.png");

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [clientes, setClientes] = useState([]);
  const [veterinario, setVeterinario] = useState([]);
  const [admin, setAdmin] = useState([]);

  const route = useRoute();

  useEffect(() => {
    fetchClientes();
    fetchVeterinario();
    fetchAdmin();
    //console.log(clientes);
    //console.log(veterinario);
    //console.log(admin);
    //console.log(route.params.isAdmin);
    
    setIsAdmin(route.params.isAdmin);
    console.log(isAdmin);
  }, [route.params]);


  const fetchClientes = async () => {
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
  };
  const fetchVeterinario = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "veterinario"));
      const veterinarioData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVeterinario(veterinarioData);
    } catch (error) {
      console.error("Erro ao buscar vet:", error);
    }
  };
  const fetchAdmin = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "admin"));
      const adminData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAdmin(adminData);
    } catch (error) {
      console.error("Erro ao buscar admin:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      const auth = getAuth(app);
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      await auth.currentUser.reload();
      const user = userCred.user;
      if (user) {
        //navigation.navigate("HomeScreen", { screen: "Inicio" });
        //navigation.navigate("VetScreen", { screen: "InicioVet" });
        //navigation.navigate("CriarConsultorioAdmin");

        if(isAdmin){}

        const userEmail = user.email;
        if (admin.some(adminUser => adminUser.email === userEmail)) {
          navigation.navigate("CriarConsultorioAdmin");
        } else if (veterinario.some(vetUser => vetUser.email === userEmail)) {
          navigation.navigate("VetScreen", { screen: "InicioVet" });
        } else if (clientes.some(clientUser => clientUser.email === userEmail)) {
          navigation.navigate("HomeScreen", { screen: "Inicio" });
        } else {
          Alert.alert("Erro", "Usuário não encontrado.");
        }
      }
    } catch (error) {
      const errCode = error.code;
      const errMessage = error.message;
      if (errCode === "auth/invalid-credential") {
        console.log("Invalid Credential");
      }
    }
  };
  

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <View className="w-full absolute flex-row justify-between items-center pt-14">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ChevronLeftIcon style={{ width: 10, height: 10 }} color="#5E616F" />
        </TouchableOpacity>
      </View>
      <Images link={eclipse} style={styles.imageStyleEclipse} />
      <Images link={logoImg} style={styles.imageStyleLogo} />
      <InputWithIcon
        style={styles.input}
        placeholder="Email"
        iconColor="#A6A6A6"
        onChangeText={setEmail}
        value={email}
      />
      <InputWithIcon
        style={styles.input}
        placeholder="Palavra-passe"
        iconColor="#A6A6A6"
        onChangeText={setPassword} 
        value={password}
      />
      <Text
        style={{ color: "#6FC4CF", position: "relative", right: -50 }}
        onPress={() => navigation.navigate("RecuperacaoPalavraPasse")}
      >
        Esqueceu-se da Palavra-passe?
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.text}>ou entrar com</Text>
      <TouchableOpacity style={styles.buttonRegisto}>
        <View style={styles.viewRegisto}>
          <Image source={googleicon} style={styles.imageRegisto} />
          <Text style={styles.buttonTextRegistos}>Entrar com Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonRegisto}>
        <View style={styles.viewRegisto}>
          <Image source={facebookicon} style={styles.imageRegisto} />
          <Text style={styles.buttonTextRegistos}>Entrar com Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonRegisto}>
        <View style={styles.viewRegisto}>
          <Image source={appleicon} style={styles.imageRegisto} />
          <Text style={styles.buttonTextRegistos}>Entrar com Apple</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginHorizontal: 22,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 16, color: "#747070" }}>
          Ainda não tem conta criada?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("Registo", { isAdmin })}>
          <Text
            style={{
              fontSize: 16,
              color: "#6FC4CF",
              fontWeight: "bold",
              marginLeft: 2,
            }}
          >
            {" "}
            Registar
          </Text>
        </Pressable>
      </View>
      <View style={styles.bottomStyle} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: -190, // Adjust this value as needed
    padding: 10,
    borderRadius: 999,
    backgroundColor: "#6FC4CF",
  },
  input: {
    width: "80%",
  },
  viewRegisto: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageRegisto: {
    width: 30,
    height: 25,
  },
  buttonRegisto: {
    display: "flex",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: "#6FC4CF",
    marginTop: 14,
  },
  button: {
    display: "flex",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: "#6FC4CF",
    marginTop: 30,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    textTransform: "uppercase",
  },
  buttonTextRegistos: {
    color: "#000",
    fontSize: 18,
    textTransform: "capitalize",
  },
  imageStyleLogo: {
    width: 250,
    height: 250,
    zIndex: 20,
    position: "relative",
    marginTop: -220,
  },
  imageStyleEclipse: {
    width: 250,
    height: 250,
    zIndex: 30,
    position: "relative",
    marginEnd: -139,
    marginTop: 10,
  },
  text: {
    marginTop: 15,
    fontSize: 20,
    color: "#747070",
  },
  bottomStyle: {
    width: "100%",
    height: 80,
    backgroundColor: "#6FC4CF",
    justifyContent: "center",
    marginTop: 20,
  },
});

const Images = ({ link, style }) => {
  return <Image source={link} style={style} />;
};


