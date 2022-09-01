import {useState} from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

//Pasando eventhandlers como props
const GoalInput = ({addNewInputText}) => {
  const [newGoal, setNewGoal] = useState('');

  const newInputText = (newInput) => {
    setNewGoal(newInput);
  };

  const addGoalHandler = () =>{
    addNewInputText(newGoal);
    setNewGoal('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your week goal"
        onChangeText={newInputText}
        value={newGoal}
      />
      <Button title="Add Goal" padding="2" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    height: 40,
    marginRight: 8,
    paddingLeft: 10,
    flex: 1,
  },
});

export default GoalInput;
