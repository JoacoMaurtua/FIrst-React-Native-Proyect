import { StyleSheet, Text, View, Pressable } from 'react-native'; //componentes nativos de react native

//El componente Pressable hace que un elemento sea presionable en la pantalla, es decir
//que al precionarlo se dispare algun evento

//bind es un metodo de js que permite configurar una funcion previamente a su ejecucion

//android_ripple funciona para hacer un efecto parecido al del hover
//en caso de iOS necesitamos el prop style y le pasamos una funcion anonima que devuelve nuevos estilos

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalListElement}>
      <Pressable 
        onPress={onDeleteItem.bind(this, id)}
        android_ripple={{color:'#008080'}}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalListTextElement}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalListElement: {
    margin: 7,
    backgroundColor: '#00ced1',
    borderRadius: 6,
  },

  pressedItem:{
    opacity: 0.5,
  },

  goalListTextElement: {
    color: '#ffffff',
    padding: 7,
  },
});

export default GoalItem;
