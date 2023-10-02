import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { videoData } from './DataBase'
import SingleReel from './SingleReel'
import { SwiperFlatList } from 'react-native-swiper-flatlist'
const ReelsComponent = () => {

    const [currentIndex, setCurrentIndex] = useState(Number);
    const handleChangeIndexValue = (item: any) => {
        setCurrentIndex(item);
    }
    return (
        <SwiperFlatList
            refreshing={false}
            onRefresh={() => {
                console.log('Call data');
            }}
            vertical
            onChangeIndex={({ index }) => handleChangeIndexValue(index)}
            renderItem={({ item, index }) =>
                <SingleReel
                    currentIndex={currentIndex}
                    item={item}
                    index={index} />}
            data={videoData}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default ReelsComponent