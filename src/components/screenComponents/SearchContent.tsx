import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

type props = {
    handleGetImage: (v: any) => any
}

const data = [
    {
        id: 0,
        images: [
            require('../storage/images/girl.png'),
            require('../storage/images/h1.jpg'),
            require('../storage/images/h2.jpg'),
            require('../storage/images/h3.jpg'),
            require('../storage/images/h4.jpg'),
            require('../storage/images/h5.jpg'),
        ]
    },
    {
        id: 1,
        images: [
            require('../storage/images/girl.png'),
            require('../storage/images/h1.jpg'),
            require('../storage/images/h2.jpg'),
            require('../storage/images/h3.jpg'),
            require('../storage/images/h4.jpg'),
        ]
    },
    {
        id: 2,
        images: [
            require('../storage/images/girl.png'),
            require('../storage/images/h1.jpg'),
            require('../storage/images/h2.jpg'),
            require('../storage/images/h4.jpg'),
        ]
    },
    {
        id: 3,
        images: [
            require('../storage/images/girl.png'),
            require('../storage/images/h1.jpg'),
            require('../storage/images/h2.jpg'),
        ]
    },
]
const SearchContent = ({ handleGetImage }: props) => {
    return (
        <View>
            {
                data.map((item, index) => {
                    switch (item.images.length) {
                        case 6:
                            return (

                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                    {
                                        item.images.map((item, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                onPressIn={() => handleGetImage(item)}
                                                onPressOut={() => handleGetImage(null)}
                                                style={{ paddingBottom: 2 }}>
                                                <Image style={{ width: 135, height: 150 }} source={item} />
                                            </TouchableOpacity>
                                        ))
                                    }
                                </View>

                            );

                        case 5:
                            return (

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{
                                        flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: 274
                                    }}>
                                        {
                                            item.images.slice(0, 4).map((item, index) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    onPressIn={() => handleGetImage(item)}
                                                    onPressOut={() => handleGetImage(null)}
                                                    style={{ paddingBottom: 2 }}>
                                                    <Image style={{ width: 135, height: 150 }} source={item} />
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </View>
                                    <TouchableOpacity
                                        onPressIn={() => handleGetImage(item.images[4])}
                                        onPressOut={() => handleGetImage(null)}
                                        style={{ paddingBottom: 2 }}>
                                        <Image style={{ width: 135, height: 300 }}
                                            source={item.images[4]} />
                                    </TouchableOpacity>
                                </View>

                            );

                        case 4:
                            return (
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                    {
                                        item.images.map((item, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                onPressIn={() => handleGetImage(item)}
                                                onPressOut={() => handleGetImage(null)}
                                                style={{ paddingBottom: 2 }}>
                                                <Image style={{ width: 204, height: 200 }} source={item} />
                                            </TouchableOpacity>
                                        ))
                                    }
                                </View>
                            )
                        case 3:
                            return (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TouchableOpacity
                                        onPressIn={() => handleGetImage(item.images[0])}
                                        onPressOut={() => handleGetImage(null)}
                                        style={{ paddingBottom: 2 }}>
                                        <Image style={{ width: 273, height: 300 }} source={item.images[0]} />
                                    </TouchableOpacity>
                                    <View>
                                        {
                                            item.images.slice(1, 3).map((item, index) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    onPressIn={() => handleGetImage(item)}
                                                    onPressOut={() => handleGetImage(null)}
                                                    style={{ paddingBottom: 2 }}>
                                                    <Image style={{ width: 135, height: 150 }} source={item} />
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </View>
                                </View>
                            )
                        default:
                            break;
                    }
                })
            }
        </View>
    )
}

export default SearchContent