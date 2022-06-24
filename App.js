import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';


const Teste = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ height: 300, width: 300, backgroundColor: "grey" }}>
        <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold", padding: 10 }}>Login</Text>
        <View style={{ marginTop: 20 }}>
          <View style={{ height: 50, width: 270, backgroundColor: "white", alignSelf: "center" }} />
          <View style={{ marginTop: 10, height: 50, width: 270, backgroundColor: "white", alignSelf: "center" }} />
        </View>
        <Pressable style={styles.input} >
          <Text input style={{ color: 'white', fontSize: 25, }}>Entrar</Text>
        </Pressable>


      </View >
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    backgroundColor: 'black',
    height: 50,
    width: 120,
    alignSelf: 'center',
    borderRadius: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  }
});


export default Teste;
