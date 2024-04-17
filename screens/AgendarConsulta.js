import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Calendar } from 'react-native-calendars';

export default function AgendarConsulta({route}) {

    const selectedItems = route.params.selectedItems;
    const diaData = new Date();
    const minDateString = diaData.toISOString().split('T')[0];
    const [showLeftArrow, setShowLeftArrow] = useState(true);

    // Verificando se a agenda do veterinário está cheia
    const isDiaCheio = (date) => {
        const agendas = selectedItems.agendas || {};
        const numConsultas = agendas[date] || 0;
        return numConsultas >= 8; // Defina o limite máximo de consultas por dia como desejar
    };
    
    
    // Função para marcar os dias como ocupados ou livres no calendário
    const marcarDias = () => {
        const marked = {};
    
        // Calcular a data do próximo dia útil após hoje
        const hoje = new Date();
        let inicioSemana = new Date(hoje);
        while (inicioSemana.getDay() === 0 || inicioSemana.getDay() === 6) {
            inicioSemana.setDate(inicioSemana.getDate() + 1); // Avançar até encontrar um dia útil
        }
    
        // Calcular a data do último dia útil da 5ª semana futura
        const fimSemana = new Date(inicioSemana);
        fimSemana.setDate(fimSemana.getDate() + (7 * 5) - 1);
    
        // Iterar sobre as semanas futuras
        let dataInicio = new Date(inicioSemana);
        while (dataInicio <= fimSemana) {
            const dataFim = new Date(dataInicio);
            dataFim.setDate(dataFim.getDate() + 6);
    
            // Iterar sobre os dias úteis dentro da semana
            for (let dataAtual = new Date(dataInicio); dataAtual <= dataFim; dataAtual.setDate(dataAtual.getDate() + 1)) {
                // Verificar se o dia atual é um dia útil (segunda a sexta-feira)
                if (dataAtual.getDay() !== 0 && dataAtual.getDay() !== 6) {
                    const dateString = dataAtual.toISOString().split('T')[0];
                    marked[dateString] = { selected: true, selectedColor: isDiaCheio(dateString) ? "#E57878" : "#8ACF60" };
                }
            }
    
            // Calcular a data de início da próxima semana
            dataInicio.setDate(dataInicio.getDate() + 7);
        }
    
        return marked;
    }

    return (
        <View>
            <Calendar
                style={styles.calendar}
                onDayPress={(date) => {
                    console.log(date);
                }}
                minDate={minDateString}
                hideExtraDays={true}
                markedDates={marcarDias()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    calendar:{
        borderRadius:10,
        elevation:4,
        margin:40
    }
})
