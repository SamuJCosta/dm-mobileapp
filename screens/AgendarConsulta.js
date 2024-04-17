import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Calendar } from 'react-native-calendars';

export default function AgendarConsulta({route}) {

    const selectedItems = route.params.selectedItems;
    const diaData = new Date();
    const [showLeftArrow, setShowLeftArrow] = useState(true);

    return (
        <View>
            <Calendar
                style={styles.calendar}
                onDayPress={(date) => {
                    console.log(date);
                    console.log(diaData);
                    // setDate para algo
                }}
                minDate={diaData}
                hideExtraDays={true}
                disableArrowLeft={showLeftArrow}
                onPressArrowRight={() => setShowLeftArrow(true)}
                onPressArrowLeft={() => setShowLeftArrow(false)} 
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
