import { useState }from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}){
    const [enteredGaolText, setEnteredGoalText] = useState('')

    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }
    return (
        <View style={StyleSheet.inputContainer}>
            <TextInput 
            style={StyleSheet.textInput}
            placeholder= 'YourGoal!'
            onChangeText={HandleInputGoal}
            value={enteredGoalText}
            />
            <Button 
            title="Add Goal"
            color={'#A3FFD6'}
            onPress={addGoalHandler}
            />
        </View>

    )

}