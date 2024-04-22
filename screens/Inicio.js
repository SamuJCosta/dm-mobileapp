import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import data from '../data';
import {useNavigation} from '@react-navigation/native';

export default function Inicio() {
  const navigation = useNavigation();
  const pata= require('../assets/pata.png');
  const location= require('../assets/location.png');
  const map= require('../assets/map.png');
  const veterinario= require('../assets/veterinario.png');
  const mensagem= require('../assets/mensagem.png');
  const imageAnimal1= require('../assets/animal1.png');
  const imageAnimal2= require('../assets/animal2.png');
  const gps= require('../assets/gps.png');
  const coin= require('../assets/coin.png');
  



  const { width:screenWidth } = Dimensions.get('window');

  const sliderWidth = screenWidth;
  const itemWidth = sliderWidth * 8;

  const renderItem = ( {item} ) =>(
    <View style={{
      flexDirection: 'row',
      marginLeft: 10,
      backgroundColor:"#FFF",
      shadowColor: '#A6A6A6',
      shadowOffset: {width: 3, height: 4},
      shadowOpacity: 2,
      shadowRadius: 5,
      width:340,
      borderRadius:10,
      height:125
    }}>
      <Image source={item.imgUrl} style={{width:120, height:120, borderRadius:10, margin: 3}}/>
      <View style={{marginLeft:10}}>
        <Text style = {{fontSize: 22}}>{item.title}</Text>
        <Text>{item.consultorio}</Text>
        <View style={{flexDirection: 'row',columnGap: 5, alignSelf:'flex-end'}}>
          <Image source={gps} style={{height:15,width:15}}/>
          <Text>{item.distancia} km</Text>
          <Image source={coin} style={{height:15,width:15}}/>
          <Text>{item.preco}</Text>
        </View>
        
      </View>
    </View>
  )


  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
    }}>
      <View style={{
          width: 360,
          height: 180,
          backgroundColor:'#fff',
          flexDirection:"column",
          marginTop:15,
          borderRadius: 30,
      }}>
      <View style={{
        flexDirection: "row",
        width:"100%",
        margin: "auto",
        padding:20
      }}>
        <Image source={pata} style={{width:25,height:25}}/>
        <Text style={{
          fontWeight:"bold",
          fontSize: 20,
          marginLeft: 8,
          marginTop:2
        }}>Meus Animais</Text>
      </View>
        <View style={{
          flexDirection: "row",
          justifyContent:'center',
          marginTop: -10
        }}>
        <Pressable onPress={()=> navigation.navigate('PerfilAnimal')} style={{
          flexDirection:"column",
          alignItems:"center"
        }}>
          <Image source={imageAnimal1} style={{
            width:100,
            height:100,
            marginRight:20
          }}/>
          <Text style={{
            color:"#5F5F63",
            fontSize: 16,
            fontWeight:"500"
          }}>Kika</Text>
        </Pressable>
        <Pressable onPress={()=> console.log("Button was pressed")} style={{
          flexDirection:"column",
          alignItems:"center"
        }}>
          <Image source={imageAnimal2} style={{
            width:100,
            height:100,
            marginRight:20
          }}/>
          <Text style={{
            color:"#5F5F63",
            fontSize: 16,
            fontWeight:"500"
          }}>Roudy</Text>
        </Pressable>
        </View>
      </View>
      <View style={{
          flexDirection:"row",
          width:"100%",
          height:290,
          justifyContent:"center",
          alignSelf:'center',
          columnGap: 10,
        
        }}>
          <View style={{
            flexDirection:"column",
            width:"45%",
            height:270,
            backgroundColor:"#fff",
            borderRadius: 20,
            alignItems:'center',
            marginTop:15
          }}>
            <View style={{
              flexDirection: "row",
              width:"100%",
              margin: "auto",
              padding: 5,
              marginTop:5,
              
            }}>
              <Image source={location} style={{width:25,height:25}}/>
              <Text style={{
                fontWeight:"bold",
                fontSize: 19,
                marginLeft: 8,
                marginTop:2
              }}>Consultórios</Text>
            </View>
            <Pressable onPress={()=> console.log("was pressed!")}>
              <Image source={map} style={{height:200, width:150, marginTop:6}}/>
            </Pressable>
          </View>
          <View style={{
            flexDirection:"column",
            width:"45%",
            height:270,
            backgroundColor:"#fff",
            borderRadius: 20,
            alignItems:'center',
            marginTop:15
          }}>
            <View style={{
              flexDirection: "row",
              width:"100%",
              margin: "auto",
              padding: 5,
              marginTop:5,
              
            }}>
              <Image source={mensagem} style={{width:25,height:25}}/>
              <Text style={{
                fontWeight:"bold",
                fontSize: 19,
                marginLeft: 8,
                marginTop:2
              }}>Informação do Animal</Text>
            </View>
            
          </View>
      </View>
      <View style={{
        height:180,
        width:360,
        backgroundColor:"#fff",
        borderRadius:20,
        marginTop:10,
      }}>
        <View style={{margin:"auto", padding:10, flexDirection:"row"}}>
          <Image source={veterinario} style={{width: 30, height:30}}/>
          <Text style={{fontWeight:"bold", fontSize: 19, marginLeft: 8,marginTop:4}}>Veterinarios</Text>
        </View>
        <Carousel
           layout='default'
           data={data}
           renderItem={renderItem}
           sliderWidth={sliderWidth}
           itemWidth={itemWidth}
        />
      </View>
    </View>
  )
}