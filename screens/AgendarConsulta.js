import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable} from 'react-native'
import { Calendar } from 'react-native-calendars';

export default function AgendarConsulta({route}) {

    const selectedItems = route.params.selectedItems;
    const diaData = new Date();
    const minDateString = diaData.toISOString().split('T')[0];
    const [modalVisible, setModalVisible] = useState(false);

    const timers = ["09:30 - 10:30", "10:30 - 11:30", "11:30 - 12:30", "12:30 - 13:30", "14:30 - 15:30", "15:30 - 16:30", "16:30 - 17:30", "17:30 - 18:30"]

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
        <View style={styles.container}>
            <Text style={styles.text}>Escolha uma data</Text>
            <Calendar
                style={styles.calendar}
                onDayPress={(date) => {
                    console.log(date);
                }}
                minDate={minDateString}
                hideExtraDays={true}
                markedDates={marcarDias()}
            />
            <Text style={styles.text}>Horarios Disponiveis</Text>
            <View  style={styles.mainContainer}>
                <View style={styles.firstContainer}>
                    <TouchableOpacity style={styles.buttons}>
                        <Text>{timers[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text>{timers[2]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text>{timers[4]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text>{timers[6]}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.secondContainer}>
                    <TouchableOpacity style={styles.buttons}>
                        <Text>{timers[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text>{timers[3]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text>{timers[5]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text>{timers[7]}</Text>
                    </TouchableOpacity>
                </View>  
            </View>
            <TouchableOpacity style={styles.mainButton} onPress={()=>setModalVisible(true)}>
                    <Text style={styles.buttonText}>Marcar Consulta</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Consulta Agendada</Text>
                    <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Confirmar</Text>
                    </Pressable>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Cancelar</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignSelf:"center",
        width:"85%",
        height:"90%",
    },
    calendar:{
        borderRadius:10,
        marginTop:7,
        width:330,
        height:310
    },
    text:{
        fontSize:24,
        fontWeight:"500",
        fontStyle:"normal",
        marginTop:5
    },
    mainContainer:{
        width:"100%",
        height:"30%",
        flexDirection:"row",
        columnGap:15,
        marginTop:15,
    },
    firstContainer:{
        width:"50%",
        height:"100%",
        flexDirection:"colum",
        rowGap:16
    },
    secondContainer:{
        width:"50%",
        height:"100%",
        flexDirection:"colum",
        rowGap:16
    },
    buttons:{
        backgroundColor:"#fff",
        borderRadius: 10,
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainButton:{
        display: 'flex',
        width: "100%",
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        borderRadius: 10,
        backgroundColor: "#6FC4CF",
        marginTop: 10,
    },
    buttonText:{
        color: "#fff",
        fontSize: 15,
        fontWeight:"500"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: 310,
        height: 250,
        margin: 20,
        backgroundColor: '#F3F2F2',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#6FC4CF',
    },
    buttonClose: {
        backgroundColor: '#F26161',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})


