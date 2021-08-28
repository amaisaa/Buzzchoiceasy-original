import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages
import Catalogo from './pages/Catalogo';
import Produto from './pages/Produto';
import Carrinho from './pages/Carrinho';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Catalogo"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FAD8A8',
          },
          headerTintColor: '#36393D',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Catalogo" component={Catalogo} />
        <Stack.Screen name="Produto" component={Produto} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}







