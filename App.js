import { StyleSheet, Text, View, Button, TextInput } from 'react-native'; //componentes nativos de react native

// View hace el papel de div,section,container y de cualquier contenedor que agrupe mas elementos
//flex ya esta por defecto, se pueden usar las propiedades flex-box de frente
// Los botones no tienen un prop de estilos, se les da a traves de atributos
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Your week goal"
        />
        <Button 
          title="Add Goal"
          padding="2"
       
        />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>  
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
  },

  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },

  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    height: 40,
    marginRight: 8,
    paddingLeft: 10,
    flex:1
  },

  goalsContainer:{
    flex: 4,
  }
 
});
