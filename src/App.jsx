import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { CartProvider } from './CartProvider/CartProvider';

//pages
import Catalogo from './views/catalog/Catalogo';
import Produto from './views/produto/Produto';
import Carrinho from './views/carrinho/Carrinho';
import Pedido from './views/pedido/Pedido';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <CartProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="CHOICEASY"
            screenOptions={{
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#FFD18F',
              },
              headerTintColor: '#36393D',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen name="CHOICEASY" component={Catalogo} />
            <Stack.Screen name="Produto" component={Produto} />
            <Stack.Screen name="Carrinho" component={Carrinho} />
            <Stack.Screen name="Pedido" component={Pedido} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </CartProvider>
  );
}







