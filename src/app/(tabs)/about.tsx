import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alexsandro Vilela Soares{"\n"}Emmanuelle Fernandes de Souza{"\n"}Guilherme Alves Ferreira Souza da Silva{"\n"}Julio Cesar Rocha de Souza{"\n"}Nadilza Nascimento Gonçalves</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
