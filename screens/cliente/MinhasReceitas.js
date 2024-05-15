import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { ArrowDownTrayIcon } from 'react-native-heroicons/outline'
import GeneratePDF from '../../src/components/GeneratePDF'
import consulta from '../../data/consulta'

const MinhasReceitas = () => {
    return (
    <View style={styles.container}>
            <View style={styles.ReceitasKika}>
                <Text style={{fontSize: 25, fontWeight: "600", color:"black", marginTop: 20, marginLeft:15}}>
                    Receitas Kika
                </Text>
                <View style={styles.informacoes}>
                    <Text style={styles.infos}>
                        Aqui pode descarregar a receita de 24 de Janeiro
                    </Text>
                    <GeneratePDF
                        styles={styles}
                        tipo={consulta[0].tipo}
                        nomeAnimal="Kika"
                        data="24 de Janeiro"
                    />
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.infos}>
                        Aqui pode descarregar a receita de 12 de Fevereiro
                    </Text>
                    <Pressable onPress={()=> console.log("Download")}>
                    <ArrowDownTrayIcon style={styles.icon}/>
                    </Pressable>
                </View>
            </View>
            <View style={styles.ReceitasRoudy}>
                <Text style={{fontSize: 25, fontWeight: "600", color:"black", marginTop: 20, marginLeft:15}}>
                    Receitas Roudy
                </Text>
                <View style={styles.informacoes}>
                    <Text style={styles.infos}>
                        Aqui pode descarregar a receita de 02 de Janeiro
                    </Text>
                    <Pressable onPress={()=> console.log("Download")}>
                    <ArrowDownTrayIcon style={styles.icon}/>
                    </Pressable>
                </View>
            </View>
    </View>
    
    )
}

export default MinhasReceitas

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    ReceitasKika:{
        width: 350,
        height: 350,
        backgroundColor: "#FFF",
        marginTop: 10,
        borderWidth:1,
        borderColor:"#b5b5b5",
    },
    ReceitasRoudy:{
        width: 350,
        height: 230,
        backgroundColor: "#FFF",
        marginTop: 20,
        borderWidth:1,
        borderColor:"#b5b5b5",
    },
    informacoes:{
        width: 320,
        height: 120,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: "#FFF",
        marginTop: 15,
        marginLeft: 15,
        borderColor:"#b5b5b5",
        flexDirection: "row",
        alignItems: "center",
    },
    infos:{
        maxWidth:230,
        maxHeight:100,
        marginLeft:15,
        fontWeight: '300',
        fontSize: 20,
        color:"black",
        marginTop: 5,
    },
    icon: {
        color: "black",
        marginLeft: 30,
    },
})
