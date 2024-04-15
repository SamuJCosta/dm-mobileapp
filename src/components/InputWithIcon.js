import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { EnvelopeIcon, LockClosedIcon } from "react-native-heroicons/outline";

const InputWithIcon = ({ placeholder, iconColor, ...props }) => {

  if(placeholder === "Palavra-passe" || placeholder === "Verifique Palavra-passe"){
      return (
          <View style={[styles.container, props.style]}>
            <LockClosedIcon  style={styles.icon} color={iconColor} />
            <TextInput
              placeholder={placeholder}
              placeholderTextColor="#8D8D8D"
              secureTextEntry
              {...props}
            />
          </View>
        );
  }else{
      return (
          <View style={[styles.container, props.style]}>
          <EnvelopeIcon  style={styles.icon} color={iconColor} />
          <TextInput
              placeholder={placeholder}
              placeholderTextColor="#8D8D8D"
              {...props}
          />
          </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D4D4D4',
    borderRadius: 10,
    padding: 10,
    borderWidth: 0,
    margin: 12,
    height: 45,
    width: 350,
  },
  icon: {
    marginRight: 5, // Ajuste conforme necessário
    width: 20, // Ajuste conforme necessário
    height: 20, // Ajuste conforme necessário
  },
  input: {
    flex: 1,
    color: '#000', // Cor do texto
    fontSize: 12, // Tamanho da fonte
  },
});

export default InputWithIcon;
