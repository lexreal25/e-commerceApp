import React from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

export default function Details({route, navigation}) {

    const { name, stars, image, price, description, material} = route.params
    
    return (
        <SafeAreaView style={{flex:1,marginHorizontal:15}}>
            <View style={{flex: 0.4}}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    zIndex:1,
                    marginVertical: 5
                    //backgroundColor:'#ECF0F1'
                  }}>

                    <TouchableOpacity style={styles.icons}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="arrowleft" size={20} color="grey" />
                    </TouchableOpacity>

                    <View> 
                        <View style={styles.icons}>
                            <Ionicons name="cart-outline" size={20} color="#22A7F0" />
                        </View>
                        
                        <View style={styles.heart}>
                            <EvilIcons name="heart" size={20} color="#22A7F0" />
                        </View>
                    </View>
                </View>

                <Image source={image}
                    style={{
                        position:'absolute',
                        width:'100%',
                        height: 300,
                        marginVertical: 15,
                        borderRadius: 10,
                        transform: [{skewY: '3deg'}]
                    }}
                    resizeMode='cover'
                 />
            </View>
            <View style={{flex:0.6,flexDirection:'column'}}>
                 <View style={{marginVertical:20}}>
                    <Text style={{fontSize: 25,fontWeight:700}}>{name}</Text>
                    <Text style={{fontSize: 15, fontWeight: 300, marginVertical: 10}}>Review : {stars}</Text>
                    <View style={{width: 60, height: 7, backgroundColor: '#1F4788', borderRadius: 2, marginVertical: 10}}></View>
                    <Text style={{fontSize: 15, marginVertical:10}}>{description}</Text>
                    <Text>Material Type: {material}</Text>
                 </View>

                 <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Text style={styles.size}>XS</Text>
                    <Text style={styles.size}>S</Text>
                    <Text style={styles.size}>M</Text>
                    <Text style={styles.size}>L</Text>
                    <Text style={styles.size}>XL</Text>
                 </View>
                {/* Price section */}
                <View >
                    <View>{price}</View>
                </View>
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
        alignItems:'center',
        //marginHorizontal: 5,
        marginVertical:5
    },
    heart:{
        backgroundColor:'#fff',
        alignItems:'center',
        width: 40,
        height: 40,
        justifyContent:"center",
        borderRadius: 100,
        alignItems:'center',
        marginVertical: 10,
        marginHorizontal:-5
    },
    size:{
        margin: 5,
        width: 25,
        height:20,
        backgroundColor: "#fff",
        textAlign:'center',
        borderRadius: 4
    }
})