import React from 'react';
import { Text, View, Image } from 'react-native';
import s from './Item.styles';

function Item (props) {
  return (
    <View style={s.box}>
      <View style={s.thumbnail}>
        <Image
          style={s.image}
          source={{
            uri: props.imageURL
          }}
        />
      </View>
      <View style={s.info}>
        <View style={{flex: 1}} >
          <Text style={s.title} >{props.title}</Text>
          <Text style={s.quantity} >{props.quantity}un</Text>
        </View>
        <View>
          <Text style={s.price}>R${props.price}</Text>
        </View>
      </View>
      <View style={s.actions}>
        <Text style={s.increment} onPress={props.onIncrement}>+</Text>
        <Text style={s.decrement} onPress={props.onDecrement}>-</Text>
      </View>
    </View>
  )
}

export default Item;