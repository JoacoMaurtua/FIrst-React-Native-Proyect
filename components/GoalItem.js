import { StyleSheet, Text, View, Pressable } from 'react-native'; //componentes nativos de react native

//El componente Pressable hace que un elemento sea presionable en la pantalla, es decir
//que al precionarlo se dispare algun evento

//bind es un metodo de js que permite configurar una funcion previamente a su ejecucion

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this,id)}> 
      <View style={styles.goalListElement}>
        <Text style={styles.goalListTextElement}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalListElement: {
    margin: 7,
    padding: 7,
    backgroundColor: '#00ced1',
    borderRadius: 6,
  },

  goalListTextElement: {
    color: '#ffffff',
  },
});

export default GoalItem;
