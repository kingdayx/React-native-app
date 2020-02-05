import React, {useState} from 'react';
import GoalItem from './GoalItem';
import {StyleSheet, TextInput, View, Button} from 'react-native';



const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalinputHandler = (enteredText)=> {
        setEnteredGoal(enteredText)
      };
   return(
   <View style={styles.inputContainer} >
        <TextInput placeholder="Course Goal" style={styles.input} 
        onChangeText={goalinputHandler}
        value={enteredGoal} />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
        );
};
export default GoalInput

const styles = StyleSheet.create({
    input:{ 
        width: 200,
        borderColor: "black",
        borderWidth: 1, 
        padding: 10 
    },
    inputContainer: { 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }

});