import React from 'react';
import { Text, View, Button } from 'react-native';

function Catalogo({ navigation }) {
  return (
    <View>
      <View style={{backgroundColor: '#FAD8A8', height: 55, width: '100%'}}>
        <Text>Busca aqui</Text>
      </View>
      <Text>Tela de catalogo aqui</Text>
      <Button
        title="Ir para Produto"
        onPress={() => navigation.navigate('Produto')}
      />
    </View>
  );
};

export default Catalogo;