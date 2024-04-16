import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdjustmentsHorizontalIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline';
import SplashScreen from '../../screens/SplashScreen';
import Login from '../../screens/Login';
import Registo from '../../screens/Registo';
import RecuperacaoPalavraPasse from '../../screens/RecuperacaoPalavraPasse';
import VerificacaoCode from '../../screens/VerificacaoCode';
import NovaPalavraPasse from '../../screens/NovaPalavraPasse';
import Inicio from '../../screens/Inicio';
import Descobrir from '../../screens/Descobrir';
import Explorar from '../../screens/Explorar';
import Perfil from '../../screens/Perfil';
import Veterinario from '../../screens/Veterinario';
import AgendarConsulta from '../../screens/AgendarConsulta';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return(
    <Tab.Navigator
      initialRouteName='Inicio'
      screenOptions={{
        headerStyle:{
          backgroundColor:"#6FC4CF",
        },
        tabBarStyle:{
          backgroundColor:"#6FC4CF", 
          color:"#fff", 
          alignItems:"center", 
          justifyContent:"center"
      }}}
      >
      <Tab.Screen
        name='Inicio'
        component={Inicio}
        options={{title: 'Inicio', 
        tabBarLabelStyle:{ 
            fontWeight: 'normal', 
            fontSize: 12, 
            color: '#fff' 
        },
        tabBarIcon:({size}) => (
          <HomeIcon size={size} color={"#fff"}/>
        )}}
      />
      <Tab.Screen
        name='Descobrir'
        component={Descobrir}
        options={{title: 'Descobrir', 
        tabBarLabelStyle:{ 
            fontWeight: 'normal', 
            fontSize: 12, 
            color: '#fff' 
        },
        tabBarIcon:({size}) => (
          <AdjustmentsHorizontalIcon size={size} color={"#fff"}/>
        )}}
      />
      <Tab.Screen
        name='Explorar'
        component={Explorar}
        options={{title: 'Explorar', 
        tabBarLabelStyle:{ 
            fontWeight: 'normal', 
            fontSize: 12, 
            color: '#fff' 
        },
        tabBarIcon:({size}) => (
          <MagnifyingGlassIcon size={size} color={"#fff"}/>
        )}}
      />
      <Tab.Screen
        name='Perfil'
        component={Perfil}
        options={{title: 'Perfil', 
        tabBarLabelStyle:{ 
            fontWeight: 'normal', 
            fontSize: 12, 
            color: '#fff' 
        },
        tabBarIcon:({size}) => (
          <UserIcon size={size} color={"#fff"}/>
        )}}
      />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions ={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registo" component={Registo} />
            <Stack.Screen name="RecuperacaoPalavraPasse" component={RecuperacaoPalavraPasse} />
            <Stack.Screen name="VerificacaoCode" component={VerificacaoCode} />
            <Stack.Screen name="NovaPalavraPasse" component={NovaPalavraPasse}/>
            <Stack.Screen name="Inicio" component={Inicio} />
            <Stack.Screen
              name="Veterinario"
              component={Veterinario}
              options={({ route }) => ({
                title: route.params.selectedItems.title,
                headerShown:true,
                headerStyle: {
                  backgroundColor: '#6FC4CF', 
                },
                headerTintColor: '#fff', 
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTitleAlign: 'center', 
                headerBackTitleVisible: false,
              })}
            />
            <Stack.Screen
              name="AgendarConsulta"
              component={AgendarConsulta}
              options={({ route }) => ({
                title: route.params.selectedItems.title,
                headerShown:true,
                headerStyle: {
                  backgroundColor: '#6FC4CF', 
                },
                headerTintColor: '#fff', 
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTitleAlign: 'center', 
                headerBackTitleVisible: false,
              })}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;

