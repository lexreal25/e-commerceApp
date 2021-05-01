import React from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView, Text, View } from 'react-native'

export default function Details({route}) {

    const { name, stars, image, price, description, material} = route.params
    
    return (
        <SafeAreaView>
            <View>
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

                <Text>{image}</Text>
                <Text>{name}</Text>
                <Text>Review: {stars}</Text>
                <View style={{width: 10, height: 3, color:'blue'}}></View>
                <Text>{description}</Text>
                <Text>{material}</Text>
                <View style={{flex: 'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text>XS</Text>
                    <Text>S</Text>
                    <Text>M</Text>
                    <Text>L</Text>
                    <Text>XL</Text>
                </View>
                {/* Price section */}
                <View>
                    <View></View>
                </View>
            </View>
        </SafeAreaView>
    )
}
