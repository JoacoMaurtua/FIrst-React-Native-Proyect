import { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Button,
  StatusBar,
} from 'react-native'; //componentes nativos de react native
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

//View hace el papel de div,section,container y de cualquier contenedor que agrupe mas elementos
//flex ya esta por defecto, se pueden usar las propiedades flex-box de frente
// Los botones no tienen un prop de estilos, se les da a traves de atributos
//El manejo de eventos se hace de una forma parecida a React, con event handlers, solo que con nombres algo diferentes
//onChange --> onChangeText
//onClick --> onPress

//Para manejar estados aqui tambien usamos useState

//SOBRE LOS ESTILOS: En React native los estilos no son exactamente en css,
//                   por ende no existe la herencia ni el comportamiento en
//                   casacada en los elementos.

//                   Hay propiedades en los estilos que solo se aplican en un
//                   componente nativo en andorid por ejemplo, pero no en iOS,
//                   la solucion suele ser envolver dicho componente en un View

//En react native no hay un scrolling por defecto como en la web, se utiliza el componente ScrollView
//el componente exterior controla cuanto espacio debe ocupar el area de la pantalla que se desea scrollear

//La desventaja de usar ScrollView es que todos los elementos de la lista(incluso los que no se alcanzan
//a ver en la pantalla se renderizan) y si se tiene una lista con muchos elementos, podria provocar un
//problema de rendimiento, frente a esto existe otro enfoque: usar el componente FlatList

////Para cambiar el color de los iconos superiores del celular se usa StatusBar

export default function App() {

  const [weekGoals, setWeekGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };

  const closeAddGoalHandler = () => {
    setModalVisible(false);
  };

  //Devuelve un arreglo con los goals anteriores + el nuevo goal ingresado
  const addNewInputText = (newGoal) => {
    setWeekGoals((currentWeekGoals) => [
      ...currentWeekGoals,
      { text: newGoal, id: Math.random().toString() },
    ]);
    closeAddGoalHandler();
  };

  //Devuelvo un arreglo con todos los goals menos el que se elimino
  const handleOnDelete = (id) => {
    setWeekGoals((currentWeekGoals) => {
      return currentWeekGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#00ced1"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          addNewInputText={addNewInputText}
          showModal={modalVisible}
          closeModal={closeAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {/*  <ScrollView>
          {weekGoals.map((goal, index) => (
            <View style={styles.goalListElement} key={index}>
              <Text style={styles.goalListTextElement}>
                {goal}
              </Text>
            </View>
          ))}
        </ScrollView> */}
          <FlatList
            data={weekGoals} //primer prop necesario: el arreglo a renderizar
            renderItem={(itemData) => {
              //segundo prop funcion que devuelve lo que se va a renderizar
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={handleOnDelete}
                />
              );
            }}
            keyExtractor={(item, index) => {
              //esta propiedad normalmente se utiliza cuando renderizamos una lista de cosas traidas de una API
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});
