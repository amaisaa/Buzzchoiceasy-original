import React, { useContext } from 'react';
import { Text, View, ScrollView, TextInput } from 'react-native';
import Item from './components/Item/Item';
import { Radio, Button } from "native-base"
import s from './Carrinho.styles';
import { CartContext } from '../../CartProvider/CartProvider';
import { HeaderBackButton } from '@react-navigation/elements';


function Carrinho({navigation}) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<HeaderBackButton tintColor="#36393D" onPress={()=>{navigation.popToTop()}}/>)
    });
  }, [navigation]);

  const cart = useContext(CartContext);

  let total = 0;

  cart.items.forEach((itemDaVez) => {
    total = total + (itemDaVez.preco * itemDaVez.quantidade)
  });

  return (
    <ScrollView>

      {cart.items.length === 0 &&
        <View style={s.emptyList}>
          <Text style={s.emptyListText}>Seu carrinho está vazio :(</Text>
        </View>
      }
      
      {cart.items.map(
        (itemDaVez, idx) =>
          <Item
            key={idx}
            imageURL={itemDaVez.foto.url}
            title={itemDaVez.titulo}
            quantity={itemDaVez.quantidade}
            price={itemDaVez.preco}
            onIncrement={() => cart.increment(idx)}
            onDecrement={() => cart.decrement(idx)}
          />
      )}

      {cart.items.length >= 1 &&
        <View style={s.form} >

          <Text style={s.totalLabel}>Total</Text>
          <Text style={s.totalValue}>R$ {total.toFixed(2)}</Text>

          <Text style={s.label}>Endereço para Entrega</Text>
          <TextInput style={s.textInput} multiline={true} />

          <Text style={s.label}>CEP</Text>
          <TextInput style={s.textInput} keyboardType="numeric"/>

          <Text style={s.label}>Forma de Pagamento</Text>
          <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number">
            <Radio value="credito" my={1}>
              Cartão de Crédito na entrega
            </Radio>
            <Radio value="debito" my={1}>
              Cartão de Débito
            </Radio>
            <Radio value="dinheiro" my={1}>
              Dinheirio
            </Radio>
            <Radio value="pix" my={1}>
              Pix
            </Radio>
          </Radio.Group>

          <Button onPress={() => navigation.navigate('Pedido')} style={s.button} mt={15} mb={20} size="lg" >
            <Text style={s.buttonText}>Enviar Pedido</Text>
          </Button>

        </View>
      }

    </ScrollView>    
  );
};


export default Carrinho;
