import React from 'react';
import { Text, View, Button } from 'react-native';


function Produto({ navigation }) {
  return (
    <View>
      <Text>Tela de produto aqui</Text>
      <Button
        title="Ir para Carrinho"
        onPress={() => navigation.navigate('Carrinho')}
      />
    </View>
  );
};

export default Produto;