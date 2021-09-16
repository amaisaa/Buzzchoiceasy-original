import React from 'react'
import {View, Text, Image, Button, ImageBackground} from 'react-native'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios'
import styles from './CatalogStyle'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';
import { ListItem, press } from 'react-native-elements/dist/list/ListItem';
import { SafeAreaView } from 'react-native-safe-area-context';



const HomeView = (props) => {
    const RenderItem = ({item, press}) => {
        return (
            <TouchableOpacity onPress={()=> press(item)}>
                <View style={styles.itemContent}>
                  <Image
                      style={styles.imageSize}
                      source={{uri: item.Image}}
                    />    
                  <View style={styles.textsView}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.detail}>{item.address}</Text>
                  </View>        
                <View style={styles.separator}></View>
              </View>
            </TouchableOpacity>
          );
        };
           
        return(
            
            <View style={styles.catalogContainer}>
                <View style={styles.menuBox}>
                        <SearchBar
                        placeholder="Buscar"
                        onChangeText={props.updateSearch}
                        value={props.search}
                        lightTheme={true}
                        inputContainerStyle={styles.inputSearchBarStyle}
                        />
                </View>
                

                <View style={styles.imageBox}>
                    <Image source={{uri: 'https://www.falamart.com.br/wp-content/uploads/2020/03/p%C3%A3es-produtos-de-padariaCapa-1068x599.jpg'}} style={styles.imageBox} />
                </View>

                <View style={styles.infoBox}>
                    <Image source={{uri: 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2f2019%2f11%2f05%2f18%2fLogo-263059_124077_181531403_1223225818.jpg'}} style={styles.partnerLogo} />
                    <View style={styles.columnGrid}>
                        <Text style={styles.partnerName}>Caminho do Pão</Text>
                        <Text style={styles.openCalendar}>Seg–Sáb  6:00–22:00  |  Dom  7:00–22:00</Text>
                    </View>

                    <Text style={styles.description}>Padaria onde todos os sabores se encontram em uma delicatessen completa com adega, cafeteria, Restaurante, pizzaria e conveniência. 🥖</Text>
                </View>
                
                    <View style={styles.catalogBox}>
                        <SafeAreaView>
                            <FlatList              
                                    data={props.filteredArrayPlaces}            
                                    renderItem={({ item }) => <RenderItem item={item}/>}
                                    keyExtractor={item => item.id.toString()}
                                    numColumns={2}
                                    columnWrapperStyle={styles.catalogBox}
                                    />
                        </SafeAreaView>
                    </View>
                

                
            </View>
            
            
        );
}

export default HomeView;

// <KeyboardAvoidingView  enabled behavior={''} keyboardVerticalOffset={100}></KeyboardAvoidingView>