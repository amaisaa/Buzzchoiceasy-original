import React from 'react';
import { View, Text, Image } from 'native-base';

const s = {
  box: {
    flexGrow: 1,
    backgroundColor: '#FFD18F',
    paddingTop: 100,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 40,
    marginTop: 5,
    marginBottom: 5
  }

}

export default function () {
  return (
    <View style={s.box} >
      <Text style={s.text}>Seu Pedido foi gerado!</Text>
      <Text style={s.text}>Agora basta esperar chegar na sua casa.</Text>
      <Image style={s.logo} source={require('../../../logo.jpeg')} />
      <Text style={s.text}>Obrigado por comprar na nossa loja!</Text>
    </View>
  )
}