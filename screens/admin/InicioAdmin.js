import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

export default function InicioAdmin() {
  const diaData = new Date();
  const [diaSelecionado, setDiaSelecionado] = useState(
    `${diaData.getDate() < 10 ? "0" : ""}${diaData.getDate()}/${
      diaData.getMonth() + 1 < 10 ? "0" : ""
    }${diaData.getMonth() + 1}`
  );
  const navigation = useNavigation();

  const selecionarDia = (dia) => {
    const data = new Date(dia.dateString);
    const diaDoMes = data.getDate();
    const mes = data.getMonth() + 1;
    const diaMesFormatado = `${diaDoMes < 10 ? "0" : ""}${diaDoMes}/${
      mes < 10 ? "0" : ""
    }${mes}`;
    setDiaSelecionado(diaMesFormatado);
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "80%", height: "65%" }}>
        <Text style={styles.text}>Seu Calendário</Text>
        <Calendar
          style={styles.calendar}
          onDayPress={(day) => selecionarDia(day)}
          hideExtraDays={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("DetalhesDoDiaAdmin", {
            selectedItems: diaSelecionado,
          })
        }
      >
        <Text style={styles.textButton}>
          Ver detalhes do dia {diaSelecionado}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal",
    marginTop: 10,
  },
  calendar: {
    borderRadius: 10,
    marginTop: 30,
    width: 310,
    height: 310,
  },
  button: {
    display: "flex",
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: "#6FC4CF",
    marginTop: 30,
  },
  textButton: {
    fontStyle: "normal",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
