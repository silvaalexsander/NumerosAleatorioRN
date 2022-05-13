import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
const App = () => {
  const [numero, settNumero] = useState(0);
  function handleNumero() {
    const novoNumero = Math.floor(Math.random() * 1000);
    settNumero(novoNumero);
  }
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.texto}>{numero}</Text>
      <TouchableOpacity style={style.button} onPress={handleNumero}>
        <Text style={style.text2}>Gerar Num Aleatorio</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#A7D7F8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 66,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#9FCAE0',
    width: '50%',
    height: '10%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    color: '#F7F2DC',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default App;
