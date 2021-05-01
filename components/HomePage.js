import React from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView, View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity} from 'react-native'
import {ShopData} from '../components/data'
import Items from './Items';




export default function HomePage() {

    return (
        <SafeAreaView>
            <View style={{marginHorizontal: 15}}>
                <View style={{
                    flexDirection:'row',
                    marginVertical: 10,
                    justifyContent:'space-between',
                    //backgroundColor:'#ECF0F1'
                  }}>
                    <View style={styles.icons}>
                        <AntDesign name="arrowleft" size={20} color="grey" />
                    </View>
                    <View style={styles.icons}>
                        <Ionicons name="cart-outline" size={20} color="grey" />
                    </View>
                </View>
                <View style={{marginVertical: 20}}>
                    <Text style={{fontSize: 20, fontWeight: 500}}>Sneakers and More</Text>
                </View>
                <View style={{
                    backgroundColor:'#fff',
                    borderRadius:10, 
                    padding:10,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.80,
                    shadowRadius: 5.00,

                    elevation: 8,
                
                    }}
                >
                    <TextInput placeholder='Search Sneakers'
                        autoCompleteType={false}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        
                        style={{
                            flex: 0.95,
                            alignItems:'center',
                            backgroundColor:'#fff',
                            borderRadius: 25,
                            height: '100%',
                        }}
                     />
                     <Text style={{
                         flex: 0.05,
                         justifyContent:'center',
                         alignItems: 'center',
                         marginLeft: 40,
                         color:'blue'
                        }}>Filter</Text>
                </View>
            </View>
             {/* Flatlists to display our data from data.js */}
            <View style={{alignSelf:'flex-start', marginVertical: 20}}>
                <FlatList
                    data={ShopData}
                    numColumns= {1}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => <Items data={item.item}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    icons:{
        backgroundColor:'#fff',
        alignItems:'center',
        width: 40,
        height: 40,
        justifyContent:"center",
        borderRadius: 100,
        alignItems:'center'
    },
})