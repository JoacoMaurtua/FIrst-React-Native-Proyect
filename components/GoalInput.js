import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';
//Nota: El componente modal tiene props para la visibilidad y efectos del mismo

//Nota: Las imagenes se deben almacenar en la carpeta assets

//Nota: El color de fondo de las ventanas por defecto se puede agregar en app.json

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
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your week goal"
          onChangeText={newInputText}
          value={newGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" padding="2" onPress={addGoalHandler} color="#008080"/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#dc143c"/>
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
    backgroundColor:`#00ced1`,
    padding: 16,
    paddingBottom:100,
  
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#f5fffa',
    backgroundColor:"#f5fffa",
    borderRadius:8,
    width: '100%',
    height: '7%',
    marginRight: 8,
    paddingLeft: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  button: {
    width: '30%',
    marginHorizontal: 8,
  },

  image:{
    width: 100,
    height: 100,
    margin: 20,
  },

});

export default GoalInput;
