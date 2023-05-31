import { useState } from 'react';
import { Alert } from 'react-native';
import { Text, View, TextInput, Button, TouchableHighlight, Image } from 'react-native';
import styles from './style';

export default function App() {
  const [inputValue, SetInputValue] = useState('');
  const [listOfGoals, SetListOfGoals] = useState(['']);
  const goalInputHandler = (val) => {
    SetInputValue(val);
  }

  const addGoalHandler = () => {
    SetListOfGoals((prevState) => [...prevState, inputValue])
    console.log(listOfGoals.length)
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChange={goalInputHandler} placeholder='Your course goal!!'></TextInput>
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
      
      {listOfGoals.map((user) => (
        <Text >{user}</Text>
      ))}
        {/* {listOfGoals.map((goal, index) => {
          <Text key={index}>{goal}</Text>
        })} */}
      </View>
    </View>
  );
}
