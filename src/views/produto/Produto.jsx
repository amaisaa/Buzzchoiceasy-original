import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Button, Spinner, Pressable } from 'native-base';
import axios from 'axios';
import s from './Produto.styles';
import { CartContext } from '../../CartProvider/CartProvider';
import { HeaderBackButton } from '@react-navigation/elements';

function Produto({ route, navigation }) {

  const cart = React.useContext(CartContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<HeaderBackButton tintColor="#36393D" onPress={()=>{navigation.popToTop()}}/>),
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('Carrinho')} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
          <Image style={{ width: 30,  height: 30 }}  source={require('../../cart.png')} />
          <Text style={{ fontSize: 20, marginLeft: 5}}>{cart.items.length}</Text>
        </Pressable>
      )
    });
  }, [navigation, cart.items.length]);

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [added, setAdded] = useState(false)

  useEffect(() => {
    axios.get(`https://buzz-choiceasy.herokuapp.com/produto/${route.params.id}`)
      .then((response) => {
        setProduct(response.data);
        navigation.setOptions({ title: response.data.titulo })
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data.error)
        setLoading(false);
      })
  }, [])

  const addOnCart = () => {
    // adicionar no carrinho
    cart.addItem(product);
    setAdded(true);
  };

  if(error) {
    return (
      <View>
        <Text>{error}</Text>  
      </View>
    )
  }

  if(loading) {
    return (
      <View style={s.loadingBox} >
        <Spinner color="orange.300" />
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} >
      <Image
        style={s.banner}
        source={{ uri: product.foto.url }}
      />
      <View style={s.info}>
        <Text style={s.title} >{product.titulo}</Text>
        <Text style={s.description}>{product.descricao}</Text>
      </View>
      
      <View style={s.priceBox}>
        <Text style={s.priceLabel} >Preço:</Text>
        <Text style={s.priceValue}>R${product.preco}</Text>
      </View>

      <View style={s.footer}>
        
        {!added &&
          <Button style={s.button} onPress={addOnCart}>
            <Text style={s.buttonText}>
              Adicionar ao Carrinho
            </Text>
          </Button>
        }

        {added &&
          <Button style={s.addedButton}>
            <Text style={s.addedButtonText}>
              Item adicionado!
            </Text>
          </Button>
        }
        
      </View>
    </ScrollView>
  );
};

export default Produto; 