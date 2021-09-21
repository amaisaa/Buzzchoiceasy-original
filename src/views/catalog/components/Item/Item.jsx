import React from 'react';
import { Text, View, Image } from 'react-native';
import { Pressable } from 'native-base';
import s from './Item.styles';

function Item(props) {
  return (
    <Pressable style={s.box} onPress={props.onPress}>
      <View style={s.thumbnail}>
        <Image
          style={s.image}
          source={{
            uri: props.imageURL
          }}
        />
      </View>
      <View style={s.info}>
        <Text style={s.title} >{props.title}</Text>
        <Text style={s.price}>R${props.price}</Text>
      </View>
    </Pressable>
  )
}

export default Item;