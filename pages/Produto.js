import React from 'react';
import { Text, View, Button } from 'react-native';


function Produto({ navigation }) {
  return (
  <View>
      <View style={{backgroundColor: '#FAD8A8', height: 55, width: '100%'}}>
        <Text>Busca aqui</Text>
      </View>
      <Text>Tela de produto aqui</Text>
      <Button
        title="Ir para Carrinho"
        onPress={() => navigation.navigate('Carrinho')}
      />
    </View>
  );
};

export default Produto;