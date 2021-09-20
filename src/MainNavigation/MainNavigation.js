import React from 'react';
import { Text, View} from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>CHOICEASY</Text>,
            }
        },
        ProductInfo : {
            screen: Produto,
        },
        ShoppingCart : {
            screen: Carrinho,
            navigationOptions: {
                headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>Carrinho</Text>,
            }
        },
        // Novas telas aqui
    },
    // Configuração padrão do Header
    {   
        defaultNavigationOptions: {
            headerStyle: {backgroundColor:'#FAD8A8', height:65, elevation: 0, shadowOpacity: 0,},
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>CHOICEASY</Text>,
            //headerLeft: <Icon name="ngle-left" type="font-awesome" style={{margin: 10}}></Icon>,
            headerRight:
            (
                <TouchableOpacity onPress={()=> this.props.navigation.navigate['Produto']}>
                    <View>
                    <Icon name="shopping-cart" type="font-awesome" style={{margin: 10}}></Icon>
                    </View>
                </TouchableOpacity>
                ),


            headerLeft: (
                <TouchableOpacity onPress={()=> alert("GoBack")}>
                    <View>
                        <Icon name="angle-left" type="font-awesome" style={{margin: 10}}></Icon>
                    </View>
                </TouchableOpacity>
                ),
            headerTitleContainerStyle: {
                left: 25,
            },
        },
    })
})

const AppContainer = createAppContainer(AppLogged);
        

export default class MainNavigation extends React.Component {
    render = () => {
        
        return <AppContainer />
    };
}

