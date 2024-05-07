import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AdjustmentsHorizontalIcon,
  DocumentCheckIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import SplashScreen from "../../screens/SplashScreen";
import Login from "../../screens/Login";
import Registo from "../../screens/Registo";
import RecuperacaoPalavraPasse from "../../screens/RecuperacaoPalavraPasse";
import VerificacaoCode from "../../screens/VerificacaoCode";
import NovaPalavraPasse from "../../screens/NovaPalavraPasse";
import Inicio from "../../screens/cliente/Inicio";
import Descobrir from "../../screens/cliente/Descobrir";
import Explorar from "../../screens/cliente/Explorar";
import Perfil from "../../screens/cliente/Perfil";
import Veterinario from "../../screens/cliente/Veterinario";
import AgendarConsulta from "../../screens/cliente/AgendarConsulta";
import EditarPerfil from "../../screens/cliente/EditarPerfil";
import MeusAnimais from "../../screens/cliente/MeusAnimais";
import MinhasConsultas from "../../screens/cliente/MinhasConsultas";
import MinhasReceitas from "../../screens/cliente/MinhasReceitas";
import ReceitasAnimal from "../../screens/cliente/ReceitasAnimal";
import ConsultasAnimal from "../../screens/cliente/ConsultasAnimal";
import PerfilAnimal from "../../screens/cliente/PerfilAnimal";
import InicioVet from "../../screens/veterinario/InicioVet";
import ConsultasVet from "../../screens/veterinario/ConsultasVet";
import PerfilVet from "../../screens/veterinario/PerfilVet";
import DetalhesDoDia from "../../screens/veterinario/DetalhesDoDia";
import CriarConsultorio from "../../screens/admin/CriarConsultorio";
import InicioAdmin from "../../screens/admin/InicioAdmin";
import VetAdmin from "../../screens/admin/VetAdmin";
import ClientesAdmin from "../../screens/admin/ClientesAdmin";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6FC4CF",
        },
        tabBarStyle: {
          backgroundColor: "#6FC4CF",
          color: "#fff",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          title: "Inicio",
          tabBarLabelStyle: {
            fontWeight: "normal",
            fontSize: 12,
            color: "#fff",
          },
          tabBarIcon: ({ size }) => <HomeIcon size={size} color={"#fff"} />,
        }}
      />
      <Tab.Screen
        name="Descobrir"
        component={Descobrir}
        options={{
          title: "Descobrir",
          tabBarLabelStyle: {
            fontWeight: "normal",
            fontSize: 12,
            color: "#fff",
          },
          tabBarIcon: ({ size }) => (
            <AdjustmentsHorizontalIcon size={size} color={"#fff"} />
          ),
        }}
      />
      <Tab.Screen
        name="Explorar"
        component={Explorar}
        options={{
          title: "Explorar",
          tabBarLabelStyle: {
            fontWeight: "normal",
            fontSize: 12,
            color: "#fff",
          },
          tabBarIcon: ({ size }) => (
            <MagnifyingGlassIcon size={size} color={"#fff"} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "Perfil",
          tabBarLabelStyle: {
            fontWeight: "normal",
            fontSize: 12,
            color: "#fff",
          },
          tabBarIcon: ({ size }) => <UserIcon size={size} color={"#fff"} />,
        }}
      />
    </Tab.Navigator>
  );
}
function VetScreen() {
  return (
    <Tab.Navigator
      initialRouteName="InicioVet"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6FC4CF",
        },
        tabBarStyle: {
          backgroundColor: "#6FC4CF",
          color: "#fff",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="InicioVet"
        component={InicioVet}
        options={{
          title: "Inicio",
          tabBarLabelStyle: {
            fontWeight: "normal",
            fontSize: 12,
            color: "#fff",
          },
          tabBarIcon: ({ size }) => <HomeIcon size={size} color={"#fff"} />,
        }}
      />
      <Tab.Screen
        name="ConsultasVet"
        component={ConsultasVet}
        options={{
          title: "Consultas",
          tabBarLabelStyle: {
            fontWeight: "normal",
            fontSize: 12,
            color: "#fff",
          },
          tabBarIcon: ({ size }) => (
            <DocumentCheckIcon size={size} color={"#fff"} />
          ),
        }}
      />
      <Tab.Screen
        name="PerfilVet"
        component={PerfilVet}
        options={{
          title: "Perfil",
          tabBarLabelStyle: {
            fontWeight: "normal",
            fontSize: 12,
            color: "#fff",
          },
          tabBarIcon: ({ size }) => <UserIcon size={size} color={"#fff"} />,
        }}
      />
    </Tab.Navigator>
  );
}

function AdminScreen() {
  return (
    <Tab.Navigator
      initialRouteName="InicioAdmin"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6FC4CF",
        },
        tabBarStyle: {
          backgroundColor: "#6FC4CF",
          color: "#fff",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="InicioAdmin"
        component={InicioAdmin}
        options={{
          title: "Inicio",
          tabBarLabelStyle: {
            fontWeight: "normal",
            fontSize: 12,
            color: "#fff",
          },
          tabBarIcon: ({ size }) => <HomeIcon size={size} color={"#fff"} />,
        }}
      />
      <Tab.Screen
        name="VetAdmin"
        component={VetAdmin}
        options={{
          title: "Consultas",
          tabBarLabelStyle: {
            fontWeight: "normal",
            fontSize: 12,
            color: "#fff",
          },
          tabBarIcon: ({ size }) => (
            <DocumentCheckIcon size={size} color={"#fff"} />
          ),
        }}
      />
      <Tab.Screen
        name="ClientesAdmin"
        component={ClientesAdmin}
        options={{
          title: "Perfil",
          tabBarLabelStyle: {
            fontWeight: "normal",
            fontSize: 12,
            color: "#fff",
          },
          tabBarIcon: ({ size }) => <UserIcon size={size} color={"#fff"} />,
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="VetScreen" component={VetScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registo" component={Registo} />
        <Stack.Screen
          name="RecuperacaoPalavraPasse"
          component={RecuperacaoPalavraPasse}
        />
        <Stack.Screen name="VerificacaoCode" component={VerificacaoCode} />
        <Stack.Screen name="NovaPalavraPasse" component={NovaPalavraPasse} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen
          name="Veterinario"
          component={Veterinario}
          options={({ route }) => ({
            title: route.params.selectedItems.title,
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6FC4CF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="AgendarConsulta"
          component={AgendarConsulta}
          options={({ route }) => ({
            title: route.params.selectedItems.title,
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6FC4CF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="EditarPerfil"
          component={EditarPerfil}
          options={() => ({
            title: "Editar Perfil",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6FC4CF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="MeusAnimais"
          component={MeusAnimais}
          options={() => ({
            title: "Meus Animais",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6FC4CF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="MinhasConsultas"
          component={MinhasConsultas}
          options={() => ({
            title: "Minhas Consultas",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6FC4CF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="MinhasReceitas"
          component={MinhasReceitas}
          options={() => ({
            title: "Minhas Receitas",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6FC4CF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="ReceitasAnimal"
          component={ReceitasAnimal}
          options={() => ({
            title: "Receitas Animal",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6FC4CF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="ConsultasAnimal"
          component={ConsultasAnimal}
          options={() => ({
            title: "Consultas Animal",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6FC4CF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="PerfilAnimal"
          component={PerfilAnimal}
          options={() => ({
            title: "Perfil Animal",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6FC4CF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen
          name="DetalhesDoDia"
          component={DetalhesDoDia}
          options={({ route }) => ({
            title: `Detalhes do Dia ${route.params.selectedItems}`,
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6FC4CF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          })}
        />
        <Stack.Screen name="InicioAdmin" component={InicioAdmin} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen
          name="CriarConsultorio"
          component={CriarConsultorio}
          options={() => ({
            title: "CriarConsultorio",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#6FC4CF",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default AppNavigation;
