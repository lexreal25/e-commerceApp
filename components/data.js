import React from 'react'
import { Rating } from 'react-native-ratings'

const stars = <Rating
                //type='custom'
                ratingCount={5} 
                rated={3.3}
                imageSize={14} 
                ratingBackgroundColor="#d4d4d4"
                
             />

// const size= ['XS', 'S', 'M', 'L', 'XL']
// const sizes = size.map((eachSize) => <View style={{flex}}>{eachSize}</View>)


export const ShopData =[
    {
        id: 1,
        name: 'Nike Blazer White Out ellipsesMode',
        stars,
        price: '$99',
        image: require('../assets/blazer.jpg'),
        material: '65% Leather and 35% Polyster',
        description: 'This section shall contain the description of the item'
    },
    {
        id: 2,
        name: 'Crop Top Ladies Style',
        stars,
        price: '$70',
        image: require('../assets/nike.jpg'),
        material: 'Leather',
        description: 'This section shall contain the description of the item'
    },
    {
        id: 3,
        name: 'Faded Blue Steek Jeans',
        stars,
        price: '$50',
        image: require('../assets/supreme.jpg'),
        material: 'Leather',
        description: 'This section shall contain the description of the item'
    },
    {
        id: 4,
        name: 'Nike Jordan',
        stars,
        price: '$40',
        image: require('../assets/lakers.jpg'),
        material: 'Leather',
        description: 'This section shall contain the description of the item'
    },
    {
        id: 5,
        name: 'Nike Air Brand',
        stars,
        price: '$16',
        image: require('../assets/nike2.jpg'),
        material: 'Leather',
        description: 'This section shall contain the description of the item'
    },
    {
        id: 6,
        name: 'Nike Pink Sleek',
        stars,
        price: '$80',
        image: require('../assets/pink.jpg'),
        material: 'Leather',
        description: 'This section shall contain the description of the item'
    },
    {
        id: 7,
        name: 'Men Official Suite 3P to alll is there',
        stars,
        price: '$150',
        material: 'Leather',
        image: require('../assets/air.jpg'),
        description: 'This section shall contain the description of the item'
    },
    {
        id: 8,
        name: 'Summer Ladies Jacket',
        stars,
        price: '$32',
        material: 'Leather',
        image: require('../assets/way.jpg'),
        description: 'This section shall contain the description of the item'
    },
    {
        id: 9,
        name: 'Winter Ladies Jacket ',
        stars,
        price: '$32',
        image: require('../assets/shark.jpg'),
        material: 'Leather',
        description: 'This section shall contain the description of the item'
    },
]

