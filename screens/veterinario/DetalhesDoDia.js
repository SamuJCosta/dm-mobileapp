import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import consulta from "../../data/consulta";

export default function DetalhesDoDia({ route }) {
  const selectedItems = route.params.selectedItems;

  renderItem = () => {
    <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
    </View>
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Consultas do dia {selectedItems}</Text>
        <FlatList data={consulta} renderItem={renderItem}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
