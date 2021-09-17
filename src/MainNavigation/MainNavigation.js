import React from 'react';
import { Text} from 'react-native';
import {StyleSheet} from "react-native";

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeController from '../Screen/Catalog/Controller/HomeController';
import Carrinho from '../Screen/Shopping Cart/Carrinho';
import Produto from '../Screen/ProductInfo/Produto';

const AppLogged = createDrawerNavigator({
    Places: createStackNavigator({
        catalogScreen :  {
            screen: HomeController,
            navigationOptions: {
                title: 'CHOICEASY',
                
              }
        },
        ProductInfo : {
            screen: Produto,
        },
        ShoppingCart : {
            screen: Carrinho,
        },
        // Novas telas aqui
    },{ 
        defaultNavigationOptions: {
            headerStyle: {backgroundColor:'#FAD8A8', height:75}
        }
    })
})

const AppContainer = createAppContainer(AppLogged);

export default class MainNavigation extends React.Component {
    render = () => {
        return <AppContainer />
    };
}