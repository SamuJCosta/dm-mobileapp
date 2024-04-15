import React, { useRef, useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";

const primary = "#6FC4CF";
const secondary = "#D4D4D4";
const black = "#32343E";

const OTPInputField = ({setPinReady, code, setCode, maxLenght}) => {
    const codeDigitsArray = new Array(maxLenght).fill(0)
    const textinputRef= useRef(null);

    const[inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

    const handleOnPress = () => {
        setInputContainerIsFocused(true);
        textinputRef?.current?.focus();
    };

    const handlerOnBlur = () => {
        setInputContainerIsFocused(false)
    };

    useEffect(()=>{
        setPinReady(code.length === maxLenght);
        return () => setPinReady(false);
    }, [code]);

    const toCodeDigitInput = (_value, index) =>{
        const emptyInputChar = " ";
        const digit = code[index] || emptyInputChar;

        const isCurrentDigit = index === code.length;
        const isLastDigit = index === maxLenght - 1;
        const isCodeFull = code.length === maxLenght;

        const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

        const StyledOTPInput = inputContainerIsFocused && isDigitFocused ? styles.OTPInputNext : styles.OTPInput;

        return (
            <View style={styles.OTPInput} key={index}>
              <Text style={styles.OTPInputText}>{digit}</Text>
            </View>
          );

    };


  return (
    <View style={styles.OTPInputSection}>
    <Pressable style={styles.OTPInputContainer} onPress={handleOnPress}>
        {codeDigitsArray.map(toCodeDigitInput)}
    </Pressable>
      <TextInput style={styles.HiddenTextInput} 
        value={code}
        onChangeText={setCode}
        maxLength={maxLenght}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        ref={textinputRef}
        onBlur={handlerOnBlur}
      />
    </View>
  );
};



const styles = StyleSheet.create({
    OTPInputSection: {
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30,
    },
    HiddenTextInput: {
     position:"absolute",
     width: 1,
     height: 1,
     opacity: 0
    },
    OTPInputContainer:{
        width: "70%",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    OTPInput:{
        borderColor:secondary,
        minWidth: "15%",
        borderWidth: 2,
        borderRadius: 5,
        padding: 12
    },
    OTPInputText:{
        fontSize:22,
        fontWeight:"bold",
        textAlign:"center",
        color:black
    },
    OTPInputNext:{
        borderColor:primary,
        backgroundColor: black
    }
  });

export default OTPInputField;
