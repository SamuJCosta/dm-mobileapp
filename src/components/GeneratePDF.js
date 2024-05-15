import React, { useState } from 'react'
import { Text, View, TextInput, Pressable } from 'react-native'
import { ArrowDownTrayIcon } from 'react-native-heroicons/outline'
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'


const GeneratePDF = ({tipo, nomeAnimal, data, styles}) => {

    const html = `
    <html>
        <body>
            <h1>Receita para ${nomeAnimal}</h1>
            <p>Tipo: ${tipo}</p>
            <p>Data: ${data}</p>
            <p style="color: red;">HELLO. BONJOUR. HOLA</p>
        </body>
    </html>
    `;


    const generatePDF = async () => {
        try {
            const file = await printToFileAsync({
                html: html,
                base64: false,
            });

            await shareAsync(file.uri);
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <Pressable onPress={()=> generatePDF()}>
            <ArrowDownTrayIcon style={styles}/>
        </Pressable>
    )
}

export default GeneratePDF

