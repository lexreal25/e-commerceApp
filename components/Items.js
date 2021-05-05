import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function Items(props) {
    
    const { name, stars, price, image, description, material} = props.data
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.container}
            onPress= {() => navigation.navigate('Details', {
                name,stars,image, description, material, price
            }) }
         >
            <View style={styles.background}>
                <Image source={image} 
                    style={{
                        width: 150,
                        height: 150, 
                        borderRadius: 10,
                        alignItems:'center'
                    }} 
                    resizeMode='cover' 
                />
            </View>
            
            <View style={{flex: 0.6,justifyContent:'center', marginLeft: 10}}>
                <Text numberOfLines={1} ellipsizeMode style={{fontSize: 17, fontWeight: 500}}> {name} </Text>
                <Text style={{width: 20}}> {stars} </Text>
                <Text style={{fontSize: 20, fontWeight: 500, color: 'blue'}}> {price} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 10
    },
    background: {
        flex: 0.4,
        backgroundColor:'#f7f7f7', 
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 10,
        // transform: [{skewY: '7deg'}],
    }
})
