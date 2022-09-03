import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';
//Nota: El componente modal tiene props para la visibilidad y efectos del mismo

//Pasando eventhandlers como props
const GoalInput = ({ addNewInputText, showModal, closeModal }) => {
  const [newGoal, setNewGoal] = useState('');

  const newInputText = (newInput) => {
    setNewGoal(newInput);
  };

  const addGoalHandler = () => {
    addNewInputText(newGoal);
    setNewGoal('');
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your week goal"
          onChangeText={newInputText}
          value={newGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" padding="2" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    padding: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    height: '7%',
    marginRight: 8,
    paddingLeft: 10,
   
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  button:{
    width: '30%',
    marginHorizontal: 8,
  }
});

export default GoalInput;
