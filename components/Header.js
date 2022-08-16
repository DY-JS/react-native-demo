import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 50 : 60,
    height: 100,
    backgroundColor: '#dfdfdf',
    //alignItems: 'center',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    fontStyle: 'bold',
  },
});
