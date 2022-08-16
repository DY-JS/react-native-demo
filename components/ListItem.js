import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({ element, deleteHandler }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => deleteHandler(element.id)}
    >
      <Text style={styles.text}>{element.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    padding: 20,
    width: '60%',
    marginLeft: '20%',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#dfdfdf',
  },
});
