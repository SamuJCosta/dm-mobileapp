import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, FlatList, Image, Text, Pressable } from 'react-native';
import { MagnifyingGlassIcon, ChevronRightIcon, PhoneIcon } from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import Data from '../../data/data';

export default function Descobrir() {

  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchData(Data);
  }, []);

  const fetchData = async () => {
    try {
      const json = { results: Data };
      setData(json.results);
      setFullData(json.results);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = fullData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) || // Filter by title
        item.consultorio.toLowerCase().includes(query.toLowerCase()) // Filter by consultorio
    );
    setData(filteredData);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} color={'#000'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Erro ao encontrar o conteudo... Por-favor verifique a sua ligação</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imgUrl} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.secondTitle}>{item.consultorio}</Text>
        <Pressable 
          style={styles.alignment} 
          onPress={()=> navigation.navigate("Veterinario", {
            selectedItems: item,
          })}>
          <PhoneIcon style={{marginLeft:15}} color={"#000"} size={15}/>
          <Text style={styles.thirdTitle}>{item.phone}</Text>
          <Text style={styles.fourTitle}>Ver Mais</Text>
          <ChevronRightIcon color={"#000"} size={16}/>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container} >
      <View style={styles.assembler}>
        <View style={styles.explorer}>
          <TextInput
            style={styles.input}
            placeholder="Procure Aqui"
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            value={searchQuery}
            onChangeText={(query) => handleSearch(query)}
          />
        </View>
        <View style={styles.buttomP}>
          <TouchableOpacity>
            <MagnifyingGlassIcon style={styles.icon} color={'#000'} size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  assembler: {
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'center',
  },
  explorer: {
    backgroundColor: '#fff',
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  input: {
    marginLeft: 10,
    marginTop: 10,
  },
  buttomP: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 3,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: '400',
  },
  secondTitle: {
    fontSize: 14,
    marginLeft: 10,
    color: 'grey',
  },
  thirdTitle: {
    fontSize: 14,
    marginLeft: 5,
    color: 'grey',
  },
  fourTitle: {
    fontSize: 14,
    marginLeft: 100,
    fontWeight: "400",
  },
  alignment:{
    flexDirection: 'row',
    alignItems:"center",
    marginTop:10
  }
});
