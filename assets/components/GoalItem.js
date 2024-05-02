import { StyleSheet,View, Text, Pressable } from "react-native";

function GaolItem({itemData, OnDeleteItem}){
    return(
        <Pressable>
            <View style={styles.goalItem}>
            <Text style={StyleSheet.goalText}>{itemData.item}</Text>
            </View>
        </Pressable>
    )

}

export default GaolItem

const styles= StyleSheet.create({ 
    goalsItem: {
        margin:8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#8576FF',
        color: 'white'
    },
    goalTetx:{
        color: 'white'
    }

})
