import React, {useState} from 'react';
import GoalItem from './GoalItem';
import {StyleSheet, TextInput, View, Button, Modal} from 'react-native';



const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalinputHandler = (enteredText)=> {
        setEnteredGoal(enteredText)
      };

const addGoalHandler= ()=>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
    };


   return(
   <Modal visible={props.visible}  animationType="slide">
   <View style={styles.inputContainer} >
        <TextInput placeholder="Course Goal" 
        style={styles.input} 
        onChangeText={goalinputHandler}
        value={enteredGoal} />
        <View style={styles.buttonContainer} >
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
            <Button title="ADD" onPress={addGoalHandler} />
        </View>
    </View>
    </Modal>
        );
};
export default GoalInput

const styles = StyleSheet.create({
    input:{ 
        width: 200,
        borderColor: "black",
        borderWidth: 1, 
        padding: 10,
        marginBottom:10
    },
    inputContainer: { 
        
        justifyContent: "center",
        flex:1,
        alignItems: "center"
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent:"space-between",
        width:'40%'
    },
    

});