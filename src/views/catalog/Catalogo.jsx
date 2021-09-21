import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TextInput, Image } from 'react-native';
import { Spinner, Button, Input, Pressable } from 'native-base';
import axios from 'axios';
import s from './Catalogo.styles';
import Item from './components/Item/Item';
import { CartContext } from '../../CartProvider/CartProvider'

function Catalogo({ navigation }) {

  const cart = React.useContext(CartContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('Carrinho')} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
          <Image style={{ width: 30,  height: 30 }}  source={require('../../cart.png')} />
          <Text style={{ fontSize: 20, marginLeft: 5}}>{cart.items.length}</Text>
        </Pressable>
      )
    });
  }, [navigation, cart.items.length]);

  const [catalog, setCatalog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    axios.get(`https://buzz-choiceasy.herokuapp.com/catalogo`)
      .then((response) => {
        const catalog = response.data.find(catalog => catalog.id === 1);
        setCatalog(catalog);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data.error)
        setLoading(false);
      })
  }, []);

  const handleChange = (event) => console.log(event)

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    )
  }

  if (loading) {
    return (
      <View style={s.loadingBox} >
        <Spinner color="orange.300" />
      </View>
    )
  }

  const filteredProducts = catalog.produtos.filter((product) => product.titulo.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)

  return (
    <View style={{ flexGrow: 1 }}>
      <View style={s.subHeader}>
        <TextInput
          placeholder="Buscar"
          value={filterText}
          style={s.searchInput}
          onChangeText={setFilterText}
        />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {!filterText && 
          <View>
            <Image
              style={s.banner}
              source={{ uri: catalog.foto.url }}
            />
            <View style={s.info}>
              <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#e5e5e5', paddingBottom: 10, marginBottom: 10 }}>
                <Image
                  style={{ width: 75, height: 75, borderRadius: 100, marginRight: 15 }}
                  source={require('../../../logo.jpeg')}
                />
                <View>
                  <Text style={s.title} >{catalog.nome}</Text>
                  <Text style={s.description}>{catalog.horario}</Text>
                </View>
              </View>
              <Text style={s.description}>{catalog.descricao}</Text>
            </View>

          </View>
        }
        <View style={s.content} >
          {filteredProducts.map(product => (
            <Item
              title={product.titulo}
              price={product.preco}
              imageURL={product.foto.url}
              onPress={() => navigation.navigate('Produto', { id: product.id })}
            />
          ))}
        </View>

      </ScrollView>
    </View>
  );
};

export default Catalogo;
