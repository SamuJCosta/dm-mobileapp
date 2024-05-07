import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Modal} from 'react-native'
import { CheckIcon, XMarkIcon } from "react-native-heroicons/outline";

export default function ConsultasVet() {
    const [showModal, setShowModal] = useState(false);
    const [actionType, setActionType] = useState(null);
    
    const handleApprove = () => {
        setActionType('approve');
        setShowModal(true);
    };
    
    const handleReject = () => {
        setActionType('reject');
        setShowModal(true);
    };
    
    const handleConfirm = () => {
        //setShowModal(false);
        if (actionType === 'approve') {
            console.log('Aprovado!!!');
            // Adicionar logica aqui dps
        } else if (actionType === 'reject') {
            console.log('Não Aprovado!!!');
            // Adicionar logica aqui tambem
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <Text style={styles.titulo}>Consultas por Aprovar...</Text>
                <View style={styles.firstBlock}>
                    <View style={styles.secBlock}>
                        <Text style={styles.texto}>Kika</Text>
                        <Text style={[styles.texto,styles.color]}>deolindakinzimba@gmail.com</Text>
                        <Text style={[styles.texto,styles.color]}>27-08-2024 </Text>
                        <Text style={[styles.texto,styles.color]}>11:30 às 12:30</Text>
                    </View>
                    <Pressable onPress={handleApprove}>
                        <CheckIcon color={"#000"} size={70}/>
                    </Pressable>
                    <Pressable onPress={handleReject}>
                        <XMarkIcon color={"#000"} size={70}/>
                    </Pressable>
                </View>
            </View>
            <Modal visible={showModal} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Deseja confirmar esta ação?</Text>
                        <View style={styles.modalActions}>
                            <Pressable style={[styles.modalButton,styles.buttonOpen]} onPress={handleConfirm}>
                                <Text style={styles.buttonText}>Confirmar</Text>
                            </Pressable>
                            <Pressable style={[styles.modalButton,styles.buttonClose]} onPress={() => setShowModal(false)}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    centerContainer:{
        width:"90%",
        height:"100%",
    },
    firstBlock:{
        width:"100%",
        height: 100,
        flexDirection:"row",
        columnGap:10,
        alignItems:"center",
        marginTop:5
    },
    secBlock:{
        flexDirection:"column",
        marginTop:5,
        rowGap:5
    },
    titulo:{
        fontSize:24, 
        fontWeight:"400", 
        marginTop:5
    },
    texto:{
        fontSize:15, 
        fontWeight:"400"
    },
    color:{
        color:"#667085"
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '80%', // largura do modal
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalActions: {
        flexDirection: 'row',
        marginTop: 20,
    },
    modalButton: {
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    buttonOpen: {
        backgroundColor: '#6FC4CF',
    },
    buttonClose: {
        backgroundColor: '#F26161',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    
})
