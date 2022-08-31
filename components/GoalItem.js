import { StyleSheet, Text, View } from 'react-native'; //componentes nativos de react native


const GoalItem = ({text}) => {
  return (
    <View style={styles.goalListElement}>
        <Text style={styles.goalListTextElement}>{text}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  goalListElement: {
    margin: 7,
    padding: 7,
    backgroundColor: '#00ced1',
    borderRadius: 6,
  },

  goalListTextElement:{
    color:'#ffffff',
  },

})

export default GoalItem;