import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalinputHandler = (enteredText)=> {
    setEnteredGoal(enteredText)
  };

  const addGoalHandler = ()=>{
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer} >
        <TextInput placeholder="Course Goal" style={styles.input} 
        onChangeText={goalinputHandler}
        value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal)=> <View style={styles.listItem} ><Text key={goal} >{goal} </Text></View> )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  input:{ width: 200, borderColor: "black", borderWidth: 1, padding: 10 },
  listItem:{
    padding:10,
    backgroundColor:'#ccc',
    borderColor:"black",
    borderWidth:1
  }
});